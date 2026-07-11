import React from 'react'
import { useContext } from 'react'
import ThemeContext from './Combonents/ThemeContext'
import Testing from './Combonents/Testing'
import Counter from './Counter'

function App() {
  return (

    <div>
      <ThemeContext.Provider value = 'dark'>
        <Testing/>
      </ThemeContext.Provider>
      <Counter/>

      
    </div>
  )
}

export default App
