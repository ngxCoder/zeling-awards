/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly POSTGRES_URL: string
  readonly TWITCH_CLIENT_ID: string
  readonly TWITCH_CLIENT_SECRET: string
  readonly TWITCH_REDIRECT_URI: string
  readonly SHOW_SIGN_OUT: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    session: import('lucia').Session | null
    user: import('lucia').User | null
    variable: string | null
  }
}
