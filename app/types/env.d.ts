/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEXT_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
