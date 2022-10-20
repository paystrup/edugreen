import React from "react";
import Articleteaser from "../components/ArticleTeaser";
import BigCarouselLanding from "../components/BigCarouselLanding";
import BookAgent from "../components/BookAgent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
  return (
    <div className="PaddingPage">
      <div>
        <h1>Welcome to your dashboard {user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
      <BigCarouselLanding />
      <Articleteaser />
      <BookAgent />
    </div>
  );
}
