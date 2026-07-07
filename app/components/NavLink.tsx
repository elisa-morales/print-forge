import Link from "next/link";
import { NavLinkProps } from "@/app/types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <div className='text-xs uppercase tracking-widest'>
      <Link
        href={href}
        className={`px-3 py-2 transition-colors duration-200 cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent" : "text-muted"}`}>
        {children}
      </Link>
    </div>
  );
}
