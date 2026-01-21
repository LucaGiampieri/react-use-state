import { useState } from 'react'
import MainHeader from './MainHeader'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader />
      <MainContent />
    </>
  )
}

export default App
