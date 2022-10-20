import React from "react";
import { NavLink } from 'react-router-dom';
import { ArrowLongLeftIcon} from '@heroicons/react/24/outline'


export default function EditProfile() {
  return (
    <section className="paddingWide redigerProfil">
      <div className="PracticalIcon goBack">
      <NavLink to="/profile" className="flex iconsize goBackp"><ArrowLongLeftIcon/><p className="font-bodytext">GÅ TILBAGE</p></NavLink>
      </div>
      <h2 className="font-header">Rediger din profil</h2>
      <div className="flex">
        <div className="imageProfile bg-darkgreen"></div>

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
  <button className="bg-darkgreen fc-white interestsBtn">Multimediedesign</button>
</div>
        <input className="editSubmit" type="submit" value="Submit" />
      </form>
    </section>
  );
}
