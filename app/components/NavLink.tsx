"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/app/types";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <div className='text-xs uppercase tracking-widest'>
      <Link href={href} className={`px-3 py-2 transition-colors duration-200 cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent" : "text-muted"}`}>
        {children}
      </Link>
    </div>
  );
}
