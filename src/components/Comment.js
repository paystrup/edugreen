import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export default function Comment({ id, book }) {
  // State for logging the input field
  const [comment, setComment] = useState("");

  // State for sending the whole comment to fireStore
  // including username, ID etc.. (See array further down)
  const comments = book.comments;
  console.log(comments)

  
  
  // verify user is logged in
  const [user] = useAuthState(auth);

  // reference to our database in FireBase, collection = articles
  const commentRef = doc(db, "articles", id);

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
            bookTitle: book.title,
            bookImage: book.imageUrl,
            bookPrice: book.price
          }),
        }).then(() => {
          toast("Din besked er blevet sendt til sælgeren.", { type: "success" });
          setComment("");
          console.log("Kommentar tilføjet");
        });
      }
    } else setComment(e.target.value);
  };

  return (
    <section className="addCommentSection">
      <h2 className="font-bely">Send besked til sælger</h2>
      <div className="addComment">
        {user && (
          <input
            type="text"
            className="form-control mt-4 mb-5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => handleChangeComment(e)}
            placeholder="Skriv besked. Tryk enter for at sende."
          />
        )}

        {comments.map(({comment, }) =>
          <p>{comment}</p>
        )}

      </div>
    </section>
  );
}
