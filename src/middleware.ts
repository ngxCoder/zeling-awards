import { lucia } from './lib/auth'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null
  console.debug(sessionId)
  if (!sessionId) {
    context.locals.user = null
    context.locals.session = null
    return next()
  }

  const { session, user } = await lucia.validateSession(sessionId)
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id)
    console.debug(sessionCookie)
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie()
    console.debug(sessionCookie)
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
