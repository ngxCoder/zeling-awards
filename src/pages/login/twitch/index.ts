import { generateState } from 'arctic'
import { twitch } from '../../../lib/auth'

import type { APIContext } from 'astro'

export async function GET(context: APIContext): Promise<Response> {
  const state = generateState()
  const url = await twitch.createAuthorizationURL(state, {
    scopes: ['user:read:email']
  })

  context.cookies.set('twitch_oauth_state', state, {
    path: '/',
    secure: import.meta.env.PROD,
    httpOnly: false,
    maxAge: 60 * 10,
    sameSite: 'lax'
  })

  return context.redirect(url.toString())
}
