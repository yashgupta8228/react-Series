import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"

    if(charAllowed) str+= "*/@$&!{}[]?"

    for(let i=1;i<= array.length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value = {password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />

          <button className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0'>COPY</button>
        </div>
        <div>
          <div>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="length">{length}</label>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
            setNumberAllowed((Prev)=>!prev)
          }}/>
          <label htmlFor="Char Include">charAllowed</label>
          </div>
          </div>

          
        </div>

       

      </div> 
    </>
  )
}

export default App
