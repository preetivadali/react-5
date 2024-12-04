import { useState, useEffect } from "react";
import Axios from 'axios';
import "./App.css";

function App() {
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(null);   
  const [error, setError] = useState("");

  const fetchAgeData = () => {
    if (!name) {
      setError("Please enter a name.");
      return;
    }
    setError("");

    const API_URL = `https://api.agify.io/?name=${name}`;
    Axios.get(API_URL)
      .then((res) => {
        setAge(res.data.age); 
      })
      
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Seker</div>
        <nav className="nav">
          <a href="#images">Images</a>
          <a href="#videos">Videos</a>
          <a href="#maps">Maps</a>
          <a href="#news">News</a>
          <a href="#product">Product</a>
          <a href="#signin" className="signin">
            Sign in ▾
          </a>
        </nav>
      </header>

      <main className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter your name"
            className="search-input"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <button className="search-button" onClick={fetchAgeData}>
            Search
          </button>
        </div>

       

       
        {age !== null && !error && (
          <div className="age-result">
            <h2>Estimated average age for {name}: {age} years</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
