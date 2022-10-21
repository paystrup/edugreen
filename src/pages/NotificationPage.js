import React from "react";
import Notifications from "../components/notification";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function NotificationPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
  
  return (
    <div className="paddingWide">
      <h1 className="font-bely fc-darkgreen">Notifikationer</h1>
      <Notifications />
    </div>
  );
}
