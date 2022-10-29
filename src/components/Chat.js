import { useState } from "react";
import MessagesSale from "./MessagesSale";
import MessagesBuy from "./MessagesBuy";

export default function Chat() {
  const [page, setPage] = useState("sale");

  return (
    <div>
      {/* sell and buy btns */}
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

      <div className="pageContent">
        {page === "sale" && <Sellmessage />}
        {page === "buy" && <Buymessage />}
      </div>
    </div>
  );
}

// buy page
function Buymessage() {
  return (
    <>
      <MessagesBuy />
    </>
  );
}

// sell page
function Sellmessage() {
  return (
    <>
      <MessagesSale />
    </>
  );
}


