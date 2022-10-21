// TODO ADD REDIRECT IF USER NOT SIGNED IN

import React from 'react'
import AddArticle from '../components/AddArticles'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function OpretSalg() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)

  return (
    <div>
        <AddArticle />  
    </div>
  )
}
