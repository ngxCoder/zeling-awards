import type { APIContext } from 'astro'
import { db } from '../../../lib/db'

export const prerender = false

export async function POST(context: APIContext): Promise<Response> {
  if (!context.locals.session) {
    return new Response(null, {
      status: 401
    })
  }

  const userId = context.locals.session.userId
  const { candidateId }: VoteRequest = await context.request.json()

  const { rows: candidateRows } =
    await db.sql`SELECT * FROM candidates WHERE id = ${candidateId} LIMIT 1;`

  const candidate = candidateRows[0] as Candidate
  const categoryId = candidate.category_id

  // Check if user has already voted
  const { rows: voteRows } =
    await db.sql`SELECT * FROM votes WHERE user_id = ${userId} AND category_id = ${categoryId}`

  if (voteRows.length > 0) {
    await db.sql`UPDATE votes SET candidate_id = ${candidateId} WHERE user_id = ${userId} AND category_id = ${categoryId}`

    return new Response(null, {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  await db.sql`INSERT INTO votes (user_id, category_id, candidate_id) VALUES (${userId}, ${categoryId}, ${candidateId})`

  return new Response(null, {
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function GET(context: APIContext): Promise<Response> {
  if (!context.locals.session) {
    return new Response(null, {
      status: 401
    })
  }

  const userId = context.locals.session.userId
  const categoryUrl = context.params.categoryUrl

  const { rows: categoryRows } =
    await db.sql`SELECT * FROM categories WHERE url = ${categoryUrl} LIMIT 1;`

  const category = categoryRows[0] as Category

  if (!category) {
    return new Response(null, {
      status: 404
    })
  }
  const { rows: voteRows } =
    await db.sql`SELECT * FROM votes WHERE user_id = ${userId} AND category_id = ${category.id};`

  const vote = voteRows[0] as Vote

  return new Response(JSON.stringify(vote), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
