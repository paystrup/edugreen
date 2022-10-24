// inspiration from https://github.com/voranzovv/my-article/tree/main/src/components
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { HeartIcon } from "@heroicons/react/outline";

export default function LikeArticle({ id, likes }) {
  const [user] = useAuthState(auth);

  const likesRef = doc(db, "articles", id);

  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      }).then(() => {
          console.log("unliked");
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(user.uid)
        }).then(() => {
            console.log("liked");
        }).catch((e) => {
              console.log(e);
        });
    }
  };

  return (
    <div>
        
      <HeartIcon
        className="iconsize-green"
        style={{
          cursor: "pointer",
          fill: likes?.includes(user.uid) ? "var(--green)" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}