import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  HeartIcon,
  EyeIcon,
  XIcon,
  RefreshIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import logoBig from "../assets/svg/logo-big.svg";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

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
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
  return (
    <>
        {articles.map((article, index) => (
            article.id === id ? (
              <section className="PaddingPage paddingWide">
                {/* CROSS ICON */}
                <div className="flex crossicon-wrapper">
                <button className="iconsize">
                  <XIcon />
                </button>
                </div>
                {/* TITLE-HEARTICON */}
                <div className="flex title-author-hearticon">
                  <div>
                    <h1 className="font-header">{article.title}</h1>
                  </div>
                <button className="iconsiz">
                  <HeartIcon />
                </button>
              </div>
              {/* AUTOUR */}
              <h3 className="font-bodytext fc-darkgrey">{article.author}</h3>
              {/* IMAGE */}
              <div
                className="image-wrapper-book"
                style={{
                  backgroundImage: `url(${article.imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              {/* <img
                src={article.imageUrl}
                alt="title"
                style={{ height: 180, width: 180 }}
              /> */}
              <div className="flex wrapper-price-profile-description-delevery">
                {/* PRICE-WATCHICON */}
                <div className="flex price-watch">
                  <h2 className="font-header">{article.price} DKK</h2>
                  <div className="flex price-watch iconandnumber">
                    <div className="iconsize-small-grey">
                      <EyeIcon />
                    </div>
                    <p className="Align-Number-book font-bodytext fc-darkgrey">
                      0
                    </p>
                    <div className="iconsize-small-grey">
                      <HeartIcon />
                    </div>
                    <p className="Align-Number-book font-bodytext fc-darkgrey">
                      0
                    </p>
                  </div>
                </div>
                {/* PROFILE - SALES */}
                <div className="flex space-between align-center">
                  <div className="flex align-center">
                    <img className="imgageh" src={logoBig} alt="" />
                    <h2 className="font-bodytext">{user.displayName}</h2>
                  </div>
                  <div className="flex align-center">
                    <div className="iconsize-small-green">
                      <RefreshIcon />
                    </div>
                    <p className="font-bodytext fc-darkgreen">10 salg</p>
                  </div>
                </div>
                {/* DESCRIPTION */}
                <div>
                  <p className="font-bodytextBig fc-darkgrey">
                    {article.description}
                  </p>
                </div>
                {/* DELEVERY */}
                <div className="flex space-between align-center">
                  <p className="font-bodytextBig">Afhentning eller levering</p>
                  <div className="flex">
                    <div className="iconsize-small-black">
                      <LocationMarkerIcon />
                    </div>
                    <p>Aarhus C</p>
                  </div>
                </div>
              </div>
              {/* ADVANCED INFORMATION */}
              <div className="flex wrapper-information">
                {/* oprettet */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Oprettet</p>
                  <div className="flex">
                    <div className="iconsize-small-black">
                      <ClockIcon />
                    </div>
                    <p className="font-bodytext">
                      {article.createdAt.toDate().toDateString()}
                    </p>
                  </div>
                </div>
                {/* udgave */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Udgave</p>
                  <div>
                    <p className="font-bodytext">{article.edition}</p>
                  </div>
                </div>
                {/* stand */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Stand</p>
                  <div>
                    <p className="font-bodytext">{article.condition}</p>
                  </div>
                </div>
                {/* isbn */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">ISBN</p>
                  <div>
                    <p className="font-bodytext">{article.ISBN}</p>
                  </div>
                </div>
                {/* BUTTONS */}
              </div>
            </section>
          ) : null
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
