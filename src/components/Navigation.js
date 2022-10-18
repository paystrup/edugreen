import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoBig from '../assets/svg/logo-big.svg';
import '../css/App.css';
import '../css/designsystem.css';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

// icons
// https://unpkg.com/browse/@heroicons/react@2.0.12/24/solid/
// https://unpkg.com/browse/@heroicons/react@2.0.12/24/outline/

export default function Navigation() {

    const NavLinksMobile = [
        {
            id: '1',
            icon: `<DocumentMagnifyingGlassIcon />`,
            path: '/search',
            name: 'Search'
        },
        {
            id: '2',
            icon: '',
            path: '/notifications',
            name: 'Notifications'
        }
    ]

    return (
        <nav>
            <div className='navMobile'>
                <NavLink to="/" className='navLogo'>
                    <img src={logoBig} alt="EduGreen"></img>
                </NavLink>
                <ul>
                    {
                        NavLinksMobile.map(({path, id, icon, name}) => {
                            return(
                                <li key={id}>
                                    <NavLink to={path}>
                                        {icon}
                                    </NavLink>
                                </li>
                            );
                    })
                    }

                </ul>
            </div>

            <div className='navDesktop'>
                <NavLink to="/" className='navLogo'>
                    <img src={logoBig} alt="EduGreen"></img>
                </NavLink>  
            </div>

        </nav>
    );
  
}
