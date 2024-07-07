import { lucia } from './lib/auth'
import { defineMiddleware } from 'astro:middleware'

export const prerender = false

export const onRequest = defineMiddleware(async (context, next) => {
  const astroCookies = context.cookies
  const requestCookies = context.request.headers.get('cookie')
  console.log('[middleware] astroCookies:', astroCookies)
  console.log('[middleware] requestCookies:', requestCookies)

  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null
  context.locals.variable = `${lucia.sessionCookieName}: ${requestCookies}`
  if (!sessionId) {
    context.locals.user = null
    context.locals.session = null
    return next()
  }

  const { session, user } = await lucia.validateSession(sessionId)
  console.debug({ session, user })
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id)
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie()
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )
  }
  context.locals.session = session
  context.locals.user = user
  return next()
})
