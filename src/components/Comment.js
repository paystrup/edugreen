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
import defaultProfilePic from "../assets/images/defaultProfilePic.png"
import { PaperAirplaneIcon } from "@heroicons/react/outline";

export default function Comment({ id, book }) {
  // State for logging the input field
  const [comment, setComment] = useState("");

  // store all comments for the book in a constant
  const comments = book.comments;

  // verify user is logged in
  const [user] = useAuthState(auth);

  // reference to our database in FireBase, collection = articles
  const commentRef = doc(db, "articles", id);

  const placeholderMsg = "Send besked til";

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

  // handle on click sendmsg
  const handleOnClickSendMsg = (e) => {
    // if the comment is not an empty string
    if (comment === "") {
      toast("Udfyld besked.", { type: "error" });
    }
    
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
          sentToName: book.userName,
          sentToImageUrl: book.userImage,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
          bookTitle: book.title,
          bookImage: book.imageUrl,
          bookPrice: book.price,
          bookId: book.id
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
    else setComment(e.target.value);
  };

  return (
    <section>

      {/* IF USER ISN'T THE ONE OWNING THE POSTS, SHOW ADD KØB & BYD BTN */}
      {book.user === auth.currentUser.uid ? 
          null : (
              <button className=" btn-large font-btn fc-white bg-green" >
                Køb eller byd
              </button>
          )
      }
      
      <div className="addCommentSection">
      {/* DIFFERENT TITLE DEPENDING ON AMOUNT OF MSGS*/}
      {comments?.length > 0 ? <h2 className="font-blog-big">Beskeder</h2> : <h2 className="font-blog-big">Der er ingen beskeder.</h2>} 

      {/* IF USER ISN'T THE ONE OWNING THE POSTS, SHOW ADD COMMENT INPUT */}
      {book.user === auth.currentUser.uid ? 
          null : (
              <div className="addComment">
                {/* <h2 className="font-belySmall paddingBottomSmall">Send besked til sælger</h2> */}
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onKeyUp={(e) => handleChangeComment(e)}
                  placeholder={`${placeholderMsg}` + ` ` + `${book?.userName}`}
                />
                <button onClick={(e) => handleOnClickSendMsg(e)} className="btn-send bg-darkgreen" >
                 <PaperAirplaneIcon />
                </button>
              </div>
          )
      }
      
      {/* MAP THROUGH COMMENTS TO DISPLAY */}
      {comments?.map(({comment, sentByName, sentByImageUrl, commentId, createdAt}) =>
        <div className="commentBookPage flex flexCol gap1 borderRadius bg-lightergrey paddingSmall" key={commentId}>
          <div className="flex space-between align-center">
            <div className="flex align-center gap05">
              {sentByImageUrl ? 
                (<img className="imageProfile" src={sentByImageUrl} alt={sentByName}/>)
                : (<img className="imageProfile" src={defaultProfilePic} alt={sentByName}/>)
              }
              <p className="font-profilenameSmall">{sentByName}</p>
            </div>
            <p className="font-bodytextBig">{createdAt?.toDate().toDateString()}</p>
          </div>
          
          <p className="font-bodytext fc-darkgrey">{comment}</p>

        </div>
      )}
      </div>
    </section>
  );
}
