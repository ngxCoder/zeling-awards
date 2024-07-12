import { Lucia } from 'lucia'
import { NodePostgresAdapter } from '@lucia-auth/adapter-postgresql'
import { db } from './db'
import { Twitch } from 'arctic'

const adapter = new NodePostgresAdapter(db, {
  user: 'users',
  session: 'sessions'
})

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD
    }
  },
  getUserAttributes: (attributes) => {
    return {
      twitchId: attributes.twitch_id,
      username: attributes.display_name,
      login: attributes.login,
      email: attributes.email,
      profileImageUrl: attributes.profile_image_url
    }
  }
})

export const twitch = new Twitch(
  import.meta.env.TWITCH_CLIENT_ID,
  import.meta.env.TWITCH_CLIENT_SECRET,
  import.meta.env.TWITCH_REDIRECT_URI
)

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  twitch_id: number
  login: string
  display_name: string
  email: string
  profile_image_url: string
}
