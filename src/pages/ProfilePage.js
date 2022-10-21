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
import logoBig from '../assets/svg/logo-big.svg';
import ProfileUserPosts from '../components/ProfileUserPosts.js'

export default function ProfilePage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h1>Indlæser ...</h1>;
  if (!user) navigate("/login");
  if (user)
    return (
      <section className="profilesection paddingWide">
        <div className="flex redigerIkoner ">
         <div className="flex imgName-wrapper">
          <div >
            <img className="imageProfile" 
              src={auth.currentUser.photoURL} alt="" 
              onError={(e) => {
              e.target.onerror = null
              e.target.src = {logoBig};
            }}/>
          </div>

          <div className="blockProfile ">
            <h2 className="font-profilename">{user.displayName}</h2>

            <div className="flex">
              <div className="iconsizeProfile">
                <OfficeBuildingIcon />
              </div>
              <h3 className="font-bodytext fc-darkgrey">Multimediedesign</h3>
            </div>
            <div className="flex">
              <div className="iconsizeProfile">
                <LocationMarkerIcon />
              </div>
              <h3 className="font-bodytext fc-darkgrey">Aarhus C </h3>
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

        <div className="savingsProfile">
          <div className="moneyProfile flex bg-green">
            <h3 className="font-btn fc-white besparelseProfile">
              Penge <br></br>besparelse
            </h3>
            <h2 className="font-bely fc-white">200kr</h2>
          </div>

          <div className="co2Profile flex bg-darkgreen">
            <h3 className="font-btn fc-white">
              CO2 <br></br> besparelse
            </h3>
            <h2 className="font-bely fc-white">2kg</h2>
          </div>
        </div>
        
        <ProfileUserPosts />
        <div className="signOut">
          <button className="font-btn btn-large-stroke signOutBtn" onClick={() => auth.signOut()}>Log ud {user.displayName}</button>
        </div>



      </section>
    );
}
