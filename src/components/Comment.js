import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

export default function Comment({ id, book }) {
  // State for logging the input field
  const [comment, setComment] = useState("");

  // State for sending the whole comment to fireStore
  // including username, ID etc.. (See array further down)
  const [comments, setComments] = useState([]);

  // verify user is logged in
  const [user, loading, error] = useAuthState(auth);

  // reference to our database in FireBase, collection = articles
  const commentRef = doc(db, "articles", id);

  // fetch
  useEffect(() => {
    const docRef = doc(db, "articles", id);
    onSnapshot(docRef, (snapshot) => {
      //   setComments({ ...snapshot.data(), id: snapshot.id });
      //   create new array in database with comments under article
      setComments(snapshot.data().comments);
      console.log(comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      if (comment !== "") {
        updateDoc(commentRef, {
          comments: arrayUnion({
            sentBy: auth.currentUser.uid,
            sentTo: book.user,
            comment: comment,
            createdAt: new Date(),
            commentId: uuidv4(),
          }),
        }).then(() => {
          setComment("");
          console.log("Kommentar tilføjet");
        });
      }
    } else setComment(e.target.value);
  };

  return (
    <div>
      <h2>Send besked til sælger</h2>
      <div>
        {user && (
          <input
            type="text"
            className="form-control mt-4 mb-5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => handleChangeComment(e)}
            placeholder="Skriv besked. Tryk enter for at sende besked."
          />
        )}
      </div>
    </div>
  );
}
