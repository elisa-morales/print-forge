/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/hero-image.png";

export default function Home() {
  return (
    <main>
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
          <div className='absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-accent/50 blur-3xl' />
        </div>

        <div className='relative flex flex-col-reverse items-center justify-between gap-12 px-8 py-20 mx-auto md:flex-row md:py-32 max-w-7xl lg:px-12 lg:gap-16'>
          <div className='flex-1 space-y-8'>
            <p className='hidden text-xs tracking-widest uppercase text-muted md:block'>Your go-to platform for 3D printing files</p>
            <h1 className='text-4xl leading-tight md:text-6xl lg:text-7xl'>Discover what's possible with 3D Printing</h1>
            <p className='max-w-lg text-base leading-relaxed text-muted md:text-lg'>Join our community of creators and explore a vast library of user-submitted models.</p>

            <div className='flex gap-4 pt-2'>
              <Link href={"/3d-models"}>
                <button className='cursor-pointer px-8 py-3 text-sm uppercase tracking-widest text-foreground transition-colors duration-200 bg-transparent border border-foreground hover:bg-foreground hover:text-white'>
                  Browse Models
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full max-w-md md:max-w-lg'>
            <Image alt='hero image' src={heroImage.src} width={heroImage.width} height={heroImage.height} className='w-full h-auto' />
          </div>
        </div>
      </section>
    </main>
  );
}
