// Bottombar on Mobile App 📱

import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
import "../css/designsystem.css";

// Heroicons version 1.0.6 - important because style differs in versions
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  PlusIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";

// react router Navlinks so we can use active styling to display
// new styling when user is navigated to the url assigned
export default function BottomBar() {
  return (
    <div className="wrapper-bottombar">
      <ul className="bottombar">
        <li>
          <NavLink to="/" end className="iconsize">
            <HomeIcon />
          </NavLink>
        </li>

        <li>
          <NavLink to="/favourites" className="iconsize">
            <HeartIcon />
          </NavLink>
        </li>

        <li className="sellbutton">
          <NavLink to="/salg" className="iconsize-white">
            <PlusIcon />
          </NavLink>
        </li>

        <li>
          <NavLink to="/chat" className="iconsize">
            <ChatAltIcon />
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="iconsize">
            <UserIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
