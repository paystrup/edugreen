import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emptystateChat from "../assets/svg/emptystateChat.svg";
import MessagesBuy from "../components/MessagesBuy.js";

export default function Chat() {
  const [page, setPage] = useState("sale");

  return (
    <div>
      {/* sell and buy btns */}
      <div className="chat-buttons" id="wrapper">
        <button
          className=" chat-buttonschange font-btn "
          onClick={() => setPage("sale")}
        >
          Salg
        </button>
        <button
          className=" chat-buttonschange font-btn"
          onClick={() => setPage("buy")}
        >
          Køb
        </button>
      </div>

      <div className="pageContent">
        {page === "sale" && <Sellmessage />}
        {page === "buy" && <Buymessage />}
      </div>
    </div>
  );
}
// buy page
function Buymessage() {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/search");
  };
  return (
    <>
      {/* Empty state */}
      <div>
        <MessagesBuy />
      </div>
      <div className="chat-error-message">
        <img src={emptystateChat} alt="Man and message illustration"></img>
        <p className="font-header">Du har ingen nye beskeder</p>

        <p className="font-bodytext">
          Find dine nye studiebøger brugt og spar på pengene og miljøet
          &#128525;
        </p>
        {/* Call to action btn */}
        <button
          className=" btn-large font-btn fc-white bg-green"
          onClick={navigateToSearch}
        >
          Find bøger
        </button>
        <hr />
      </div>
    </>
  );
}

// sell page
function Sellmessage() {
  const navigate = useNavigate();

  const navigateToSalg = () => {
    navigate("/salg");
  };
  return (
    // Empty state
    <div className="chat-error-message">
      <img src={emptystateChat} alt="Man and message illustration"></img>
      <p className="font-header">Du har ingen nye beskeder</p>
      <p className="font-bodytext">
        Begynd at sælg dine gamle bøger og få råd til flere øl i fredagsbaren
        &#128525;
      </p>
      {/* Call to action btn */}
      <button
        className=" btn-large font-btn fc-white bg-green"
        onClick={navigateToSalg}
      >
        Sæt dine bøger til salg
      </button>
      <hr />
    </div>
  );
}
