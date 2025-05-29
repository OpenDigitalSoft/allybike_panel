import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginView from './login/views/LoginView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginView />
    </>
  )
}

export default App
