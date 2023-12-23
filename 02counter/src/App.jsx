import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 10

  const addValue = () => {
    // console.log("value added", Math.random());
    // console.log("clicked", counter);
    // counter = counter + 1
    // setCounter(Math.mind(20,counter+1))

    if (counter < 10) {
      setCounter(counter + 1)
    }

  }

  const removeValue = () => {
    // setCounter(Math.max(0,counter-1))
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>React is awesome: {counter}</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
    </>
  )
}

export default App


