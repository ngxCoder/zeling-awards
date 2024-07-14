import type { APIContext } from 'astro'
import { db } from '../../lib/db'

export const prerender = false

export interface Category {
  id: number
  name: string
  url: string
  order: number
}

export async function GET(_context: APIContext): Promise<Response> {
  const { rows } = await db.sql`SELECT * FROM categories ORDER BY "order" ASC;`
  const categories = rows

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
