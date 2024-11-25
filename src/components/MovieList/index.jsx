import React from "react";
import Movie from "../Movie";
import './index.css'

function MovieList({ data, toggleLike, likes }) {
  return (
    <>
      <div className="movie-list">
        {data.map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            toggleLike={toggleLike}
            likeStatus={likes[movie.id] || 0}
          />
        ))}
      </div>
    </>
  );
}

export default MovieList;
