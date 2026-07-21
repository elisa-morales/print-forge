import { getDBConnection } from "@/app/lib/db";

export async function getModels({ search, sort, categorySlug, modelsPerPage, page }: { search?: string; sort?: string; categorySlug?: string; page: number; modelsPerPage: number }) {
  const db = await getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (search || categorySlug) {
    const where = [];
    if (search) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${search}%`, `%${search}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
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

  const offset = (page - 1) * modelsPerPage;

  if (page && modelsPerPage) {
    sql += " LIMIT ? OFFSET ?";
    placeholders.push(modelsPerPage, offset);
  }

  try {
    console.log(await db.all(sql, placeholders));
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

export async function getModelCount({ search, categorySlug }: { search?: string; categorySlug?: string }) {
  const db = await getDBConnection();

  let sql = "SELECT COUNT(*) as count FROM models";
  const placeholders = [];

  if (search || categorySlug) {
    const where = [];
    if (search) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${search}%`, `%${search}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
  }

  try {
    const res = await db.get(sql, placeholders);
    return res.count;
  } finally {
    await db.close();
  }
}
