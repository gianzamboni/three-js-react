import { useEffect, useState } from 'react'

import { window } from './globals'

export function usePrefersDarkTheme() {
  const [prefersDark, setPrefersDark] = useState(() => {
    return window === undefined 
      ? false 
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const handleChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);

  useEffect(() => {
    if (window === undefined) return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [handleChange])

  return prefersDark
}
