import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor : color}}></div>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="bg-red-400 flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white outline-none" onClick={()=>{setColor("red")}}> Red</button>
          <button className="bg-black flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white" onClick={()=>{setColor("black")}}> Black</button>
          <button className="bg-green-400 flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white" onClick={()=>{setColor("green")}}> Green</button>
          <button className="bg-green-900 flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white" onClick={()=>{setColor("olive")}}> Olive</button>
          <button className="bg-blue-400 flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white" onClick={()=>{setColor("blue")}}> Blue</button>
          <button className="bg-yellow-400 flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full text-white" onClick={()=>{setColor("yellow")}}> Yellow</button>
        </div>
      </div>
    
    </>
   
  )
}

export default App
