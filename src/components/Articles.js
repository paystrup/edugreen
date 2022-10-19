import { collection, onSnapshot, orderBy, query} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(()=> {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles");
    // sort by createdAt, our timestamp added to every article, date
    const q = query(articleRef, orderBy("createdAt", "desc"));
    
    // get the data, on snapshot
    onSnapshot(q,(snapshot)=> {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      // change state -> importing the array from the db
      setArticles(articles);
      console.log(articles);
    })
  },[])

  return (
    <div className="article-wapper">{
      articles.length === 0 ? (
      <p>No articles found</p> ):(
        articles.map(({id, title, author, ISBN, edition, price, description, imageUrl, createdAt})=> (
          <div className="border mt-3 p-3 bg-light" key={id}>
            <div className="row">
              <div className="col-3">
                <img src={imageUrl} alt="title" style={{height: 180, width:180}} />
              </div>
              <div className="col-9 ps-4">
                <h2>{title}</h2>
                <h6>Date: {createdAt.toDate().toDateString()}</h6>
                <p>Author: {author}</p>
                <p>ISBN: {ISBN}</p>
                <p>Edition: {edition}</p>
                <p>Description: {description}</p>
                <p>Price: {price} DKK</p>
              </div>
          </div>
          </div>
        ))
    )}
    </div> 
  );
}