import { useState } from 'react'
import './App.css'

function App() {
  
    let [counter,setCounter] = useState(15);

    const addValue = () =>{
      setCounter(counter+1);
    }
    const subValue = () =>{
      setCounter(counter-1);
    }

  return (
    <>
     <h1>Counter</h1>
     <h3>Count: {counter} </h3>
     
     <button 
     onClick={
      addValue
     }
     className='b1'>Increase Value</button>
     <br />
     <button 
     onClick={subValue}
     className='b2'>Decrease Value</button>
     <h1 className='c'>hello</h1>
    </>
  )
}

export default App
