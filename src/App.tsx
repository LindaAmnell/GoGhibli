// import { useState } from 'react'
import { NavLink } from "react-router-dom";

import "./css/App.css";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <header>
        <h1>Go Ghibli Movies</h1>
        <NavLink className="favorite-text-start" to="/Favorite">
          Favorite Movie 💛
        </NavLink>
      </header>
      <main>
        <Movies />
      </main>
    </>
  );
}

export default App;
