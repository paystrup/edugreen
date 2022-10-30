import { useState } from "react";
import emptystateBell from "../assets/svg/emptystateBell.svg";
import emptystateBook from "../assets/svg/emptystateBook.svg";

export default function Chat() {
  // page not finished, functionality with notifications
  // can be implemented later, empty states right now for better UX

  // state to setstate and change between components rendered
  // filter through notifications on btn click
  const [page, setPage] = useState("all");

  return (
    <div>
      {/* all notifications and bookagent btns -> onclick changes state to show the desired component / notifications */}
      <div className="chat-buttons">
        <button
          className={page === "all" ? "chatButtonsSelected font-btn" : "chat-buttonschange font-btn"}
          onClick={() => setPage("all")}
        >
          Alle
        </button>
        <button
          className={page === "bookagent" ? "chatButtonsSelected font-btn" : "chat-buttonschange font-btn"}
          onClick={() => setPage("bookagent")}
        >
          Bogagent
        </button>
      </div>

      {/* IF PAGE STATE = ALL SHOW ALL NOTIFICATIONS - IF = BOOKAGENT SHOW BOOKAGENT NOTIFICATIONS  */}
      <div className="pageContent">
        {page === "all" && <Allnotification />}
        {page === "bookagent" && <Bookagentnotification />}
      </div>
    </div>
  );
}

// Bookagent notification
function Bookagentnotification() {
  return (
    <div className="chat-error-message">
      <img src={emptystateBook} alt="Man and message illustration"></img>
      <p className="font-header textAlignCenter">Kommer snart!</p>

      <p className="font-bodytext textAlignCenter">
        Opret din egen bogagent og få notifikationer når dine favoritter kommer
        til salg 🔔 📚 {" "}
      </p>
    </div>
  );
}

// All notifications
function Allnotification() {
  return (
    <div className="chat-error-message error-image">
      <img src={emptystateBell} alt="Man and message illustration"></img>
      <p className="font-header textAlignCenter">Du har ingen notifikationer</p>
    </div>
  );
}
