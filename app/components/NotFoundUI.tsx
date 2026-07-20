import Link from "next/link";
import { NotFoundUIProps } from "@/app/types";

export default function NotFoundUI({ title, subtitle, link_text, link_href }: NotFoundUIProps) {
  return (
    <main className='flex flex-1 h-screen flex-col items-center justify-center gap-2'>
      {/* <span className='mt-10 text-7xl'>🙈</span> */}
      <h1 className='text-4xl font-semibold'>{title}</h1>
      <p>{subtitle}</p>
      <Link href={link_href}>
        <button className='cursor-pointer px-8 py-3 text-sm uppercase tracking-widest text-foreground transition-colors duration-200 bg-transparent border border-foreground hover:bg-foreground hover:text-white'>
          {link_text}
        </button>
      </Link>
    </main>
  );
}
