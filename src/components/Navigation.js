import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoBig from '../assets/svg/logo-big.svg';
import '../css/App.css';
import '../css/designsystem.css';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'

// icons
// https://unpkg.com/browse/@heroicons/react@2.0.12/24/solid/
// https://unpkg.com/browse/@heroicons/react@2.0.12/24/outline/

export default function Navigation() {

    return (
        <nav>
            <div className='navMobile paddingWide'>
                <NavLink to="/" className='navLogo'>
                    <img src={logoBig} alt="EduGreen"></img>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/notifications" className='iconsize'>
                            <MagnifyingGlassIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className='iconsize'>
                            <BellIcon />
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='navDesktop paddingWide'>
                    <NavLink to="/" className='navLogo'><img src={logoBig} alt="EduGreen"></img></NavLink>
                    <ul>
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li><NavLink to="/">Mine favoritter</NavLink></li>
                        <li><NavLink to="/">Sælg bog</NavLink></li>
                        <li>
                            <NavLink to="/notifications" className='iconsize'>
                                <MagnifyingGlassIcon />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search" className='iconsize'>
                                <BellIcon />
                            </NavLink>
                        </li>
                    </ul>
            </div>

        </nav>
    );
  
}
