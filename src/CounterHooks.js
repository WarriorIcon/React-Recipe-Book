import React, { useState, useContext } from "react"
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) {
  console.log('render Counter Hook')
  /*useState Hook returns our state as an array. We deoncstruct
  the array and the element it returns is #1 the state and #2 a function that lets us set the state.*/

  const [count, setCount] = useState(initialCount)
  const style = useContext(ThemeContext)
  return (
    <div>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
   </div>
  )
}