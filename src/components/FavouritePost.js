import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig.js";
import FavouriteMap from "./FavouriteMap";

export default function Favoriteteaser() {
  console.log(auth.currentUser.uid); // check authentication works

  const [articles, setArticles] = useState([]);

  // fetch data from FireStore on snapshot
  useEffect(() => {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles");
    // sort by createdAt, our timestamp added to every article, date
    const q = query(articleRef, orderBy("createdAt", "desc"));

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
  }, []); // dependency array => empty => fetch on rerender

  // flatmap removes arrays inside arrays so we can map and use ternary for username and filter
  const displayLikes = articles?.flatMap((article) => article?.likes);
  console.log(displayLikes);

  // the some() method to check if an object exists in an array
  // if user is found in array / has liked post return true
  // if not return false
  // we can use this for displaying empty states if user has no likes
  const isFound = displayLikes.some(element => {
    if (element === auth.currentUser.uid) {
      return true;
    }

    return false;
  });
  console.log(isFound);

  return (
    <section>
      <div className="article-wapper-small">
        <FavouriteMap articles={articles} />
      </div>
      {/* EMPTY STATE IF USER HAS NO FAVOURITES */}
      {isFound === false && <h3 className="font-header">Du har ingen favoritter. Udforsk appen og kom i gang med at like 💚</h3>}
    </section>
  );
}