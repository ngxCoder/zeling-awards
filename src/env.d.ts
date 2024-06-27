/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TWITCH_CLIENT_ID: string
  readonly TWITCH_CLIENT_SECRET: string
  readonly AUTH_SECRET: string
  readonly AUTH_TRUST_HOST: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
