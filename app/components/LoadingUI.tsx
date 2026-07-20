import Image from "next/image";

export default function LoadingUI({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-1 h-screen flex-col items-center justify-center gap-2'>
      <h1 className='font-bold text-2xl text-orange-400 text-center mb-4'>{children}</h1>
      <Image src='/loading-dots.svg' alt='Loading...' width={100} height={100} className='mx-auto' />
    </main>
  );
}
