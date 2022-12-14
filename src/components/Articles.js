import { collection, orderBy, onSnapshot, query} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

export default function Articles() {
  // state for setting our fetched articles/books
  const [articles, setArticles] = useState([]);
  useEffect(()=> {
    // collection from firebase
    // db is our database, articles is the name of the collection
    const articleRef = collection(db, "articles");
    // sort by createdAt, our timestamp added to every article, date
    const q = query(articleRef, orderBy("createdAt", "desc"));
    
    // get/fetch the data, on snapshot with fireStore API
    onSnapshot(q,(snapshot)=> {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      // store data (setState) change state -> importing the array of books from the db
      setArticles(articles);
      console.log(articles);
    })
  },[])

  // check length of stored array in state
  // if length - no books are returned - return empty state for UX
  // if length is above 0 return data (books)
  return (
    <div className="article-wapper">{
      articles.length === 0 ? (
      <p>Ingen bøger fundet</p> ):(
        articles.map(({id, title, author, ISBN, edition, price, description, imageUrl, createdAt})=> (
          <div className="border mt-3 p-3 bg-light" key={id}>
            <div className="row ghgbjhjh">
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