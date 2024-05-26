import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  
  // let counter = 5 
  
  const addValue = ()=>{
    setCounter(counter+1)
    
    // console.log('Value Adeed', counter);
  }

  const removeValue = ()=>{
      setCounter(counter - 1)
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
