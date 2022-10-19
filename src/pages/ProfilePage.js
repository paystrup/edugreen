import React from 'react'
import { BuildingOfficeIcon, MapPinIcon, PencilSquareIcon, EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import logoBig from '../assets/svg/logo-big.svg';
import { NavLink } from 'react-router-dom';



export default function ProfilePage() {
  return (
    <section className='profilesection paddingWide'>
        <div className='flex'>
            <img className='imageProfile' src={logoBig} alt=""></img>
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
    <NavLink to="/pp">
    <PencilSquareIcon/>
    </NavLink>
    <NavLink to="/pp">
    <EllipsisVerticalIcon/>
    </NavLink>

    </div>
    </div>

    <div className='savingsProfile'>
   
    <div className='moneyProfile flex fc-green'>
        <h3 className='font-btn fc-white'>Penge <br></br>besparelse</h3>
        <h2 className='font-bely fc-white'>200kr</h2>
    </div>
   
    <div className='co2Profile flex fc-darkgreen'>
        <h3 className='font-btn fc-white'>CO2 <br></br> besparelse</h3>
        <h2 className='font-bely fc-white'>2kg</h2>
    </div>
    </div>

    </section>
  )
}
