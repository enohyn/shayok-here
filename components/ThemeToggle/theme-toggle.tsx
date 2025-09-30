"use client"

import { useTheme } from '../../src/contexts/theme-context'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <button
        className={`
          relative inline-flex h-8 w-14 items-center justify-center rounded-full 
          border border-white/20 bg-white/10 backdrop-blur-md 
          supports-[backdrop-filter]:bg-white/5
          shadow-[0_4px_16px_0_rgba(13,148,136,0.15)]
          hover:bg-white/15 hover:border-white/30
          focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-transparent
          transition-all duration-300 ease-in-out
          ${className}
        `}
        aria-label="Loading theme toggle"
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-slate-600 to-slate-700" />
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="h-3 w-3 rounded-full bg-slate-400 animate-pulse" />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-8 w-14 items-center justify-center rounded-full 
        border border-white/20 bg-white/10 backdrop-blur-md 
        supports-[backdrop-filter]:bg-white/5
        shadow-[0_4px_16px_0_rgba(13,148,136,0.15)]
        hover:bg-white/15 hover:border-white/30
        focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-transparent
        transition-all duration-300 ease-in-out
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle background */}
      <div
        className={`
          absolute inset-1 rounded-full transition-all duration-300 ease-in-out
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-600 to-slate-700' 
            : 'bg-gradient-to-r from-amber-400 to-orange-500'
          }
        `}
      />
      
      {/* Sliding indicator */}
      <div
        className={`
          relative z-10 flex h-6 w-6 items-center justify-center rounded-full 
          bg-white/90 backdrop-blur-sm shadow-lg
          transition-all duration-300 ease-in-out transform
          ${theme === 'dark' ? 'translate-x-[-12px]' : 'translate-x-[12px]'}
        `}
      >
        {theme === 'dark' ? (
          <FiMoon className="h-3 w-3 text-slate-700" />
        ) : (
          <FiSun className="h-3 w-3 text-amber-600" />
        )}
      </div>
    </button>
  )
}