import {useState} from 'react';

export default function Chat() {
  const [page, setPage] = useState("sale");
  
  return (
    <div>
      <div className='chat-buttons'>
        <button className=' chat-buttonschange' onClick={() => setPage("sale")}>Salg</button>
        <button className=' chat-buttonschange' onClick={() => setPage("buy")}>Køb</button>
      </div>

      <div className='pageContent'>
        {page === "sale" && "salg"}
        {page === "buy" && "køb"}

      </div>
      
    </div>
  );
}
// function Buymessage() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
// }
// function Sellmessage() {
//   return (
//     <div>
//       <h2>dhdh</h2>
//     </div>
//   );
// }
