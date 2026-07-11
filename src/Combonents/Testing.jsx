import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Testing() {
  const theme = useContext(ThemeContext)
  return (
    
    <>
      <h1>current theme {theme}</h1>
      
    </>
  )
}

export default Testing
