import React from "react";
import Chat from "../components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  // Authentication + loading states + import navigate
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // If user is loading, return the state
  if (loading) return <h1>Indlæser ...</h1>;

  // If no user is authenticated redirect to the login path
  // By doing this the user can't interact with our app before signing in
  // Our features require a userID, so this is why we do it like this
  if (!user) navigate("/login");

  // if user is authenticated -> return the data
  if (user)
    return (
      <div className="paddingWide PaddingPage bigscreenpadding">
        <h1 className="font-bely fc-darkgreen">Indbakke</h1>
        <Chat />
      </div>
    );
}
