import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle.js";

export default function FavouriteMap({ articles }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return <></>;
}
