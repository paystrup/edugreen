import React from 'react';
import './css/App.css';
import './css/designsystem.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navigation from './components/Navigation';
import BottomBar from './components/BottomBar';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import OpretSalg from './pages/OpretSalg';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element= {<ProfilePage/>}/>
        <Route path="/chat" element= {<ChatPage/>}/>
        <Route path="/salg" element= {<OpretSalg/>}/>
        <Route path="/:slug" element= {<BlogPage/>}/>
      </Routes>
      <BottomBar/>
    </main>
  );
}

export default App;
