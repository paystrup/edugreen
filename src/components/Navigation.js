import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import logoBig from "../assets/svg/logo-big.svg";
import "../css/App.css";
import "../css/designsystem.css";

// icons: heroicons version 1.0.6
// https://unpkg.com/browse/@heroicons/react@1.0.6/outline/
import {
  SearchIcon,
  BellIcon,
  UserIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/outline";

import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);

  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //     // Page start, both scroll values are 0
  //     let oldValue = 0;
  //     let newValue = 0;
      
  //     // Listen to scroll
  //     window.addEventListener('scroll', function (e) {
  
  //       // The new value is the amount scrolled on the y-axis
  //       newValue = window.pageYOffset;
  
  //       // Subtract and update the state
  //       if (oldValue - newValue < 0) {
  //         setShow(false);
  //       } else if (oldValue - newValue > 0) {
  //         setShow(true);
  //       }
  
  //       // And update the values again
  //       oldValue = newValue;
  //     });
  //   }, []);


  return (
    <nav id="navbar">
      {/* MOBILE NAV */}
      <div className="navMobile paddingWide">
        {/* Change logo to back button on specific subpages*/}
        {location.pathname === "/practical" ||
        location.pathname === "/editprofile" ||
        location.pathname === "/search" ||
        location.pathname === "/blog/sadan-saelger-du-dine-brugte-studieboger" ||
        location.pathname === "/blog/guide-bogen-pensumliste" ||
        location.pathname === "/blog/spar-penge-og-skan-miljoet" ||
        location.pathname === "/blog/sikker-salg-og-betaling" ? (
          <div className=" goBack">
            {/* NAVIGATES BACK -1 IN THE URL HISTORY, LAST PAGE U VISITED */}
            <div onClick={() => navigate(-1)} className="flex gap05 iconsize goBackp">
              <ArrowNarrowLeftIcon />
              <p className="font-bodytext">GÅ TILBAGE</p>
            </div>
          </div>
        ) : (
          <Link to="/" className="navLogo">
            <img src={logoBig} alt="EduGreen"></img>
          </Link>
        )}

        {/* ICONS - CHECKING FOR PATHNAME */}
        <ul>
          {location.pathname === "/" ? (
          '' 
          ) : (
            <li>
              <NavLink to="/search" className="iconsize">
                <SearchIcon />
              </NavLink>
            </li> 
          )}
          <li>
            <NavLink to="/notification" className="iconsize">
              <BellIcon />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* DESKTOP NAV */}
      <div className="navDesktop paddingWide">
        <Link to="/" className="navLogo">
          <img src={logoBig} alt="EduGreen"></img>
        </Link>
        <ul>
          <li>
            <NavLink to="/favourites">Favoritter</NavLink>
          </li>
          <li>
            <NavLink to="/salg">Sælg bog</NavLink>
          </li>
          <li>
            <NavLink to="/chat">Mine beskeder</NavLink>
          </li>
          <li>
            <NavLink to="/search" className="iconsizeDesktop">
              <SearchIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification" className="iconsizeDesktop">
              <BellIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="iconsizeDesktop">
              <UserIcon />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
