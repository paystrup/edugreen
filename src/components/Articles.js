import React, {useState, useEffect} from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig.js";


export default function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const articleRef = collection(db, "articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot)=>{
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
            }));
            setArticles(articles);
            console.log(articles)
                })
    },[]);

  return (
    <div>
        {
            articles.length === 0 ? (
                <p>No books found!</p>
            ) : (
                articles.map((article) => (
                <div className="border mt-3 p-3 bc-light">div</div>
                ))
                
            )}
    </div>
  )
}
