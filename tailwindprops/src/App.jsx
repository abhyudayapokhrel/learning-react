import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "abhyudaya",
    age: 21
  }
  let newArray = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Abhyudaya Pokhrel" someObj = {myObj} someArr = {newArray}/>
      <Card userName="Kriti"/>
    </>
  )
}

export default App
