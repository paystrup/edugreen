import React from 'react'
import { OfficeBuildingIcon, LocationMarkerIcon, PencilAltIcon, DotsVerticalIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';



export default function ProfilePage() {
  return (
    <section className='profilesection paddingWide'>
        <div className='flex'>
            <div className='imageProfile bg-darkgreen'></div>
 
        <div className='blockProfile paddingWide'>
            <h2 className='font-header'>John Doe</h2>


        <div className='flex'>
            <div className='iconsizeProfile'>
            <OfficeBuildingIcon/>
            </div>
            <h3 className='font-bodytext fc-darkgrey'> Multimediedesign</h3>
        </div>
        <div className='flex'>
            <div className='iconsizeProfile'>
            <LocationMarkerIcon/>
            </div>
            <h3 className='font-bodytext fc-darkgrey'>Aarhus C </h3>
        </div>
    </div>
    <div className='iconsize flex editProfile '>
    <NavLink to="/editprofile">
    <PencilAltIcon/>
    </NavLink>
    <NavLink to="/practical">
    <DotsVerticalIcon/>
    </NavLink>

    </div>
    </div>

    <div className='savingsProfile'>
   
    <div className='moneyProfile flex bg-green'>
        <h3 className='font-btn fc-white besparelseProfile'>Penge <br></br>besparelse</h3>
        <h2 className='font-bely fc-white'>200kr</h2>
    </div>
   
    <div className='co2Profile flex bg-darkgreen'>
        <h3 className='font-btn fc-white'>CO2 <br></br> besparelse</h3>
        <h2 className='font-bely fc-white'>2kg</h2>
    </div>
    </div>

    <div>
        <h2 className='font-header'>Mine annoncer</h2>
        
    </div>

    </section>
  )
}
