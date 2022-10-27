import React from "react";
import { XIcon, PlusIcon } from "@heroicons/react/outline";
import { auth } from "../firebaseConfig.js";
import logoBig from "../assets/svg/logo-big.svg";


export default function EditProfile() {
  // This function will be implemented at a later stage
  // User will be able to edit their profile
  // This can be stored in a new collection in fireStore and later fetched
  // updates can happen with updateDoc function in the firebase API


  return (
    <section className="paddingWide redigerProfil PaddingPage">
      <h2 className="font-header">Rediger din profil</h2>
      <div className="flex">
        <div className="imageProfile bg-darkgreen">
          <img
            className="imageProfile"
            src={auth.currentUser.photoURL}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = { logoBig };
            }}
          />
        </div>

        {/* Simple form, which is not working. The point is, that the user is able to change their personal information.*/}
        <form className="font-input editForm editName">
          <label>
            Fulde Navn
            <input type="text" name="name" />
          </label>
        </form>
      </div>

      <form className="font-input editForm ">
        <label>
          Lokation
          <input type="text" name="location" />
        </label>
        <br></br>
        <label>
          Beskrivelse
          <textarea type="textarea" name="description" />
        </label>
        <br></br>
        <label for="education" className="editEducation">
          Uddannelse(r)
          <select id="education">
            <option value="multimediedesign"> Multimediedesign</option>
            <option value="jura">Jura</option>
            <option value="medicin">Medicin</option>
            <option value="erhvervsoekonomi">Erhvervsøkonomi</option>
          </select>
        </label>
        <br></br>
        {/* The user is supposed to be able to choose their interests, which are then used in a filtration, for what
        is visible at the landingpage. We have only made the visual effect and it is not working*/}
        <h3 className="font-input">Interesser</h3>
        <div className="flex interesser">
          <div className="bg-darkgreen fc-white interestsBtn flex">
            <p>Multimediedesign</p>
            <button>
              <XIcon className="crossIcon iconsizeCross" />
            </button>
          </div>
          <div className="bg-darkgreen fc-white interestsBtn flex">
            <p>HTML</p>
            <XIcon className="crossIcon iconsizeCross" />
          </div>
          <div className="bg-darkgreen fc-white interestsBtn flex">
            <p>UX</p>
            <XIcon className="crossIcon iconsizeCross" />
          </div>
          <div className="bg-darkgreen fc-white interestsBtn flex">
            <p>JavaScript</p>
            <XIcon className="crossIcon iconsizeCross" />
          </div>
          <div className="bg-darkgreen fc-white interestsBtn flex">
            <p>Grafisk design</p>
            <XIcon className="crossIcon iconsizeCross" />
          </div>

          <button className="bg-darkgreen fc-white interestsBtn flex">
            <p>Tilføj flere </p>
            <PlusIcon className="crossIcon iconsizeCross" />
          </button>
        </div>
      </form>
      <input
        className="editSubmit btn-large font-btn fc-white"
        type="submit"
        value="Submit"
      />
    </section>
  );
}
