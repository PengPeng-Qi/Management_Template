// @see: https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROUTER_MODE: "hash" | "history";
  readonly VITE_PORT: number;
  readonly VITE_OPEN: boolean;
  readonly VITE_PUBLIC_URL: string;
  readonly VITE_Global_TITLE: string;
  readonly VITE_DROP_CONSOLE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
