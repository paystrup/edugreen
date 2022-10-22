import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  HeartIcon,
  EyeIcon,
  RefreshIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function BookPage() {
  const [article, setArticle] = useState([]);
  const params = useParams();
  console.log(params); //udskriver det slug navn man er inde på i log
  const id = params.id;

  // fetch book data based on the id from the slug
  // this way we don't have to loop through the array
  useEffect(() => {
    const docRef = doc(db, "articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
  return (
      <section className="PaddingPage paddingWide">
        {article && (
            <div>
              <div className="flex title-author-hearticon">
                <div>
                  <h1 className="font-header">{article.title}</h1>
                </div>
                <button className="iconsize">
                  <HeartIcon />
                </button>
              </div>

              <h3 className="font-bodytext fc-darkgrey">Af {article.author}</h3>

              <div
                 className="image-wrapper-book"
                 style={{
                   backgroundImage: `url(${article.imageUrl})`,
                   backgroundPosition: "center",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                 }}
              >         
              </div>
            </div>
        )}
        
      </section>
    );
}

// THIS NEEDS TO BE ADDED AGAIN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                 {/* PROFILE - SALES */}
//                 <div className="flex space-between align-center">
//                   <div className="flex align-center">
//                     <img className="userBookImage" src={article.userImage} alt="" />
//                     <h2 className="font-bodytext">{article.userName}</h2>
//                   </div>
//                   <div className="flex align-center">
//                     <div className="iconsize-small-green">
//                       <RefreshIcon />
//                     </div>
//                     <p className="font-bodytext fc-darkgreen">10 salg</p>
//                   </div>
//                 </div>
//                 {/* DESCRIPTION */}
//                 <div>
//                   <p className="font-bodytextBig fc-darkgrey">
//                     {article.description}
//                   </p>
//                 </div>
//                 {/* DELEVERY */}
//                 <div className="flex space-between align-center">
//                   <p className="font-bodytextBig">Afhentning eller levering</p>
//                   <div className="flex">
//                     <div className="iconsize-small-black">
//                       <LocationMarkerIcon />
//                     </div>
//                     <p>Aarhus C</p>
//                   </div>
//                 </div>
//               </div>
//               {/* ADVANCED INFORMATION */}
//               <div className="flex wrapper-information">
//                 {/* oprettet */}
//                 <div className="flex space-between align-center">
//                   <p className="font-describe-title fc-darkgrey">Oprettet</p>
//                   <div className="flex">
//                     <div className="iconsize-small-black">
//                       <ClockIcon />
//                     </div>
//                     <p className="font-bodytext">
//                       {article.createdAt.toDate().toDateString()}
//                     </p>
//                   </div>
//                 </div>
//                 {/* udgave */}
//                 <div className="flex space-between align-center">
//                   <p className="font-describe-title fc-darkgrey">Udgave</p>
//                   <div>
//                     <p className="font-bodytext">{article.edition}</p>
//                   </div>
//                 </div>
//                 {/* stand */}
//                 <div className="flex space-between align-center">
//                   <p className="font-describe-title fc-darkgrey">Stand</p>
//                   <div>
//                     <p className="font-bodytext">{article.condition}</p>
//                   </div>
//                 </div>
//                 {/* isbn */}
//                 <div className="flex space-between align-center">
//                   <p className="font-describe-title fc-darkgrey">ISBN</p>
//                   <div>
//                     <p className="font-bodytext">{article.ISBN}</p>
//                   </div>
//                 </div>
//                 {/* BUTTONS */}
//               </div>
//             </section> */}