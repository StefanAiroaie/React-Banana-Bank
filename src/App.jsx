import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bank from './assets/components/bank/Bank'

function App() {

  const [bankSoldo, setBankSoldo] = useState({
    soldNumber: 0
  })

  return (
    <>
      <Bank bankSoldo={bankSoldo} setBankSoldo={setBankSoldo} />
    </>
  )
}

export default App
