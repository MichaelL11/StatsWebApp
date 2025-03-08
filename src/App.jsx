import { useState } from 'react';
import Header from './Header.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LeaderboardPage from './pages/LeaderboardPage.jsx';
import TeamPage from './pages/TeamPage.jsx'; // The new generic team page
import SchedulePage from './pages/SchedulePage.jsx'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leader" element={<LeaderboardPage />} />
                <Route path="/team/:teamName" element={<TeamPage />} /> {/* Dynamic route */}
                <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
        </div>
    );
}

export default App;
