import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState(null);
  let [searchResult,setSearchResult]=useState("random")
  useEffect(() => {
    async function fetchData(){
      let url=await fetch(`https://api.unsplash.com/search/photos/?query=${searchResult}&client_id=apikey&r_page=10`);
      const response=await url.json();  
      setApiData(response.results)
    }
    fetchData();
  });
  return (
    <div className="content-container">
      <div className="wrapper">
      <h1>Snapshot</h1>
      <input
        type="search"
        name="search"
        value={input}
        id="search_input"
        autoComplete="off"
        onChange={(v) => {
          setInput(v.target.value)
          setSearchResult(input)
        }
        }
        
      />
      <div className="options-select">
        <button onClick={()=>setSearchResult("Mountain")}>Mountain</button>
        <button onClick={()=>setSearchResult("nature")}>Nature</button>
        <button onClick={()=>setSearchResult("Technology")}>Technology</button>
        <button onClick={()=>setSearchResult("Love")}>Love</button>
      </div>
     
      <ul className="img-Con">
        {apiData &&
          apiData.map(items=>{
          return(
            <li key={items.id}>
            <img src={items.urls.thumb} alt={items.tags[0].title}/>
          </li>
          )
          })
        }
      </ul>
      </div>
    </div>
  );
}

export default Home;
