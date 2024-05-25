import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  
  // let counter = 5 
  
  const addValue = ()=>{
    if(counter<=20)
    setCounter(counter++)
    // console.log('Value Adeed', counter);
  }

  const removeValue = ()=>{
    if(counter>=0)
      setCounter(counter--)
    // console.log('counter', counter);
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
