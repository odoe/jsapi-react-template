import React from "react"
import { AppContext } from '../contexts/App'

interface HeaderProps {
  appTitle: string
}

export const Header = ({ appTitle }: HeaderProps) => {
  return (
    <AppContext.Consumer>
      {value => (
        <header className="header">
          <span>{appTitle} ({!value.loaded && 'not'} loaded)</span>
        </header>
      )}
    </AppContext.Consumer>
  )
}
