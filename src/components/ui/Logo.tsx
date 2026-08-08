import { Link } from "react-router-dom";
import { publicAsset } from "@/lib/publicAsset";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
};

const logoFrameClass =
  "inline-flex items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-white/10 shadow-logo overflow-hidden";

export function Logo({ className = "", imageClassName = "h-10 w-auto", showText = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`${logoFrameClass} p-1.5`}>
        <img
          src={publicAsset(site.logo.replace(/^\//, ""))}
          alt={`${site.name} logo`}
          className={`object-contain rounded-xl ${imageClassName}`}
        />
      </span>
      {showText && (
        <span className="font-display font-bold tracking-tight text-lg">
          <span className="text-gradient">Houston</span>
          <span className="text-ink"> LEAD</span>
        </span>
      )}
    </span>
  );
}

export function LogoLink({
  onClick,
  className = "",
  imageClassName = "h-10 md:h-11 w-auto",
}: {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link to="/" onClick={onClick} className={className}>
      <Logo imageClassName={imageClassName} />
    </Link>
  );
}
