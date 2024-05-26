import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    
      <>
      <h1 className="bg-green-400 text-red text-white">Tailwind Test</h1>
      <br />
      <Card/>
      <br />
      <Card userName='Sahar' seeMee = 'Hey' />
      </>
    
  )
}

export default App
