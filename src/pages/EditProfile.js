import React from "react";
import {  XIcon, PlusIcon} from '@heroicons/react/outline'
import { auth } from "../firebaseConfig.js";
import logoBig from '../assets/svg/logo-big.svg';




export default function EditProfile() {

  return (
    <section className="paddingWide redigerProfil PaddingPage">
      <h2 className="font-header">Rediger din profil</h2>
      <div className="flex">
        <div className="imageProfile bg-darkgreen">
        <img className="imageProfile" 
              src={auth.currentUser.photoURL} alt="" 
              onError={(e) => {
              e.target.onerror = null
              e.target.src = {logoBig};
            }}/>
        </div>

        <form className="font-input editForm editName">
          <label>
            Fulde Navn 
            <input type="text" name="name"  />
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
          <select id="education" >
            <option value="multimediedesign"> Multimediedesign</option>
            <option value="jura">Jura</option>
            <option value="medicin">Medicin</option>
            <option value="erhvervsoekonomi">Erhvervsøkonomi</option>
          </select>
        </label>
        <br></br>
<h3 className="font-input">Interesser</h3>
<div className="flex interesser">
  <div className="bg-darkgreen fc-white interestsBtn flex"><p>Multimediedesign</p>
  <button><XIcon className='crossIcon iconsizeCross'/></button></div>
  <div className="bg-darkgreen fc-white interestsBtn flex"><p>HTML</p>
  <XIcon className='crossIcon iconsizeCross'/></div>
  <div className="bg-darkgreen fc-white interestsBtn flex"><p>UX</p>
  <XIcon className='crossIcon iconsizeCross'/></div>
  <div className="bg-darkgreen fc-white interestsBtn flex"><p>JavaScript</p>
  <XIcon className='crossIcon iconsizeCross'/></div>
  <div className="bg-darkgreen fc-white interestsBtn flex"><p>Grafisk design</p>
  <XIcon className='crossIcon iconsizeCross'/></div>

  <button className="bg-darkgreen fc-white interestsBtn flex"><p>Tilføj flere </p>
  <PlusIcon className='crossIcon iconsizeCross'/></button>

</div>
      </form>
      <input className="editSubmit btn-large font-btn" type="submit" value="Submit" />

    </section>
  );
}
