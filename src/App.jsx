import React, { useState, useEffect } from "react";
import "./App.css";
import dataList from "./movies.json";
import MovieList from "./components/MovieList";

function App() {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("likes");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  const totalLikes = Object.values(likes).filter((like) => like === 1).length;

  const toggleLike = (movieId) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[movieId] = newLikes[movieId] === 1 ? 0 : 1;
      localStorage.setItem("likes", JSON.stringify(newLikes));
      return newLikes;
    });
  };

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
            <h3>{totalLikes} ta like</h3>
          </div>

          <MovieList data={dataList} toggleLike={toggleLike} likes={likes} />
        </div>
      </div>
    </div>
  );
}

export default App;
