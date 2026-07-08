import { getDBConnection } from "@/app/lib/db";
import type { Model, GetModelsParams } from "../types";

export async function getModels() {
  const db = await getDBConnection();

  try {
    return await db.all("SELECT * FROM models");
  } finally {
    await db.close();
  }
}

export async function getModelsByCategorySlug(categorySlug: string) {
  const db = await getDBConnection();
  try {
    return await db.all(`SELECT * FROM models WHERE category=?`, [categorySlug]);
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
