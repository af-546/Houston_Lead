import { Link } from "react-router-dom";
import { publicAsset } from "@/lib/publicAsset";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
};

export function Logo({ className = "", imageClassName = "h-10 w-auto", showText = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={publicAsset(site.logo.replace(/^\//, ""))}
        alt={`${site.name} logo`}
        className={`object-contain ${imageClassName}`}
      />
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
    <Link to="/" onClick={onClick} className={className} data-cursor="pointer">
      <Logo imageClassName={imageClassName} />
    </Link>
  );
}
