import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function Favourites() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
  return (
    <div className="paddingWide">
      <h1 className="font-bely fc-darkgreen">Favoritter</h1>
    </div>
  )
}
