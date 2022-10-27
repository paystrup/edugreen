import React, {useState}from 'react'
import {ChevronRightIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import Advanced from "../assets/svg/advanced.svg";
import Search1 from "../assets/svg/search.svg";

export default function Search() {

  const [list, setList] = useState(false)

 const handleClick = () => {
        setList(list => !list);
    }


  return (
    <section className="search paddingWide ">
    <div className="classicSearch">
        <input
          id="search"
          type="text"
          name="search"
          className="form-control"


          style={{ 
            backgroundImage: `url(${Search1})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: '20px',
            backgroundOrigin: 'content-box',
            textAlign: 'center',
            }}
          />
          <ul>
          <li><h6 className="font-profilename padding1 padding3">Seneste søgninger</h6></li>
          <hr/>
          <li><p className="font-bodytextBig praktisk iconsize flex padding1 padding3">Samfundspædagogik <NavLink to="/p"><ChevronRightIcon/></NavLink></p></li>
          <hr/>
          <li><p className="font-bodytextBig praktisk iconsize flex padding1 padding3">Formidlingsstrategier <NavLink to="/p"><ChevronRightIcon/></NavLink></p></li>
          <hr/>
          <li><p className="font-bodytextBig praktisk iconsize flex padding1 padding3">Begin to code with JavaScript <NavLink to="/p"><ChevronRightIcon/></NavLink></p></li>
          </ul>
          <button className="btn-large bg-green fc-white font-btn">Søg</button>          
    </div>
    <div className="Advanced PaddingPage">
      
      <button className="btn-large-strokeWide font-btn"
         onClick = {handleClick}
         style={{ 
          backgroundImage: `url(${Advanced})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
          backgroundSize: '20px',
          backgroundOrigin: 'content-box',
          paddingLeft: '25px',
          }}
        >
          Avanceret søgning</button>
{list &&                                                
         <div className = "select-option ">
            <ul id = 'action1' className = "select-option-inner rounded">
            <h3 className="font-header">Avanceret søgning</h3>
      <input id="titel" type="text" name="titel" className="form-control" placeholder="Titel"/>
      <input id="author" type="text" name="author" className="form-control" placeholder="Forfatter(ere)"/>

    <datalist id="mylist">
        <option value="1. udgave"/>
        <option value="2. udgave"/>
        <option value="3. udgave"/>
        <option value="4. udgave"/>
        <option value="5. udgave"/>
        <option value="6. udgave"/>
        <option value="7. udgave"/>
        <option value="8. udgave"/>
        <option value="9. udgave"/>
        <option value="10. udgave"/>
        <option value="11. udgave"/>
        <option value="12. udgave"/>
    </datalist>
      <input type="search" list="mylist" name="author" className="form-control" placeholder="Udgave"/>

      <input type="number" className="form-control" placeholder="Årstal"/>

    <datalist id="list">
        <option value="Som ny">Som ny</option>
        <option value="God">God</option>
        <option value="Lidt brugt">Lidt brugt</option>
        <option value="Meget brugt">Meget brugt</option>
    </datalist>
      <input type="search" list="list" name="condition" className="form-control" placeholder="Stand"/>

    <button className="btn-large bg-green fc-white font-btn">Søg</button>
            </ul> 
         </div>}



    </div>
    </section>
  )
}
