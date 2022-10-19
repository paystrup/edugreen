import {useState} from 'react';

export default function Chat() {
  const [page, setPage] = useState("sale");
  
  return (
    <div>
      <div className='chat-buttons'>
        <button className=' chat-buttonschange font-btn' onClick={() => setPage("sale")}>Salg</button>
        <button className=' chat-buttonschange font-btn' onClick={() => setPage("buy")}>Køb</button>
      </div>

      <div className='pageContent'>
        {page === "sale" && <Sellmessage/>}
        {page === "buy" && <Buymessage/>}

      </div>
      
    </div>
  );
}
function Buymessage() {
  return (
    <div className='chat-error-message'>
      <p className='font-header'>Ingen beskeder at vise</p>
      <p className='font-bodytext'>find bøger</p> 
      <button className=' btn-large font-btn fc-white bg-green'>Find søger</button>
      <hr/>
    </div>
  );
}
function Sellmessage() {
  return (
    <div className='chat-error-message'>
      <p className='font-header'>Ingen nye beskeder</p>
      <p className='font-bodytext'>opret bog annonce her</p> 
       <button className=' btn-large font-btn fc-white bg-green'>Sælg dine bøger</button>
      <hr/>
    </div>
  );
}
