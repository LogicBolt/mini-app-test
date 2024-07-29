import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './pages/LoadingScreen';
import MainPage from './pages/MainPage';
import Tasks from './pages/Tasks';
import LeaderBoard from './pages/LeaderBoard';
import Convert from './pages/Convert';
import Friends from './pages/Friends';
// import other pages
import { AppRoot } from '@telegram-apps/telegram-ui';
const App: React.FC = () => {
  console.log('11111')
  return (
    <AppRoot>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="main" element={<MainPage />} >
            <Route path="tasks" element={<Tasks />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="convert" element={<Convert />} />
            <Route path="friends" element={<Friends />} />
          </Route>

          {/* Add routes for other pages */}
        </Routes>
      </Router>
    </AppRoot>
  );
};

export default App;
