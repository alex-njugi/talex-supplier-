// src/components/ui/Breadcrumbs.tsx
import { Link } from "react-router-dom";

export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav className={`text-sm text-gray-600 ${className}`}>
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center">
          {it.href ? (
            <Link to={it.href} className="hover:text-brand">
              {it.label}
            </Link>
          ) : (
            <span className="text-gray-400">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
        </span>
      ))}
    </nav>
  );
}
