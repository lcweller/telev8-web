# telev8 — Deployment Recipe

Static-exported Next.js → Docker (nginx alpine) → GHCR → Unraid → Cloudflare Tunnel.

The Cloudflare Tunnel side is already configured on Unraid; this doc covers everything from the source repo to the running container.

---

## Prerequisites

- GitHub account `lcweller`
- A new (private) GitHub repo at `lcweller/telev8-web` (created in the one-time setup below)
- Docker installed on Unraid (default)
- Cloudflare Tunnel running on Unraid and pointed at the host port you choose (default `8080`)

---

## One-time setup

### 1. Create the GitHub repo

Either:
- **Web UI**: github.com → New → Owner `lcweller` → Name `telev8-web` → **Private** → Create. Skip README/license/gitignore (we have them locally).
- **`gh` CLI** (if installed):
  ```bash
  gh repo create lcweller/telev8-web --private --source=. --remote=origin --push
  ```

### 2. Push the initial commit

```bash
cd C:/Users/welle/Projects/telev8
git init -b main
git add .
git commit -m "Initial deploy artifacts"
git remote add origin git@github.com:lcweller/telev8-web.git
git push -u origin main
```

### 3. Wait for the GitHub Action

Push to `main` triggers `.github/workflows/build-and-publish.yml`:
1. Build the Docker image (multi-stage: Node alpine builds → nginx alpine serves)
2. Push to `ghcr.io/lcweller/telev8-web` with two tags: `:latest` and `:<short-sha>`

Watch progress at: `https://github.com/lcweller/telev8-web/actions`

First build typically takes 2–4 minutes (cached subsequent builds: 30–60 s).

### 4. Make the GHCR package public

By default the package inherits the repo's privacy (private). Flip it to public so Unraid can pull without auth:

1. `https://github.com/users/lcweller/packages/container/telev8-web/settings`
2. Scroll to **Danger Zone** → **Change visibility** → **Public** → confirm

(Alternative: keep it private and add Docker login credentials to Unraid. Public is simpler for a public-marketing-site image.)

### 5. Add the container in Unraid

**Option A — paste template XML:**
1. Unraid → Docker tab → **Add Container**
2. Click the orange **Template** dropdown → top of list → paste contents of `unraid-template.xml`
3. Apply

**Option B — manual config (if template paste doesn't work):**
1. Add Container with these fields:
   - **Name**: `telev8-web`
   - **Repository**: `ghcr.io/lcweller/telev8-web:latest`
   - **Network**: `bridge`
   - **Extra Parameters**: `--restart=unless-stopped`
   - **Add Port**: Host `8080`, Container `80`, TCP
2. Apply

### 6. Point the Cloudflare Tunnel at the host port

In your existing tunnel ingress config, set the service to `http://<unraid-host-ip>:8080` (or whatever host port you chose). No TLS — Cloudflare terminates at the edge; origin runs plain HTTP, which is correct for tunnels.

---

## Iteration loop (after one-time setup)

Every time you make changes:

```bash
git add .
git commit -m "<message>"
git push
```

GitHub Action rebuilds the image and pushes `:latest`. On Unraid:

1. Docker tab → click `telev8-web` → **Force Update**
2. Unraid pulls the new `:latest` and restarts the container
3. Verify: `curl -I https://telev8.tv` → expect `200 OK` + `cf-ray` header

Total iteration time: ~3–5 minutes from `git push` to live at `telev8.tv`.

To pin a specific image version (rollback or reproducibility):
```
ghcr.io/lcweller/telev8-web:<short-sha>   # from any historical commit
```
The Action emits `:<short-sha>` tags for every build.

---

## Changing the host port

In Unraid's container template GUI, the **WebUI Port** field is editable. Change it (e.g. `8081`) and click Apply — Unraid restarts the container with the new mapping. Then update your Cloudflare Tunnel ingress to point to the new port.

The container itself always listens on `:80` internally — no rebuild needed.

---

## Local Docker testing (optional)

Before pushing, verify the image works locally:

```bash
docker build -t telev8-web:dev .
docker run --rm -p 8080:80 telev8-web:dev
# open http://localhost:8080
```

Image size should be ~30 MB (nginx alpine layer + ~5 MB of static assets).

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| GHCR push fails with `denied: permission_denied` | Check Action workflow has `permissions.packages: write` (it does). Confirm the package settings allow GitHub Actions to publish. |
| Unraid can't pull the image | Verify the GHCR package visibility is set to **Public** (Step 4). If kept private, add `docker login ghcr.io -u lcweller -p <PAT>` on Unraid console with a personal access token that has `read:packages`. |
| Cloudflare returns 502 | Container isn't running OR host port doesn't match tunnel ingress. `docker ps` on Unraid to verify; `curl http://localhost:8080` on Unraid console to verify origin. |
| Cloudflare returns 404 for `/team` | nginx try_files chain isn't resolving. Check that the static export produced `out/team/index.html` (it does — verified in build). |
| Action fails on first push: "ghcr.io/lcweller/telev8-web: not found" | Normal on the first run. The package gets created by the Action's first successful push. Re-run the workflow after step 4 if needed. |

---

## What's in this repo

```
app/                          Next.js App Router source
components/                   marketing components + motion library
lib/                          shared utilities and motion tokens
public/                       static assets served as-is
docs/                         brand context, competitive landscape, source materials
nginx/default.conf            nginx config baked into the image
Dockerfile                    multi-stage image (node build → nginx serve)
.dockerignore                 keeps build context small + protects internal docs
.github/workflows/            GitHub Action: build + push to GHCR on every main push
unraid-template.xml           Unraid container template
DEPLOY.md                     this file
BRAND.md / DESIGN.md / IA.md / DECISIONS.md / CLAUDE.md   project context
```
