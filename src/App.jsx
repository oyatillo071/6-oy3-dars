import "./App.css";
import React, { useState } from "react";
import dataList from "./movies.json";
import MovieList from "./components/MovieList";

function App() {
  const [counter, setCounter] = useState(20);

  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="header">
            <a href="#"> Kino Ro'yhati</a>
            <ul className="list">
              <li className="list-items">
                <a href="#">Bosh sahifa</a>
              </li>
              <li className="list-items">
                <a href="#">Kinolar</a>
              </li>
              <li className="list-items">
                <a href="#">Yangiliklar</a>
              </li>
            </ul>
            <h3>{counter}</h3>
          </div>

          <MovieList data={dataList} />
        </div>
      </div>
    </div>
  );
}

export default App;
