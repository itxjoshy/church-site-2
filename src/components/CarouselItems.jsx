import React from "react";
import { useRef, useEffect } from "react";
import "./carousel.css";
const CarouselItems = ({ images, reverse = false, speed = 50 }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="carousel">
      <div
        className={`track ${reverse ? "reverse" : ""}`}
        style={{ "--scroll-speed": `${speed}s` }}
      >
        {duplicatedImages.map((img, index) => (
          <img key={index} src={img} alt={`carousel-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CarouselItems;
