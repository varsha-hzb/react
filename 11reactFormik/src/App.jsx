import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import BasicForm from './components/BasicForm'
import AdvancedForm from './components/AdvancedForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BasicForm/> */}
      <AdvancedForm/>
    </>
  )
}

export default App
