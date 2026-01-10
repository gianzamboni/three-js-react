import { useEffect, useState } from 'react'

export function usePrefersDarkTheme() {
  const [prefersDark, setPrefersDark] = useState(() => {
    return typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  })

  const handleChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [handleChange])

  return prefersDark
}
