import NavLink from "@/app/components/NavLink";
import { getAllCategories } from "@/app/lib/categories";
import type { Category } from "@/app/types";

export default async function CategoriesNav() {
  const categories: Category[] = await getAllCategories();
  return (
    <aside className='sticky top-0 z-10 w-full bg-surface border-b border-border md:bg-transparent md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-b-0 md:border-none'>
      <div className='relative'>
        <nav className='w-full overflow-x-auto md:overflow-visible scrollbar-hide'>
          <ul className='flex px-6 py-4 whitespace-nowrap md:flex-col md:px-8 md:py-0 md:space-x-0 md:space-y-1'>
            <NavLink href='/3d-models'>All</NavLink>
            {categories.map((item) => (
              <NavLink key={item.slug} href={`/3d-models/categories/${item.slug}`}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className='absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-surface to-transparent md:hidden' />
      </div>
    </aside>
  );
}
