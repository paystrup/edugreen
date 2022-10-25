import React from "react";
import { NavLink } from "react-router-dom";
import logoBig from "../assets/svg/logo-big.svg";
import logoSmall from "../assets/svg/logo-small.svg";
import Footer1 from "../assets/svg/footer2.svg";

import "../css/App.css";
import "../css/designsystem.css";

export default function Footer() {
  return (
    <footer>
      <div className="paddingWide FooterDesk">
        <NavLink to="/" end className="FooterLogo">
          <img src={logoSmall} alt="EduGreen"></img>
        </NavLink>
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
            <NavLink to="/profile" className="iconsize">
              Min profil
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <img src={Footer1} alt="Blade" className="FooterImg paddingWide"></img>
        <div class="detmedsmaat">
          <div id="foot4">
            <p>&copy; 2022 EduGreen</p>
          </div>

          <div id="foot5">
            <a href="error.html">
              <p>Privatlivspolitik</p>
            </a>
          </div>

          <div id="foot6">
            <a href="error.html">
              <p>hjh</p>
            </a>
          </div>

          <div id="foot7">
            <a href="error.html">
              <p>jhkj</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
