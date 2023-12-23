import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: 'Megha',
    age: 20
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 py-4 px-2 rounded-md text-black mb-3'>Tailwind Test</h1>
     <Card userName='varsha' btnText='Click me'/>
      <Card userName='Megha' />
    </>
  )
}

export default App
