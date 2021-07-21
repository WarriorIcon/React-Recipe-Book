import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App')
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>    
      <div>Counter</div>
      <Counter initialCount={5}/>    
    
      <div>Counter Hooks</div>
      <CounterHooks initialCount={3}/>
      <div>
        <button onClick={() => setTheme(prevTheme => {
          return prevTheme === 'red' ? 'blue' : 'red'})}>Toggle Theme</button>
      </div>  
    </ThemeContext.Provider>
  )
}

export default App;
