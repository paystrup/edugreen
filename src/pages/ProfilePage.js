import React from "react";
import {
  OfficeBuildingIcon,
  LocationMarkerIcon,
  PencilAltIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import logoBig from "../assets/svg/logo-big.svg";
import ProfileUserPosts from "../components/ProfileUserPosts.js";
import CO2 from "../assets/svg/CO2.svg";


export default function ProfilePage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
    return (
      <section className="profilesection paddingWide PaddingPage bigscreenpadding">
        <div className="flex redigerIkoner ">
          <div className="flex imgName-wrapper">
            <div>
              {/* Gets the users picture from firebase. If there is an error, the logo will show */}
              <img
                className="imageProfile"
                src={auth.currentUser.photoURL}
                alt={user.displayName}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = { logoBig };
                }}
              />
            </div>

            <div className="blockProfile ">
              <div className="ProfileInfo">
                <h2 className="font-profilename">{user.displayName}</h2>

                <div className="flex iconsGroup">
                  <div>
                    <OfficeBuildingIcon className="iconsizeProfile" />
                  </div>
                  <h3 className="font-bodytext fc-darkgrey">
                    Multimediedesign
                  </h3>
                </div>
                <div className="flex iconsGroup">
                  <div>
                    <LocationMarkerIcon className="iconsizeProfile" />
                  </div>
                  <h3 className="font-bodytext fc-darkgrey">Aarhus C</h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex editProfile">
            <NavLink to="/editprofile">
              <PencilAltIcon className="iconsizeEdit" />
            </NavLink>
            <NavLink to="/practical">
              <DotsVerticalIcon className="iconsizeEdit" />
            </NavLink>
          </div>
        </div>

        <div className="savingsProfile space-between">
          <div className="moneyProfile flex bg-green">
            <h3 className="font-btn fc-white besparelseProfile">
              Penge <br></br>besparelse
            </h3>
            <h2 className="font-bely fc-white">200kr</h2>
          </div>

          <div className="co2Profile bg-darkgreen" 
            style={{ 
            backgroundImage: `url(${CO2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: '90%',
            }}
            >
            <div className=" flex co2ProfileText">
              <h3 className="font-btn fc-white">
                CO2 <br></br> besparelse
              </h3>
              <h2 className="font-bely fc-white">2kg</h2>
            </div>
            {/* <div className="Profile-illustration">
               <img src={CO2} alt="Leaf illustration"></img>
            </div> */}
          </div>
        </div>

        <ProfileUserPosts />
        <div className="signOut paddingTopBottom">
          <button
            className="font-btn btn-large-strokeWide "
            onClick={() => auth.signOut()}
          >
            Log ud {user.displayName}
          </button>
        </div>
      </section>
    );
}
