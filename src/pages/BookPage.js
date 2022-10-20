import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function BookPage() {
  const [articles, setArticles] = useState([]);
  const params = useParams();
  console.log(params); //udskriver det slug navn man er inde på i log
  const id = params.id;

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
      console.log(articles[0]);
    });
  }, [id]);

  //   Se om det det virker
  // not suitable for big arrays maybe, loops through the whole db
  return (
    <>
        {articles.map((article, index) => (
            article.id === id ? (
               <img src={article.imageUrl} alt="title" style={{height: 180, width:180}} />
            
            ) 
            : null
        ))}
    </>

  );
}


/* <div className="article-wapper">
    
{articles.id === id ? 
    (
    <p>Ingen bøger fundet</p> 
    )
    
    
    :

    (
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
</div>  */

// useEffect(() => {
//     async function getPost() {
//       const url = `https://www.wpedugreen.mbcproduction.dk//wp-json/wp/v2/posts?slug=${slug}&_embed&v=99999`; //for at se i browser find i console eller ændre ${slug} til det unikke slug man vil se
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data[0]);
//       setPost(data[0]);
//     }
//     getPost();
//   }, [slug]);