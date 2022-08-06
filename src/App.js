import { useEffect, useState } from "react";
import QuoteGenerator from "./QuoteGen";

function App() {

  const [dic, setdic]=useState();
  const fetching =()=>{
    fetch( 'https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setdic(data))
  }
  useEffect(()=>{
    fetching();
  }, [])

  return (
    <div className="App">
      <QuoteGenerator/>
      
    <h4>Data:{dic}</h4>
    {/* <h4>Data:{dic.body}</h4> */}
   
    </div>
  );
}

export default App;