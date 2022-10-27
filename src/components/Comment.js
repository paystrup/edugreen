import React, { useState } from "react";
import {
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export default function Comment({ id, book }) {
  // State for logging the input field
  const [comment, setComment] = useState("");

  // store all comments for the book in a constant
  const comments = book.comments;
  console.log(comments) // check it works

  // verify user is logged in
  const [user] = useAuthState(auth);

  // reference to our database in FireBase, collection = articles
  const commentRef = doc(db, "articles", id);

  // handle comment change
  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      // if enter is pressed (comment is sent)

      // if the comment is not an empty string
      if (comment !== "") {
        // then update the document with comments 
        // array on the book article in firestore
        updateDoc(commentRef, {
          // arrayUnion to update array with new values (no overrides)
          comments: arrayUnion({
            sentBy: auth.currentUser.uid,
            sentByName: user.displayName,
            sentByImageUrl: auth.currentUser.photoURL,
            sentTo: book.user,
            comment: comment,
            createdAt: new Date(),
            commentId: uuidv4(),
            bookTitle: book.title,
            bookImage: book.imageUrl,
            bookPrice: book.price
          }),
        }).then(() => {
          // UX for message sent
          toast("Din besked er blevet sendt til sælgeren.", { type: "success" });
          // reset comment input
          setComment("");
          console.log("Kommentar tilføjet");
        });
      }
      // else keep the value and do nothing
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

        {comments?.map(({comment, sentByName, sentByImageUrl}) =>
          <div>
            <p>{sentByName}</p>
            <p>{comment}</p>
            {sentByImageUrl ? 
              (<img className="imageProfile" src={sentByImageUrl} alt={sentByName}/>)
              : (<img className="imageProfile" src={sentByImageUrl} alt={sentByName}/>)
            }
            
            
          </div>
        )}

      </div>
    </section>
  );
}
