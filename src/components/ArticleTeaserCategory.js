import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle";
import { auth } from "../firebaseConfig.js";

export default function ArticleTeaserCategory({ header, sortCategory, sortCondition, sortEducation }) {
  const navigate = useNavigate();
  // state for setting our fetched articles/books 
  const [articles, setArticles] = useState([]);
  // authentication
  const [user] = useAuthState(auth);

  // show 4 articles on fetch
  const [visible, setVisible] = useState(4);

  // show more adds 4 more articles by adding + 4 to prev value
  const showMoreArticles = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles")

    // sorting / query syntax in fireStore by using .where
    // const q = query(articleRef, where("education", "==", "Pædagog")); sort by education
    // data queries are sent as props from parent to make component dynamic
    const q = query(articleRef, where(`${sortCategory}`, `${sortCondition}`, `${sortEducation}`));

    // get the data, on snapshot
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // setState, change state -> importing the array from the db
      setArticles(articles);
    });
  }, [sortCategory, sortCondition, sortEducation]); // dependency array listens for new props -> rerender

  // display data, if no articles are found, length of array stored
  // in the articles array is 0 return empty state for UX
  return (
    <section className="paddingTopBottom">
      <div className="flex card-title-btn paddingWide">
        <p className="font-header">{header}</p>
        <button
          onClick={showMoreArticles}
          className="font-btn bg-darkgreen fc-white readmore-btn"
        >
          Se mere
        </button>
      </div>
      <div className="article-wapper paddingWide">
        {articles.length === 0 ? (
          <p className="font-bodytext fc-darkgreen">Ingen bøger fundet</p>
        ) : (
          articles
            .slice(0, visible)
            .map(({ id, title, price, imageUrl, condition, likes, createdAt }) => (
              <div className="card-teaser-wrapper flex" key={id}>
                <div className="favorite-icon iconsize-green">
                  {user && <LikeArticle id={id} likes={likes} />}
                </div>
                <div
                  className="image-teaser-wrapper"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => navigate("/bookpage/" + id)}
                ></div>
                <div className="col-9 ps-4">
                  <div>
                    {/* BOOK TITLE */}
                    <h2 className="font-bookTeaser book-cut-title">{title}</h2>
                  </div>
                  <div className="flex book-text-wrapper">
                    <div className="price-wrapper flex">
                      {/* BOOK PRICE */}
                      <p className="font-bookTeaser price-cut">{price}</p>
                      <p className="font-bookTeaser">DKK</p>
                    </div>
                    {/* BOOK CONDITION */}
                    <p className="font-bodytextBig fc-darkgrey">{condition}</p>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </section>
  );
}
