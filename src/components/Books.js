import React, {useState, useEffect} from 'react'
import {collection} from "firebase/firestore"


export default function Articles() {
    const [articles,setArticles] = useState([])
    useEffect(() =>{
        const articleRef = collection(db,)
    })
  return (
    <div>
        {
            articles.length === 0 ? (
                <p>No books found!</p>
            ): (
                articles.map((article) => <div className="border mt-3 p-3 bc-light">div</div>)
                
            )
        }
    </div>
  )
}
