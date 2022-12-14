import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";

export default function Articleteaser() {
  console.log(auth.currentUser.uid); // Check that the usename from auth is logged

  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  // fetch from FireBase, dependency array empty -> fetch on rerender
  useEffect(() => {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles");
    // sort by FireStore query createdAt, our timestamp added to every article, date
    const q = query(articleRef, orderBy("createdAt", "desc"));

    // get the data, on snapshot
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // change state -> array with all books from our DB
      setArticles(articles);
      console.log(articles); // check if fetched
    });
  }, []);

  // flatmap removes arrays inside arrays so we can map and use ternary for username and filter
  const displayUserPosts = articles?.flatMap((article) => article?.user);
  console.log(displayUserPosts);

  // the some() method to check if an object exists in an array
  // if user is found in array / has made a bookpost return true
  // if not return false
  // we can use this for displaying empty states if user has no books -> better UX ✨
  const isFound = displayUserPosts.some(element => {
    if (element === auth.currentUser.uid) {
      return true;
    }

    return false;
  });
  console.log(isFound);

  return (
    <section className="paddingwide paddingTopBottom">
      <h2 className="font-header">Mine annoncer</h2>
      <div className="article-wapper-small">
        {articles.map(({ user, id, imageUrl, title, price, condition }) =>
          user === auth.currentUser.uid ? (
            <div
              className="card-teaser-wrapper-small flex"
              key={id}
              onClick={() => navigate("/bookpage/" + id)}
            >
              <div
                className="image-teaser-wrapper-small"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              <div className="col-9 ps-4">
                <div>
                  <h2 className="font-bookTeaser book-cut-title">{title}</h2>
                </div>
                <div className="flex book-text-wrapper">
                  <div className="price-wrapper flex">
                    <p className="font-bookTeaser price-cut">{price}</p>
                    <p className="font-bookTeaser">DKK</p>
                  </div>
                  {/* INDSÆT STAND I ARTICLE */}
                  <p className="font-bodytextBig fc-darkgrey">{condition}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* EMPTY STATE - IF NO ELEMENTS ARE FOUND IN USER POSTS LENGTH, SHOW */}
      {isFound === false && <p className="font-bodytextBig">Du har ikke nogle aktive bogannoncer.</p>}  
    </section>
  );
}
