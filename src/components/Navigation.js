import React from 'react'
import { NavLink, useParams, useLocation, Link } from 'react-router-dom';
import logoBig from '../assets/svg/logo-big.svg';
import '../css/App.css';
import '../css/designsystem.css';
import { SearchIcon, BellIcon, UserIcon } from '@heroicons/react/outline'
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
                    <div className=" goBack">
                        <p onClick={() => navigate(-1)} className="flex iconsize goBackp"><ArrowNarrowLeftIcon/><p className="font-bodytext">GÅ TILBAGE</p></p>
                    </div>
                )

                : 
                
                (
                    <Link to="/" end className='navLogo'>
                        <img src={logoBig} alt="EduGreen"></img>
                    </Link>
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
                        <li><NavLink to="/favourites">Favoritter</NavLink></li>
                        <li><NavLink to="/salg">Sælg bog</NavLink></li>
                        <li><NavLink to="/chat">Mine beskeder</NavLink></li>
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
                        <li>
                            <NavLink to="/profile" className='iconsize'>
                                <UserIcon />
                            </NavLink>
                        </li>
                    </ul>
            </div>

        </nav>
    );
  
}
