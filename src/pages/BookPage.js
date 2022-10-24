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
import DeleteArticle from "../components/DeleteArticle";
import LikeArticle from "../components/LikeArticle";

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
        {/* DELETE + EDIT BUTTON IF IT'S OWNED BY USER SIGNED IN */}
        {article.user === auth.currentUser.uid && (
          <div className="bookEditBtn flex flexCol gap05">
            <DeleteArticle id={article.id} imageUrl={article.imageUrl}/>
            <button className="font-btn btn-large bg-darkgreen fc-white">Rediger opslag</button>
          </div>
        )}

        {article && (
            <div>
              {/* ARTICLE HEADER */}
              <div className="bookHeader">
                <div className=" flex title-author-hearticon">
                  <div>
                    <h1 className="font-header">{article.title}</h1>
                  </div>
                  <div className="iconsize-green">
                    {user && <LikeArticle id={id} likes={article.likes} />}
                  </div> 
                </div>

                {/* AUTHOR(S) */}
                <h3 className="font-bodytext fc-darkgrey">Af {article.author}</h3>
              </div>
 

              {/* ARTICLE MAIN IMAGE */}
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
              
              {/* PRICE + VIEWS + LIKES */}
              <div className="bookpagePrice flex space-between">
                 <h3 className="font-header">{article.price} DKK</h3>
                 <div className="flex gap1 align-center">
                    <div className="gap02 flex iconsize-small-grey">
                        <EyeIcon />
                        <p className="font-bodytext fc-darkgrey">0</p>
                    </div>
                    <div className="gap02 flex iconsize-small-grey align-center">
                        <HeartIcon />
                        <p className="font-bodytext fc-darkgrey">{article.likes?.length}</p>
                    </div>
                 </div>
              </div>
              
              {/* USER PROFILE PIC AND NAME */}
              <div className="bookpageUserInfo flex space-between align-center">
                 <div className="flex align-center">
                    <img className="userBookImage" src={article.userImage} alt="Profilepicture user"></img>
                    <h2 className="font-bodytextBigBold">{article.userName}</h2>
                 </div>
                 <div className="flex align-center gap02">
                    <div className="iconsize-small-green">
                        <RefreshIcon />
                    </div>
                    <p className="font-bodytext fc-darkgreen">10 salg</p>
                  </div>
              </div>

              {/* BESKRIVELSE */}
              <div className="bookDescription">
                <p className="font-bodytextBig fc-darkgrey">
                  {article.description}
                </p>
              </div>

              {/* AFHENTNING ELLER LEVERING */}
              <div className="flex space-between align-center">
                <p className="font-bodytextBigBold">Afhentning eller levering</p>
                <div className="flex gap02">
                  <div className="iconsize-small-black">
                      <LocationMarkerIcon />
                  </div>
                  <p className="font-bodytextBigBold fc-darkgreen">Aarhus C</p>
                </div>
              </div>
              
              {/* ADVANCED INFO */}
              <div className="flex wrapper-information">

                {/* DATO OPRETTET */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Oprettet</p>
                  <div className="flex gap02">
                      <div className="iconsize-small-black">
                        <ClockIcon />
                      </div>
                      <p className="font-bodytext">
                        {/* {article.createdAt} */}
                      </p>
                  </div>
                </div>

                {/* STAND */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Stand</p>
                  <div>
                    <p className="font-bodytext">{article.condition}</p>
                  </div>
                </div>

                {/* STAND */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Uddannelse</p>
                  <div>
                    <p className="font-bodytext">{article.education}</p>
                  </div>
                </div>
                
                {/* UDGAVE */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Udgave</p>
                  <div>
                    <p className="font-bodytext">{article.edition}. udgave</p>
                  </div>
                </div>

                {/* ÅRSTAL */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">Årstal</p>
                  <div>
                    <p className="font-bodytext">{article.year}</p>
                  </div>
                </div>

                {/* ISBN */}
                <div className="flex space-between align-center">
                  <p className="font-describe-title fc-darkgrey">ISBN</p>
                  <div>
                    <p className="font-bodytext">{article.ISBN}</p>
                  </div>
                </div>

              </div>

            </div>
        )}
        
      </section>
    );
}