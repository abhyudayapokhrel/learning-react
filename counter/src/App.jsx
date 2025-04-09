import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

//  let counter = 15;

 const addValue = () =>{
    //counter++;
    // counter value increases but is not shown in the DOM
    if(counter<=19)
      setCounter(counter+1)
    else{
      alert("TOO MUCH")
    }
 }

 const removeValue = () =>{
  if(counter>=1)
    setCounter(counter-1)
  else{
    alert("WHY SO NEGATIVE")
  }
 }


  return (
    <>
      <h1>Counter App | Abhyudaya</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Decrease Value {counter}</button>

      <br /> <br />
      <p>Count Here Also: {counter}</p>
    </>
  )
}

export default App
