import type { APIContext } from 'astro'
import { db } from '../../../lib/db'

export const prerender = false

export async function GET(context: APIContext): Promise<Response> {
  const categoryUrl = context.params.categoryUrl

  const { rows: categoryRows } =
    await db.sql`SELECT * FROM categories WHERE url = ${categoryUrl} LIMIT 1;`

  const category = categoryRows[0] as Category

  if (!category) {
    return new Response(null, {
      status: 404
    })
  }

  const { rows: candidatesRows } =
    await db.sql`SELECT * FROM candidates WHERE category_id = ${category.id};`

  category.candidates = candidatesRows as Candidate[]

  const { rows: previousCategoryRows } =
    await db.sql`SELECT * FROM categories WHERE "order" = ${category.order - 1} LIMIT 1;`

  category.prev = previousCategoryRows[0] as Category

  const { rows: nextCategoryRows } =
    await db.sql`SELECT * FROM categories WHERE "order" = ${category.order + 1} LIMIT 1;`

  category.next = nextCategoryRows[0] as Category

  return new Response(JSON.stringify(category), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
