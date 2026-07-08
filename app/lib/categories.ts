import { getDBConnection } from "@/app/lib/db";
import { Category } from "../types";

export async function getAllCategories(): Promise<Category[]> {
  const db = await getDBConnection();

  try {
    return await db.all("SELECT * FROM categories");
  } finally {
    await db.close();
  }
}

// export function getCategoryBySlug(slug: string): Category {
//   const category = categories.find((c) => c.slug === slug);
//   if (!category) {
//     throw new Error(`Category with slug ${slug} not found`);
//   }
//   return category;
// }

// export function getnameFromSlug(slug: string): string {
//   const category = getCategoryBySlug(slug);
//   return category.name;
// }
