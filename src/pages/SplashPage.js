import React from "react";
import loginHeaderImage from "../assets/images/skov.webp";
import { useNavigate } from "react-router-dom";

export default function SplashPage({ handleClick }) {
  /*Hook that helps with navigation*/
  const navigate = useNavigate();

  const navigateToLanding = () => {
    navigate("/");
  };

  return (
    <section className="SplashSection">
      <div
        className="splashBackground"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${loginHeaderImage})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="splashIndhold paddingWide fc-white">
          <h2 className="font-bely">Fremtidens bæredygtige markedsplads</h2>
          <p className="font-bodytext splashBody">
            Skån miljøet, spar penge og bidrag til en bedre fremtid for os alle.
            Køb og sælg dine brugte studiebøger på vores markedsplads.
          </p>
          <button
            className="btn-large bg-green font-btn splashBtn"
            onClick={handleClick}
          >
            Log ind
          </button>
          <button
            className="btn-large bg-darkgreen font-btn splashBtn"
            onClick={navigateToLanding}
          >
            Gå til forsiden
          </button>
        </div>
      </div>
    </section>
  );
}
