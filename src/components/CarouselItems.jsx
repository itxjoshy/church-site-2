import React, { useRef, useEffect, useState } from "react";
import "./carousel.css";

const CarouselItems = ({ images = [], reverse = false, speed = 30 }) => {
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  // Duplicate once: [original set] + [clone set]
  // Animation moves exactly one set width, then loops invisibly.
  const duplicated = [...images, ...images];

  // Measure the total pixel width of one original set after render
  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    const gap = 20; // must match .carousel-track gap in CSS
    const firstChild = track.children[0];
    if (!firstChild) return;

    const singleItemWidth = firstChild.offsetWidth + gap;
    const totalOriginalWidth = singleItemWidth * images.length;
    setScrollDistance(totalOriginalWidth);
  }, [images]);

  // Duration scales with image count so speed stays consistent
  const duration = (images.length * 120) / speed;

  return (
    <div className="carousel-wrapper">
      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          animation: scrollDistance
            ? `scroll ${duration}s linear infinite ${reverse ? "reverse" : ""}`
            : "none",
          "--scroll-dist": scrollDistance ? `-${scrollDistance}px` : "0px",
        }}
      >
        {duplicated.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarouselItems;
