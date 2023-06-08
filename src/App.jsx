import { useState,useEffect } from "react";
import{ fetchdataFromApi} from './utils/api';

function App() {

  useEffect(() => {
    apiTesting();
  },[])

  const apiTesting = () => {
    fetchdataFromApi("/genre/movie")
    .then((res)=>{
      console.log(res);
    })
  }


  return <div className="App">App</div>;
}

export default App;
