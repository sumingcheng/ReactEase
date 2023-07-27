const isWindows = navigator.platform.startsWith('Win')

export const pathSeparator = isWindows ? '\\' : '/'

export const isDev = import.meta.env.DEV
