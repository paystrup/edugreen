import { useState } from "react";
import MessagesSale from "./MessagesSale";
import MessagesBuy from "./MessagesBuy";

export default function Chat() {
  // state for changing rendered content
  // buy messages - sell messages
  const [page, setPage] = useState("sale");

  return (
    <div>
      {/* Buttons for changing state and displaying the different pages */}
      <div className="chat-buttons" id="wrapper">
        <button
          className={page === "sale" ? "chatButtonsSelected font-btn" : "chat-buttonschange font-btn"}
          onClick={() => setPage("sale")}
        >
          Salg
        </button>
        <button
          className={page === "buy" ? "chatButtonsSelected font-btn" : "chat-buttonschange font-btn"}
          onClick={() => setPage("buy")}
        >
          Køb
        </button>
      </div>

      {/* DISPLAY MESSAGES DEPENDING ON CLICKED BTN */}
      <div className="pageContent">
        {page === "sale" && <Sellmessage />}
        {page === "buy" && <Buymessage />}
      </div>
    </div>
  );
}

// BUYING MESSAGES 🤑
function Buymessage() {
  return (
    <>
      <MessagesBuy />
    </>
  );
}

// SELLING MESSAGES ✨
function Sellmessage() {
  return (
    <>
      <MessagesSale />
    </>
  );
}


