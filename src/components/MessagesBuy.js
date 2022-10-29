import { collection, onSnapshot, orderBy, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function MessagesBuy() {
  console.log(auth.currentUser.uid); // tjek at der logges username fra auth

  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles",);
    // sort by createdAt, our timestamp added to every article, date
    const q = query(articleRef, orderBy("comments", "desc"));

    // get the data, on snapshot
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // change state -> importing the array from the db
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  // flatmap removes arrays inside arrays so we can map and use ternary for username and filter
  const displayComments = articles?.flatMap((article) => article?.comments);
  console.log(displayComments);

  // filter through comments and display only messages for the user signed in by auth
  // deconstruct array for cleaner code
  return (
    <section>
      <div>
        {displayComments.map(({sentBy, sentTo, comment, commentId, sentByName, sentByImageUrl, bookImageUrl, bookTitle, createdAt, bookPrice}) =>
          sentTo === auth.currentUser.uid &&
          <div className="chatComment flex space-between" key={commentId}>

            {/* BOOK IMAGE AS BG SO WE CAN MAKE IT RESIZEABLE */}
            <div className="chatBookImage"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${bookImageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            
            >
            </div>
            <h3>{bookTitle}</h3>
            <p>{bookPrice} DKK</p>

            {/* MSG INFO */}
            <div className="chatCommentBox flex flexCol gap1">
              <div className="flex gap1 align-center">
                <div className="flex gap1 align-center">
                  <img src={sentByImageUrl} alt={sentByName}/>
                  <div className="flex flexCol gap05">
                    <p className="font-profilenameSmall">{sentByName}</p>
                    <p className="font-bodytext fc-darkgrey">{comment}</p>
                  </div>
                </div>
                <p className="font-bodytextBig">{createdAt?.toDate().toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
              </div> 
            </div>
   
          </div>     
          
        )}

      </div>
    </section>
  );
}