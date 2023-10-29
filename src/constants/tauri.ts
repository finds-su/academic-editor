import { appWindow as tauriAppWindow, WebviewWindow } from '@tauri-apps/api/window';

// @ts-ignore
export const isTauriApp = window.__TAURI__ !== undefined;

export const appWindow: WebviewWindow | undefined = isTauriApp ? tauriAppWindow : undefined