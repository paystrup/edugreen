import React from 'react'

export default function EditProfile() {
  return (
    <section className='paddingWide'>
        <h2 className='font-header'>Rediger din profil</h2>
        <div className='flex'>
            <div className='imageProfile bg-darkgreen'></div>
    <form className='font-input'>
        <label>
            Fulde Navn <br></br>
        <input type="text" name="name" className='bg-lightgrey'/>
        </label>
    </form>
    </div>

    <form className='font-input'>
        <label>
            Lokation <br></br>
        <input type="text" name="location" className='bg-lightgrey'/>
        </label><br></br>
        <label>
            Beskrivelse <br></br>
        <input type="text" name="description" className='bg-lightgrey'/>
        </label><br></br>
        <label for="education"> 
        Uddannelse <br></br>
        <select id="education" className='bg-lightgrey' >
            <option value="multimediedesign">Multimediedesign</option>
            <option value="jura">Jura</option>
            <option value="medicin">Medicin</option>
            <option value="erhvervsoekonomi">Erhvervsøkonomi</option>
        </select>
        </label><br></br>
        <input type="checkbox" name="multimediedesign" value=""/>
        <label for="multimediedesign"> Multimediedesign</label>
        <input type="checkbox" name="ux" value=""/>
        <label for="ux"> UX</label>
        <input type="checkbox" name="ui" value=""/>
        <label for="ui">UI</label>


        <input type="submit" value="Submit" />
        </form>



    </section>
  )
}
