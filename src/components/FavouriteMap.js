import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle.js";

export default function FavouriteMap({ articles }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <>
      {articles.map(
        ({ id, imageUrl, title, price, condition, likes }) =>
          likes?.includes(auth.currentUser.uid) && (
            <div className="card-teaser-wrapper flex" key={id}>
              <div className="favorite-icon iconsize-green">
                {user && <LikeArticle id={id} likes={likes} />}
              </div>
              <div
                className="image-teaser-wrapper"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => navigate("/bookpage/" + id)}
              ></div>
              <div className="col-9 ps-4">
                <div>
                  <h2 className="font-bookTeaser book-cut-title">{title}</h2>
                </div>
                <div className="flex book-text-wrapper">
                  <div className="price-wrapper flex">
                    <p className="font-bookTeaser price-cut">{price}</p>
                    <p className="font-bookTeaser">DKK</p>
                  </div>
                  {/* INDSÆT STAND I ARTICLE */}
                  <p className="font-bodytextBig fc-darkgrey">{condition}</p>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}

//   {
//     articles.map(({ id, imageUrl, title, price, condition, likes }) =>
//       likes?.includes(auth.currentUser.uid) ? (
//         <div className="card-teaser-wrapper flex" key={id}>
//           <div className="favorite-icon iconsize-green">
//             {user && <LikeArticle id={id} likes={likes} />}
//           </div>
//           <div
//             className="image-teaser-wrapper"
//             style={{
//               backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${imageUrl})`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//             onClick={() => navigate("/bookpage/" + id)}
//           ></div>
//           <div className="col-9 ps-4">
//             <div>
//               <h2 className="font-bookTeaser book-cut-title">{title}</h2>
//             </div>
//             <div className="flex book-text-wrapper">
//               <div className="price-wrapper flex">
//                 <p className="font-bookTeaser price-cut">{price}</p>
//                 <p className="font-bookTeaser">DKK</p>
//               </div>
//               {/* INDSÆT STAND I ARTICLE */}
//               <p className="font-bodytextBig fc-darkgrey">{condition}</p>
//             </div>
//           </div>
//         </div>
//       ) : null
//     );
//   }
