import { useEffect, useState } from 'react'

import { globalWindow } from './globals'

export function usePrefersDarkTheme() {
  const [prefersDark, setPrefersDark] = useState(() => {
    return globalWindow === undefined 
      ? false 
      : globalWindow.matchMedia('(prefers-color-scheme: dark)').matches
  })


  useEffect(() => {
    if (globalWindow === undefined) return
    const handleChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);

    const mediaQuery = globalWindow.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersDark
}
