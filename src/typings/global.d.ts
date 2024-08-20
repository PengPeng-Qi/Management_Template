/**
 * 拓展 vite 的 UserConfig 接口
 */

/** 拓展 ImportMetaEnv 接口 */
declare interface ImportMetaEnv {
  readonly VITE_ROUTER_MODE: "hash" | "history";
  readonly VITE_PORT: number;
  readonly VITE_OPEN: boolean;
  readonly VITE_PUBLIC_URL: string;
  readonly VITE_Global_APP_TITLE: string;
  readonly VITE_DROP_CONSOLE: boolean;
}
