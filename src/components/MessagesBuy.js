import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import BuyMap from "./FavouriteMap";

export default function Favoriteteaser() {
  console.log(auth.currentUser.uid); // tjek at der logges username fra auth

  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);

  // check if user has liked to return empty sta
  const [userLikes, setUserLikes] = useState([]);

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

  // setUserLikes([...likes])
  return (
    <section>
      <div className="article-wapper">
        <BuyMap articles={articles} />
      </div>
    </section>
  );
}

// useEffect( () => {
//     async function fetchData(){
//     const querySnapshot = await getDoc(query(doc(db, `category/${ id }/product/${idProduct}`)));
//     if (querySnapshot.exists()) {
//       console.log("Document data:", querySnapshot.data());
//       setItemProduct(querySnapshot.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//       }

//     }
//     fetchData();
// }, [])
