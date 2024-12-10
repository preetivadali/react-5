import { useState,useEffect } from "react";
import Axios from 'axios';
import "./App.css";

function App() {
  const [name, setName] = useState(""); 
  const [searchName, setSearchName] = useState(""); 
  const [age, setAge] = useState(null); 
  const [error, setError] = useState(""); // Track errors

  const fetchAgeData = () => {
    if (!name) {
      setError("Please enter a name.");
      return;
    }
    setError("");

    const API_URL = `https://api.agify.io/?name=${name}`;
    Axios.get(API_URL)
      .then((res) => {
        setSearchName(name);
        setAge(res.data.age);
      })
      .catch((err) => {
        console.error("Error fetching age data:", err);
        setError("Something went wrong. Please try again later.");
      });
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
          <label htmlFor="name-input" className="search-label">
            Enter a name:
          </label>
          <input
            id="name-input"
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

        {error && <div className="error-message">{error}</div>}

        {age !== null && !error && (
          <div className="age-result">
            <h2>
              Estimated average age for {searchName}: {age} years
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
