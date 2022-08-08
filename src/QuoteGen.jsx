
import {  useState } from "react";

const QuoteGenerator = () => {
  const [dic, setdic]=useState();
  const fetching =()=>{
  
    fetch( 'https://api.quotable.io/random' )
    .then(response => response.json())
    .then(data => {
    // let RandowNumber = Math.floor(Math.random() * data.length);
      setdic(data);
    })

  }

    
  return ( 
    <div className="container">
    <div className="content_container">
      <h3>Quote Generator!</h3>
      <h4>{dic?.content}</h4>
      <h4>{dic?.dateAdded}</h4>
    <h3>Author:{dic?.author}</h3>
    <button onClick={()=>fetching()}>Next Quote</button>
    </div>
    </div>

   );
}
 
export default QuoteGenerator;