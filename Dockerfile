# syntax=docker/dockerfile:1.7

# ---------- Stage 1: build the static export ----------
# node:24-slim (Debian/glibc) instead of alpine — Tailwind v4's lightningcss
# native binary doesn't reliably install on alpine's musl libc.
FROM node:24-slim AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Install deps with a deterministic, cached layer.
# --include=optional ensures platform-specific native binaries (lightningcss,
# tailwind oxide) get installed for the build platform.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --include=optional

# Copy only the directories Next.js needs to build
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY public ./public
COPY next.config.mjs tsconfig.json postcss.config.mjs ./

# Static export produces ./out
RUN npm run build

# ---------- Stage 2: serve the export with nginx ----------
FROM nginx:alpine AS runner

# Replace nginx defaults with our static-site config
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

# Container always listens on :80 — the host port is mapped at deploy time
# (Unraid template exposes the host port as a GUI variable).
EXPOSE 80

# Light healthcheck — passes once nginx is serving the index
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
