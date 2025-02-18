import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <Header></Header>
        other stuff
    </div>
  )
}

export default App
