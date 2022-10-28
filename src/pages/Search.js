import React, {useState, useRef}from 'react'
import {ChevronRightIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import Advanced from "../assets/svg/advanced.svg";
import Search1 from "../assets/svg/search.svg";

export default function Search() {

  const [list, setList] = useState(false);
  const anvancedref = useRef(null);
  
  const handleClick = () => {
          setList(list => !list);
  }

  const scrollTo = () => {
    anvancedref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="search paddingWide PaddingPage bigscreenpadding">
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
              <li>
                <h6 className="font-profilename padding4">Seneste søgninger</h6>
              </li>

              <hr className="line"/>

              <li>
                <p className="font-bodytextBig praktisk iconsize flex">
                  Samfundspædagogik <NavLink to="/p"><ChevronRightIcon/></NavLink>
                </p>
              </li>

              <hr className="line"/>

              <li>
                <p className="font-bodytextBig praktisk iconsize flex">
                  Formidlingsstrategier <NavLink to="/p"><ChevronRightIcon/></NavLink>
                </p>
              </li>

              <hr className="line"/>

              <li>
                <p className="font-bodytextBig praktisk iconsize flex">
                  Begin to code with JavaScript <NavLink to="/p"><ChevronRightIcon/></NavLink>
                </p>
              </li>

              <hr className="line"/>
              
            </ul>
                      
      </div>
      <div className="Advanced">
        <div className='flex flexCol gap1'>
          <button className="btn-large bg-green fc-white font-btn">Søg</button>
          <button className="btn-large-strokeWide font-btn"
            onClick = {() => {
              handleClick();
              scrollTo();
            }}
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
        </div>
       
            
          {list &&                                             
            <div className="select-option">
              <ul id='action1' className="select-option-inner rounded flex flexCol gap1">
                <h3 className="font-header">Avanceret søgning</h3>
                <input id="titel" type="text" name="titel"  placeholder="Titel"/>
                <input id="author" type="text" name="author" placeholder="Forfatter(ere)"/>
                <input id="edition" type="number" name="edition" placeholder="Udgave"/>
                <input type="number" className="form-control" placeholder="Årstal"/>
                <select id="condition" name="condition" placeholder="Bogens stand">
                  <option className="optioncolor" value="" disabled defaultValue>
                    Vælg bogens stand
                  </option>
                  <option value="Som ny">Som ny</option>
                  <option value="God">God</option>
                  <option value="Lidt brugt">Lidt brugt</option>
                  <option value="Meget brugt">Meget brugt</option>
                </select>

                <button className="btn-large bg-green font-btn fc-white">Søg</button>
              </ul> 
            </div>
          }
        <div className='unseen-scroll-div' ref={anvancedref}></div>
      </div>
    </section>
  )
}
