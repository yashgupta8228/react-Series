import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    
      <>
      <div className="bg-green text-red">Tailwind Test</div>
      <br />
      <Card/>
      <br />
      <Card userName='Sahar' seeMee = 'Hey' />
      </>
    
  )
}

export default App
