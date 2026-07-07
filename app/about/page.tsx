/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import aboutImage from "@/public/about-image.png";

export default function About() {
  return (
    <main>
      <section className='px-8 py-20 mx-auto max-w-7xl lg:px-12 lg:py-28'>
        <h1 className='mb-16 text-4xl text-center md:text-5xl lg:text-6xl'>About PrintForge</h1>

        <div className='grid items-center gap-12 mb-20 md:grid-cols-2 md:gap-16 lg:gap-20'>
          <div className='relative h-[350px] w-full md:h-[450px]'>
            <Image
              src={aboutImage.src}
              alt='PrintForge Community - A group of makers collaborating on 3D printing projects'
              width={aboutImage.width}
              height={aboutImage.height}
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
          <div className='space-y-6'>
            <p className='text-xs tracking-widest uppercase text-muted' aria-hidden='true'>
              About PrintForge
            </p>
            <h2 className='text-3xl md:text-4xl'>Empowering Makers Worldwide</h2>
            <p className='leading-relaxed text-muted'>
              Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
            </p>
            <p className='leading-relaxed text-muted'>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
          </div>
        </div>
      </section>

      <section className='py-20 lg:py-28' aria-labelledby='key-features'>
        <div className='px-8 mx-auto max-w-7xl lg:px-12'>
          <h2 id='key-features' className='sr-only'>
            Key Features
          </h2>
          <div className='grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12'>
            <article className='space-y-4'>
              <h3 className='text-2xl md:text-3xl'>100K+ Models</h3>
              <p className='leading-relaxed text-muted'>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </article>
            <article className='space-y-4 md:px-8 md:border-x md:border-border'>
              <h3 className='text-2xl md:text-3xl'>Active Community</h3>
              <p className='leading-relaxed text-muted'>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </article>
            <article className='space-y-4'>
              <h3 className='text-2xl md:text-3xl'>Free to Use</h3>
              <p className='leading-relaxed text-muted'>Most models are free to download, with optional premium features for power users.</p>
            </article>
          </div>
        </div>
      </section>

      <section className='px-8 py-20 mx-auto max-w-3xl lg:px-12 lg:py-28'>
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-4xl'>Our Vision</h2>
          <p className='leading-relaxed text-muted'>
            At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the
            sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
          </p>
          <p className='leading-relaxed text-muted'>
            Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </main>
  );
}
