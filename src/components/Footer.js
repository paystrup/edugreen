import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../assets/svg/logo-small.svg";
import footerBG from "../assets/svg/footer1.svg";

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
    <footer
      style={{
        backgroundImage: `url(${footerBG})`,
        backgroundPosition: "bottom",
        backgroundSize: "initial",
        backgroundRepeat: "no-repeat",
      }}
    
    >
      <div className="paddingWide FooterDesk font-bodytextBig">
        <div className="FooterCopyright">
          <NavLink to="/" end className="FooterLogo">
            <img src={logoSmall} alt="EduGreen"></img>
          </NavLink>
          <p>&copy; 2022 EduGreen</p>
          <button className="btn-large bg-darkgreen fc-white font-btn addBtn">Download App</button>
        </div>
        
        <div className="flex gap4">
          <ul>
            <h4>HJÆLP OG INSPIRATION</h4>
            <li className="padding1"><NavLink to="e">Spørgsmål & svar</NavLink></li>
            <li className="padding1"><NavLink to="e">Kontakt</NavLink></li>
            <li className="padding1"><NavLink to="e">Blogposts</NavLink></li>
            <li className="padding1"><NavLink to="e">Om EduGreen</NavLink></li>
            <li className="padding1"><NavLink to="e">Privatlivspolitik</NavLink></li>
          </ul>
          
          <ul className="koebogsalg">
            <h4>KØB OG SALG</h4>
            <li className="padding1"><NavLink to="/salg">Opret annonce</NavLink></li>
            <li className="padding1"><NavLink to="/profile">Mine annoncer</NavLink></li>
            <li className="padding1"><NavLink to="/favourites">Mine favoritter</NavLink></li>
            <li className="padding1"><NavLink to="/chat">Indbakke</NavLink></li>
            <li className="padding1"><NavLink to="/profile">Min profil</NavLink></li>
            <li className="padding1 padding2"><NavLink to="/editprofile">Rediger oplysninger</NavLink></li>
          </ul>

          <ul>
            <h4>KONTAKT</h4>
            <li className="padding1"><a href="mailto:hello@edugreen.dk">Send os en mail</a></li>
            <li className="padding1"><a href="tel:+4530303030">+45 3030 3030</a></li>
            <h4 className="padding4">FØLG OS</h4>
            <li className="padding1"><a href="www.facebook.com" target="_blank">Facebook</a></li>
            <li className="padding1"><a href="www.instagram.com" target="_blank">Instagram</a></li>
            <li className="padding1"><a href="www.tiktok.com" target="_blank">TikTok</a></li>
          </ul>  
        </div>

      </div>
    </footer>
  );
}
