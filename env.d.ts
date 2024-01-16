/**
 * 拓展 vite 的 UserConfig 接口
 */

/// <reference types="vite/client" />

/** 拓展 ImportMetaEnv 接口 */
interface ImportMetaEnv {
  readonly VITE_ROUTER_MODE: 'hash' | 'history'
  readonly VITE_OPEN: boolean
}
