import React, { useState } from 'react'
import Login from '../components/Login'
import SplashPage from './SplashPage'

export default function SignIn() {
  const [showSplash, setShowSplash] = useState(true);
  const handleClick = () => {
    setShowSplash(!showSplash);
  }
  return (
    <div>
        {showSplash && <SplashPage handleClick={handleClick}/>}
        
        <Login />
    </div>
  )
}
