import type { APIContext } from 'astro'
import { db } from '../../../lib/db'

export const prerender = false

export async function GET(_context: APIContext): Promise<Response> {
  const { rows } = await db.sql`SELECT * FROM categories ORDER BY "order" ASC;`
  const categories = rows as Category[]

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
