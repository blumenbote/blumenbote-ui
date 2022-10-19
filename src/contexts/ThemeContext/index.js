import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { GlobalStyle } from './styles.js'

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const ThemeContext = createContext()

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(props.theme)

  const getThemeColor = () => {
    switch (props.themeType) {
      case 'two':
        return theme.colors.darkTextColor
      default:
        return theme.colors.colorPage
    }
  }

  const update = (theme) => {
    setTheme(theme)
  }

  const merge = (partTheme) => {
    setTheme({
      ...theme,
      ...partTheme
    })
  }

  return (
    <ThemeContext.Provider value={[theme, { update, merge }]}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle getThemeColor={getThemeColor} {...props} />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(ThemeContext)
  return themeManager || [{}]
}
