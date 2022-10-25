// Bottombar on mobile

import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
import "../css/designsystem.css";

// Heroicons version 1.0.6
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  PlusIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";

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
          <NavLink to="/salg" className="iconsize">
            <PlusIcon className="plusicon" />
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
