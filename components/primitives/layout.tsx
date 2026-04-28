import { cn } from "@/lib/cn";

type Container = "tight" | "standard" | "wide";
type Padding = "tight" | "default" | "large";

const containerClass: Record<Container, string> = {
  tight: "container-tight",
  standard: "container-standard",
  wide: "container-wide",
};

const paddingClass: Record<Padding, string> = {
  tight: "py-[clamp(3rem,6vw,4rem)]",
  default: "py-[clamp(4rem,10vw,8rem)]",
  large: "py-[clamp(6rem,14vw,10rem)]",
};

type SectionProps = {
  children: React.ReactNode;
  container?: Container;
  padding?: Padding;
  id?: string;
  className?: string;
  as?: "section" | "div" | "main";
  ariaLabel?: string;
};

export function Section({
  children,
  container = "standard",
  padding = "default",
  id,
  className,
  as = "section",
  ariaLabel,
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn("relative", paddingClass[padding], className)}
    >
      <div className={containerClass[container]}>{children}</div>
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function AccentBar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-1 w-8 rounded-full", className)}
      style={{ background: "var(--color-accent-400)" }}
    />
  );
}
