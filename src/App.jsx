import {useState, useEffect } from "react";
import "./App.css";

function App() {
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
            placeholder="How to design"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        
        <ul className="suggestions">
          <li>How to design</li>
          <li>How to work hard</li>
          <li>How to choose font</li>
          <li>How to choose color palette</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
