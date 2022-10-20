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
import EditProfile from './pages/EditProfile';
import PracticalInfo from './pages/PracticalInfo';
import Favourites from './pages/Favourites';
import NotificationPage from './pages/NotificationPage';
import BookPage from './pages/BookPage';
import SignIn from './pages/SignIn';

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element= {<ProfilePage/>}/>
        <Route path="/editprofile" element= {<EditProfile/>}/>
        <Route path="/practical" element= {<PracticalInfo/>}/>
        <Route path="/chat" element= {<ChatPage/>}/>
        <Route path="/salg" element= {<OpretSalg/>}/>
        <Route path="/login" element= {<SignIn/>}/>
        <Route path="/favourites" element= {<Favourites />}/> 
         <Route path="/notification" element= {<NotificationPage/>}/> 
        <Route path="/:slug" element= {<BlogPage/>}/>
        <Route path="/bookpage/:id" element= {<BookPage/>} exact={true}/>
      </Routes>
      <BottomBar/>
    </main>
  );
}

export default App;
