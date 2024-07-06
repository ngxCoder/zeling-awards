import { createPool } from '@vercel/postgres'

export const pool = createPool({
  connectionString: import.meta.env.POSTGRES_URL
})

export const db = pool
