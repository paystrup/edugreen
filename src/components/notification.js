import {useState} from 'react';

export default function Chat() {
  const [page, setPage] = useState("sale");
  
  return (
    <div>
      <div className='chat-buttons'>
        <button className=' chat-buttonschange font-btn' onClick={() => setPage("sale")}>Alle</button>
        <button className=' chat-buttonschange font-btn' onClick={() => setPage("buy")}>Bogagent</button>
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
      <p className='font-header'>Ingen Bogaggent</p>
      <hr/>
    </div>
  );
}
function Sellmessage() {
  return (
    <div className='chat-error-message'>
      <p className='font-header'>Ingen notifikationer</p>
      <hr/>
    </div>
  );
}