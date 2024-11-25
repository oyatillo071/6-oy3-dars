import React from "react";
import "./index.css";
import Movie from "../Movie";

function MovieList(props) {
  const { data } = props;
  return (
    
      <div className="movie-wrapper">
        {data.map((value, index) => {
          return <Movie key={index} data={value}></Movie>;
        })}
      </div>
  );
}

export default MovieList;
