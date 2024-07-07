import { lucia } from './lib/auth'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null
  const fromHeader =
    context.request.headers.get(lucia.sessionCookieName) ?? null
  context.locals.variable = `${lucia.sessionCookieName}: ${fromHeader}`
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
