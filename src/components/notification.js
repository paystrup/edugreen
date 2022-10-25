import { useState } from "react";
import emptystateBell from "../assets/svg/emptystateBell.svg";
import emptystateBook from "../assets/svg/emptystateBook.svg";

export default function Chat() {
  const [page, setPage] = useState("all");

  return (
    <div>
      {/* all notifications and bookagent btns */}
      <div className="chat-buttons">
        <button
          className=" chat-buttonschange font-btn"
          onClick={() => setPage("all")}
        >
          Alle
        </button>
        <button
          className=" chat-buttonschange font-btn"
          onClick={() => setPage("bookagent")}
        >
          Bogagent
        </button>
      </div>

      <div className="pageContent">
        {page === "all" && <Allnotification />}
        {page === "bookagent" && <Bookagentnotification />}
      </div>
    </div>
  );
}
// Bookagent notification btn
function Bookagentnotification() {
  return (
    <div className="chat-error-message">
      <img src={emptystateBook} alt="Man and message illustration"></img>
      <p className="font-header">Kommer snart!</p>

      <p className="font-bodytext">
        Opret din egen bogagent og få notifikationer når dine favoritter kommer
        til salg.{" "}
      </p>

      <hr />
    </div>
  );
}

// All notifications btn
function Allnotification() {
  return (
    <div className="chat-error-message">
      <img src={emptystateBell} alt="Man and message illustration"></img>
      <p className="font-header">Du har ingen notifikationer</p>
      <hr />
    </div>
  );
}
