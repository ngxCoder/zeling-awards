import { twitch, lucia } from '../../../lib/auth'
import { OAuth2RequestError } from 'arctic'
import { generateIdFromEntropySize } from 'lucia'
import type { APIContext } from 'astro'
import { db } from '../../../lib/db'

export const prerender = false

export async function GET(context: APIContext): Promise<Response> {
  const code = context.url.searchParams.get('code')
  const state = context.url.searchParams.get('state')
  const storedState = context.cookies.get('twitch_oauth_state')?.value ?? null
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400
    })
  }

  try {
    const tokens = await twitch.validateAuthorizationCode(code)
    const twitchUserResponse = await fetch(
      'https://api.twitch.tv/helix/users',
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
          'Client-Id': import.meta.env.TWITCH_CLIENT_ID
        }
      }
    )

    const twitchUserResponseAsJson = (await twitchUserResponse.json()) as {
      data: TwitchUser[]
    }
    const twitchUser: TwitchUser = twitchUserResponseAsJson.data[0]

    // Replace this with your own DB client.

    const { rows } =
      await db.sql`SELECT * FROM auth_user WHERE twitch_id = ${twitchUser.id} LIMIT 1;`
    const existingUser = rows.length > 0 ? rows[0] : null

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {})
      const sessionCookie = lucia.createSessionCookie(session.id)
      context.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
      return context.redirect('/')
    }

    const userId = generateIdFromEntropySize(10) // 16 characters long

    await db.sql`INSERT INTO auth_user (id, twitch_id, login, display_name, email, profile_image_url) VALUES (${userId}, ${twitchUser.id}, ${twitchUser.login}, ${twitchUser.display_name}, ${twitchUser.email}, ${twitchUser.profile_image_url});`

    const session = await lucia.createSession(userId, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )
    return context.redirect('/')
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400
      })
    }
    return new Response(null, {
      status: 500
    })
  }
}

interface TwitchUser {
  id: string
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  email: string
  created_at: string
}
