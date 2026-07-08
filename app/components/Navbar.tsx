import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";

export default function Navbar() {
  return (
    <header className='w-full bg-surface border-b border-border'>
      <nav className='flex items-center justify-between px-8 py-5 mx-auto max-w-7xl lg:px-12'>
        <Link href='/'>
          <div className='relative cursor-pointer'>
            {/* Desktop Logo */}
            <img src={PFLogo.src} alt='PrintForge Logo' className='w-[150px] h-auto hidden md:block' />
            {/* Mobile Logo */}
            <img src={PFLogoIcon.src} alt='PrintForge Logo' className='w-[40px] h-auto block md:hidden' />
          </div>
        </Link>
        <ul className='flex items-center gap-2 md:gap-6'>
          <NavLink href='/3d-models'>3D Models</NavLink>
          <NavLink href='/about'>About</NavLink>
        </ul>
      </nav>
    </header>
  );
}
