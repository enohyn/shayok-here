"use client"

import { useTheme } from '../../src/contexts/theme-context'

export function ThemeDebug() {
  const { theme } = useTheme()
  
  return (
    <div className="fixed bottom-4 right-4 z-50 p-2 bg-black/50 text-white rounded">
      Current theme: {theme}
    </div>
  )
}