import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import FavouriteMap from "./FavouriteMap";

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
      <div className="article-wapper-small">
        <FavouriteMap articles={articles} />
      </div>
    </section>
  );
}

// {articles.map(({ id, imageUrl, title, price, condition, likes }) =>
//           likes?.includes(auth.currentUser.uid) ? (
//             <div className="card-teaser-wrapper flex" key={id}>
//               <div className="favorite-icon iconsize-green">
//                 {user && <LikeArticle id={id} likes={likes} />}
//               </div>
//               <div
//                 className="image-teaser-wrapper"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
//                   backgroundPosition: "center",
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                 }}
//                 onClick={() => navigate("/bookpage/" + id)}
//               ></div>
//               <div className="col-9 ps-4">
//                 <div>
//                   <h2 className="font-bookTeaser book-cut-title">{title}</h2>
//                 </div>
//                 <div className="flex book-text-wrapper">
//                   <div className="price-wrapper flex">
//                     <p className="font-bookTeaser price-cut">{price}</p>
//                     <p className="font-bookTeaser">DKK</p>
//                   </div>
//                   {/* INDSÆT STAND I ARTICLE */}
//                   <p className="font-bodytextBig fc-darkgrey">{condition}</p>
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}

// return (
//   <section>
//     <div className="article-wapper ">
//       {articles.likes?.includes(auth.currentUser.uid) === 0 ? (
//         <p className="font-bodytext fc-darkgreen">Ingen bøger fundet</p>
//       ) : (
//         articles.map(({ id, imageUrl, title, price, condition, likes }) => (
//           <div className="card-teaser-wrapper flex" key={id}>
//             <div className="favorite-icon iconsize-green">
//               {user && <LikeArticle id={id} likes={likes} />}
//             </div>
//             <div
//               className="image-teaser-wrapper"
//               style={{
//                 backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//               onClick={() => navigate("/bookpage/" + id)}
//             ></div>
//             <div className="col-9 ps-4">
//               <div>
//                 <h2 className="font-bookTeaser book-cut-title">{title}</h2>
//               </div>
//               <div className="flex book-text-wrapper">
//                 <div className="price-wrapper flex">
//                   <p className="font-bookTeaser price-cut">{price}</p>
//                   <p className="font-bookTeaser">DKK</p>
//                 </div>
//                 {/* INDSÆT STAND I ARTICLE */}
//                 <p className="font-bodytextBig fc-darkgrey">{condition}</p>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   </section>
// );
