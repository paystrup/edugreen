import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../assets/svg/logo-small.svg";
import Footer1 from "../assets/svg/footer1.svg";

import "../css/App.css";
import "../css/designsystem.css";

export default function Footer() {

  let deferredPrompt;
  const addBtn = document.querySelector(".add-button");


  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;



    addBtn.addEventListener("click", (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = "none";
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });

  return (
    <footer>
      <div className="paddingWide FooterDesk font-bodytextBig">
        <div className="FooterCopyright">
        <NavLink to="/" end className="FooterLogo">
          <img src={logoSmall} alt="EduGreen"></img>
        </NavLink>
        <p>&copy; 2022 EduGreen</p>


        </div>

        <ul>
          <h4>Hjælp & inspiration</h4>
          <li className="padding1"><NavLink to="e">Spørgsmål & svar</NavLink></li>
          <li className="padding1"><NavLink to="e">Kontakt</NavLink></li>
          <li className="padding1"><NavLink to="e">Blogposts</NavLink></li>
          <li className="padding1"><NavLink to="e">Om EduGreen</NavLink></li>
          <li className="padding1"><NavLink to="e">Privatlivspolitik</NavLink></li>

        </ul>
        
        <ul className="koebogsalg">
          <h4>Køb & salg</h4>
          <li className="padding1"><NavLink to="/salg">Opret annonce</NavLink></li>
          <li className="padding1"><NavLink to="/profile">Mine annoncer</NavLink></li>
          <li className="padding1"><NavLink to="/favourites">Mine favoritter</NavLink></li>
          <li className="padding1"><NavLink to="/chat">Indbakke</NavLink></li>
          <li className="padding1"><NavLink to="/profile">Min profil</NavLink></li>
          <li className="padding1 padding2"><NavLink to="/editprofile">Rediger oplysninger</NavLink></li>
        </ul>

      </div>
      <div>
        <img src={Footer1} alt="Blade" className="FooterImg paddingWide"></img>
      </div>
    </footer>
  );
}
