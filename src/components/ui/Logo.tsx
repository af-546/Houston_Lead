import { Link } from "react-router-dom";
import { publicAsset } from "@/lib/publicAsset";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  variant?: "light" | "dark";
};

const logoFrameLight =
  "inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-slate/10 shadow-logo overflow-hidden";
const logoFrameDark =
  "inline-flex items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 overflow-hidden";

export function Logo({
  className = "",
  imageClassName = "h-10 w-auto",
  showText = false,
  variant = "light",
}: LogoProps) {
  const frameClass = variant === "dark" ? logoFrameDark : logoFrameLight;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`${frameClass} p-1.5`}>
        <img
          src={publicAsset(site.logo.replace(/^\//, ""))}
          alt={`${site.name} logo`}
          className={`object-contain rounded-lg ${imageClassName}`}
        />
      </span>
      {showText && (
        <span className="font-display font-semibold tracking-tight text-lg">
          <span className="text-brand-light">Houston</span>
          <span className={variant === "dark" ? "text-ink-inverse" : "text-slate"}> LEAD</span>
        </span>
      )}
    </span>
  );
}

export function LogoLink({
  onClick,
  className = "",
  imageClassName = "h-10 md:h-11 w-auto",
  variant = "light",
}: {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  imageClassName?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link to="/" onClick={onClick} className={className}>
      <Logo imageClassName={imageClassName} variant={variant} />
    </Link>
  );
}
