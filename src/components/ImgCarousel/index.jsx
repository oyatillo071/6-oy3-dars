import React, { useState } from "react";
import "./index.css";

const ImgCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &lt;
      </button>

      <div className="carousel-image">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
        />
      </div>

      <button className="carousel-btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImgCarousel;
