export const WINDOW_EXISTS = typeof window !== "undefined";

export const LOCAL_STORAGE_EXISTS = WINDOW_EXISTS && !!window.localStorage;
