import { sequence } from 'astro:middleware'
import session from './session'

export const onRequest = sequence(session)
