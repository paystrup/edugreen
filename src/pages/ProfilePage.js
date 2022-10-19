import React from 'react'
import { BuildingOfficeIcon, MapPinIcon, PencilSquareIcon, EllipsisVerticalIcon} from '@heroicons/react/24/outline'
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
            <BuildingOfficeIcon/>
            </div>
            <h3 className='font-bodytext'> Multimediedesign</h3>
        </div>
        <div className='flex'>
            <div className='iconsizeProfile'>
            <MapPinIcon/>
            </div>
            <h3 className='font-bodytext'>Aarhus C </h3>
        </div>
    </div>
    <div className='iconsize flex editProfile'>
    <NavLink to="/editprofile">
    <PencilSquareIcon/>
    </NavLink>
    <NavLink to="/practical">
    <EllipsisVerticalIcon/>
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
