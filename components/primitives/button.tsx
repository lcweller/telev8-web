import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-cta-bg)] text-[var(--color-cta-text)] hover:bg-[var(--color-cta-bg-hover)] hover:-translate-y-px active:translate-y-0 active:brightness-95 rounded-full",
  secondary:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--border-default)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--border-strong)] rounded-full",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:translate-x-0.5 group rounded-md",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const classes = cn(
    base,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (props.as === "a") {
    const { href, ...anchorRest } = rest as Omit<
      ButtonAsLink,
      "variant" | "size" | "className" | "children" | "as"
    >;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
