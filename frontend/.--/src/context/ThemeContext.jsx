import { createContext, startTransition, useEffect, useState } from "react"
import { readStorage, writeStorage } from "../utils/storage"

const STORAGE_KEY = "sirpam-theme"

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readStorage(STORAGE_KEY, "sunlit"))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStorage(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    startTransition(() => {
      setTheme((currentTheme) =>
        currentTheme === "sunlit" ? "midnight" : "sunlit",
      )
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
