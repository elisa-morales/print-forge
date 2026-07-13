import { getDBConnection } from "@/app/lib/db";

export async function getModels({ search, sort, categorySlug }: { search?: string; sort?: string; categorySlug?: string }) {
  const db = await getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (search) {
    sql += " WHERE (name LIKE ? OR description LIKE ?)";
    placeholders.push(`%${search}%`, `%${search}%`);
  }

  if (categorySlug) {
    sql += " WHERE category=?";
    placeholders.push(categorySlug);
  }

  if (sort) {
    if (sort === "alpha") {
      sql += " ORDER BY name ASC";
    }
    if (sort === "popular") {
      sql += " ORDER BY likes DESC";
    }
    if (sort === "recent") {
      sql += " ORDER BY dateAdded DESC";
    }
  }

  try {
    return await db.all(sql, placeholders);
  } finally {
    await db.close();
  }
}

export async function getModelById(id: string) {
  const db = await getDBConnection();
  try {
    return await db.get("SELECT * FROM models WHERE id=?", [id]);
  } finally {
    await db.close();
  }
}
