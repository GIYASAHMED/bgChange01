import { useState } from 'react'
import './App.css'
import Btn from './components/btn'


function App() {
 
  const [color, setColor] = useState("")

  return (
    <div className='w-full h-screen relative' style={{backgroundColor:color}}>
      <div className='bg-orange-400 absolute bottom-0 p-4 w-full flex justify-center gap-5'>
        <Btn name="Black" bc="black" text="white" fn ={()=>setColor('black')}/>
        <Btn name="Blue" bc ="blue" text="white" fn ={()=>setColor('blue')}/>
        <Btn name="Pink" bc="pink" text="black" fn ={()=>setColor('pink')}/>
      </div>
    </div>
  )
}

export default App
