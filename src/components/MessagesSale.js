import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import emptystateChat from "../assets/svg/emptystateChat.svg";

export default function MessagesSale() {
  // navigation for empty state
  const navigate = useNavigate();
  const navigateToSalg = () => {
    navigate("/salg");
  };

  // state to store snapshot from FireStore
  const [articles, setArticles] = useState([]);

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

  // the some() method to check if an object exists in an array
  // if user is found in sentTo / has recieved a msg return true
  // if not return false
  // we can use this for displaying empty states if user has no msg
  const isFound = displayComments.some(element => {
    if (element.sentTo === auth.currentUser.uid) {
      return true;
    }

    return false;
  });

  console.log(isFound);

  // filter through comments and display only messages for the user signed in by auth
  // deconstruct array for cleaner code
  return (
    <section>
      <div>
        {displayComments.map(({sentBy, sentTo, comment, commentId, sentByName, sentByImageUrl, bookImage, bookTitle, createdAt, bookPrice, bookId}) =>
          sentTo === auth.currentUser.uid &&
          <>
            <div className="chatComment flex space-between" key={commentId}>

              {/* MSG INFO */}
              <div className="chatCommentBox flex flexCol">
                <div className="flex flexCol gap15">
                  <div className="flex space-between align-center">
                    <div className="flex align-center gap05">
                      <img src={sentByImageUrl} alt={sentByName}/>
                      <p className="font-profilenameSmall">{sentByName}</p>
                    </div>
                    <p className="font-bodytextBig">{createdAt?.toDate().toLocaleDateString('da-DK')}</p>
                  </div>
                  <div className="flex gap15">
                    {/* BOOK IMAGE AS BG SO WE CAN MAKE IT RESIZEABLE */}
                    <div className="chatBookImage"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${bookImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        cursor: "pointer"
                      }}
                      onClick={() => navigate("/bookpage/" + bookId)}
                    >
                    </div>
                    <div className="flex flexCol gap05">
                      <h3 className="font-bodytextBig">{bookTitle}, {bookPrice} DKK</h3>
                      <p className="font-bodytext fc-darkgrey">{comment}</p>
                    </div>
                  </div>
    
                </div>
              </div>

              
            </div>
            <hr></hr>
          </>     
        )}
        
        {/* EMPTY STATE IF USER HAS NO MSG */}
        {isFound === false && 
          <div className="chat-error-message">
            <img src={emptystateChat} alt="Man and message illustration"></img>
            <p className="font-header textAlignCenter">Du har ingen nye beskeder</p>
            <p className="font-bodytext textAlignCenter">
              Begynd at sælg dine gamle bøger og få råd til flere øl i fredagsbaren
              &#128525;
            </p>

            <button
              className=" btn-large font-btn fc-white bg-green"
              onClick={navigateToSalg}
            >
              Sæt dine bøger til salg
            </button>
          </div>
        }

      </div>
    </section>
  );
}