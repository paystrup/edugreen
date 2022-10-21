import React from 'react'
import { NavLink, useParams, useLocation } from 'react-router-dom';
import logoBig from '../assets/svg/logo-big.svg';
import '../css/App.css';
import '../css/designsystem.css';
import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowLeftIcon} from '@heroicons/react/outline'

// icons
// https://unpkg.com/browse/@heroicons/react@1.0.6/outline/
// 

export default function Navigation() {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params); //udskriver det slug navn man er inde på i log
    const id = params.id;

    const location = useLocation();
    console.log(location.pathname);

    return (
        <nav>
            <div className='navMobile paddingWide'>

                {location.pathname === '/practical' || location.pathname === '/editprofile' || location.pathname === (`/blog/${id}`) ?
                
                (
                    <div className="PracticalIcon goBack">
                        <p onClick={() => navigate(-1)} className="flex iconsize goBackp"><ArrowNarrowLeftIcon/><p className="font-bodytext">GÅ TILBAGE</p></p>
                    </div>
                )

                : 
                
                (
                    <NavLink to="/" end className='navLogo'>
                        <img src={logoBig} alt="EduGreen"></img>
                    </NavLink>
                )
                }
                
                
                
            
                <ul>
                    <li>
                        <NavLink to="/search" className='iconsize'>
                            <SearchIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification" className='iconsize'>
                            <BellIcon />
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='navDesktop paddingWide'>
                    <NavLink to="/" end className='navLogo'><img src={logoBig} alt="EduGreen"></img></NavLink>
                    <ul>
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li><NavLink to="/favourites">Mine favoritter</NavLink></li>
                        <li><NavLink to="/salg">Sælg bog</NavLink></li>
                        <li>
                            <NavLink to="/search" className='iconsize'>
                                <SearchIcon />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notification" className='iconsize'>
                                <BellIcon />
                            </NavLink>
                        </li>
                    </ul>
            </div>

        </nav>
    );
  
}
