import { useState } from 'react';
import Header from './Header.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import LeaderboardPage from './LeaderboardPage.jsx';
import TeamPage from './TeamPage.jsx'; // The new generic team page

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leader" element={<LeaderboardPage />} />
                <Route path="/team/:teamName" element={<TeamPage />} /> {/* Dynamic route */}
            </Routes>
        </div>
    );
}

export default App;
