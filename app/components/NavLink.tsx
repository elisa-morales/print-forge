import Link from "next/link";
import { NavLinkProps } from "@/app/types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <div className='text-sm uppercase'>
      <Link href={href} className={`px-4 py-2 ${isActive ? "text-orange-accent" : "text-gray-700"}  transition-colors rounded-md cursor-pointer hover:text-orange-accent`}>
        {children}
      </Link>
    </div>
  );
}
