import { createContext, useState } from 'react'

interface IThemeContext {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ThemeContext = createContext({} as unknown as IThemeContext)

export default function ThemeProvider ({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
