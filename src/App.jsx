import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import LeaderboardPage from './LeaderboardPage.jsx';
import MaranaKabutopsPage from "./MaranaKabutopsPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leader" element={<LeaderboardPage />} />
            <Route path="/team/MaranaKabutops" element={<MaranaKabutopsPage />} />
        </Routes>
    </div>
  )
}

export default App
