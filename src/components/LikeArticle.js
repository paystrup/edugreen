// inspiration from https://github.com/voranzovv/my-article/tree/main/src/components
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { HeartIcon } from "@heroicons/react/outline";

export default function LikeArticle({ id, likes }) {
  // authentication auth and db are found in the firestore config, ref to our projekt in firebase
  const [user] = useAuthState(auth);

  // reference to our FireStore db, collection = articles
  const likesRef = doc(db, "articles", id);

  // for the onclick on like
  const handleLike = () => {
    // if user already has liked the book, remove the uid from the likes array
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      }).then(() => {
          console.log("unliked");
      }).catch((e) => {
            console.log(e);
      });
    }
    // if uid isn't found in the likes array add the uid to array in firestore
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

  // if likes includes id = true, turn the heart/like button to green, if not keep original styling
  // onclick uses the function above
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