import Link from "next/link";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className='w-full bg-white'>
      <nav className='flex justify-between px-6 py-4'>
        <Link href='/'>
          <div className='relative cursor-pointer'>
            {/* Desktop Logo */}
            <Image src={PFLogo.src} width={PFLogo.width} height={PFLogo.height} alt='PrintForge Logo' className='w-[200px] h-auto hidden md:block' />
            {/* Mobile Logo */}
            <Image src={PFLogoIcon.src} width={PFLogoIcon.width} height={PFLogoIcon.height} alt='PrintForge Logo' className='w-[40px] h-auto block md:hidden' />
          </div>
        </Link>
        <ul className='flex items-center gap-2.5'>
          <li className='text-sm uppercase cursor-pointer'>
            <Link href='/3d-models'>3D Models</Link>
          </li>
          <li className='text-sm uppercase cursor-pointer'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
