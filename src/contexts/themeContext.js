import React, { createContext, useState } from "react"
import { useToggleState } from "../hooks/useToggleState"

export const ThemeContext = createContext()

export const ThemeProvider = props => {
  const [isDarkTheme, setIsDarkTheme] = useToggleState(false)
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
