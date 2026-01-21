import { useState } from 'react'
import MainHeader from './MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader />
    </>
  )
}

export default App
