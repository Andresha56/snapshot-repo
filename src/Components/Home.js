import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    async function fetchData(){
      let url=await fetch("https://api.unsplash.com/search/photos/?query=flower&client_id=S84IAL8OaC3X5XAdqSzFo8_C84OSJHd9Z21t0U6VdVQ&per_page=10");
      const response=await url.json();
      setApiData(response.results)
    }
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <h1>Snapshot</h1>
      <input
        type="search"
        name="search"
        value={input}
        id="search_input"
        onChange={(v) => setInput(v.target.value)}
      />
      <div className="options-select">
        <button>Mountain</button>
        <button>Flowers</button>
        <button>Technology</button>
        <button>Love</button>
      </div>
     
      <ul className="img-Con">
        {apiData &&
          apiData.map(items=>{
            console.log(items.id)
          return(
            <li key={items.id}>
            <img src={items.urls.thumb} alt={items.tags[0].title}/>
          </li>
          )
          })
        }
      </ul>
    </div>
  );
}

export default Home;
