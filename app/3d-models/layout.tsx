import type { ReactNode } from "react";
import CategoriesNav from "@/app/components/CategoriesNav";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex flex-col min-h-screen md:flex-row'>
      <CategoriesNav />
      <main className='flex-1 px-6 py-8 md:ml-64 md:px-12 md:py-12 lg:px-16'>{children}</main>
    </div>
  );
}
