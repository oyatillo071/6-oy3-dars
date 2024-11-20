import "./App.css";
import React, { useState } from "react";
import dataList from "./movies.json";
import MovieList from "./components/MovieList";
import Header from "./components/MovieHeader";

function App() {
  const [count, setCounter] = useState(10);

  return (
    <div>
      <div className="container">
        <div className="main">
          <Header></Header>

          <MovieList data={dataList} />
        </div>
      </div>
    </div>
  );
}

export default App;
