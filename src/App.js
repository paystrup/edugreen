import React from 'react';
import './css/App.css';
import './css/designsystem.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navigation from './components/Navigation';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <BottomBar/>
    </main>
  );
}

export default App;
