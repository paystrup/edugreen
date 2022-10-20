import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { HeartIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function Articleteaser() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(4);
  const showMoreArticles = () => {
    setVisible((prevValue) => prevValue + 4);
  };

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
  }, []);

  return (
    <section>
      <div className="flex card-title-btn paddingWide">
        <p className="font-header">Sidst besøgte</p>
        <button
          onClick={showMoreArticles}
          className="font-btn bg-darkgreen fc-white readmore-btn"
        >
          se mere
        </button>
      </div>
      <div className="article-wapper paddingWide">
        {articles.length === 0 ? (
          <p>No articles found</p>
        ) : (
          articles.slice(0, visible).map(({ id, title, price, imageUrl }) => (
            <div
              className="card-teaser-wrapper flex"
              key={id}
              onClick={() => navigate("bookpage/" + id)}
            >
              <div
                className="image-teaser-wrapper"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="iconsize favorite-icon">
                  <HeartIcon />
                </button>
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
                  <p className="font-bodytextBig fc-darkgrey">stand god</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
