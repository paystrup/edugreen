import React from 'react'
import {ChevronRightIcon, ArrowNarrowLeftIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';


export default function PracticalInfo() {
  return (
    <section className="paddingWide">
      <div className="PracticalIcon goBack">
      <NavLink to="/profile" className="flex iconsize goBackp"><ArrowNarrowLeftIcon/><p className="font-bodytext">GÅ TILBAGE</p></NavLink>
      </div>
      <h2 className="font-header">Praktisk Information</h2>
      <div className="font-btn practicalInfo">
      <hr/>

      <h3 className="praktisk iconsize flex"> Personlige oplysninger <NavLink to="/p"><ChevronRightIcon/></NavLink></h3> 
      <hr/> 
      <h3 className="praktisk iconsize flex">  NemId verificer <NavLink to="/p"><ChevronRightIcon/></NavLink></h3>
      <hr/>
      <h3 className="praktisk iconsize flex"> Betaling <NavLink to="/p"><ChevronRightIcon/></NavLink></h3>
      <hr/>
      <h3 className="praktisk iconsize flex"> Hjælp <NavLink to="/p"><ChevronRightIcon/></NavLink></h3>
      <hr/>
      </div>
    </section>
  )
}
