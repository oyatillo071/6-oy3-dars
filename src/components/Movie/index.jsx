import React from "react";
import "./index.css";
import ImgCarousel from "../ImgCarousel";

function Movie(props) {
  const { data } = props;
  const images = Array.isArray(data.Images) ? data.Images : [];
  return (
    <>
      <div className="movie-card">
        <div className="movie-images">
          <ImgCarousel images={images}></ImgCarousel>
        </div>

        <div className="info-wrapper">
          <div className="movie-title">
            <h3>{data.Title}</h3>
            <h4>{data.Plot}</h4>
          </div>
          <div className="wrapper">
            <div className="movie-info">
              <h4>
                Yil: <span>{data.Year}</span>
              </h4>
              <h4>
                Chiqarilgan sana: <span>{data.Released}</span>
              </h4>

              <h4>
                Janr <span>{data.Genre}</span>
              </h4>

              <h4>
                Yozuvchi <span>{data.Writer}</span>
              </h4>

              <h4>
                Til <span>{data.Language}</span>
              </h4>

              <h4>
                Mukofotlar <span>{data.Awards}</span>
              </h4>
            </div>
            {/* 






      */}

            <div className="movie-info">
              <h4>
                Reyting: <span>{data.Rated}</span>
              </h4>
              <h4>
                Davomiyligi: <span> {data.Runtime}</span>
              </h4>
              <h4>
                Rejissor: <span>{data.Director}</span>
              </h4>

              <h4>
                Aktyorlar: <span>{data.Actors}</span>
              </h4>

              <h4>
                Mamlakatlar: <span>{data.Country}</span>
              </h4>
              <h4>
                IMDb reytingi: <span>{data.imdbRating}</span>
              </h4>
            </div>
            {/* 
          
          */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
