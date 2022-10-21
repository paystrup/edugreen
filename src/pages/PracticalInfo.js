import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';


export default function PracticalInfo() {
  return (
    <section className="paddingWide">
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
