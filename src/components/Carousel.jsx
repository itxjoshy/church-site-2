import React from "react";
import CarouselItems from "./CarouselItems";

export const Carousel = () => {
  const topImages = [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/600?random=2",
    "https://picsum.photos/400/600?random=3",
  ];

  const middleImages = [
    "https://picsum.photos/400/600?random=4",
    "https://picsum.photos/400/600?random=5",
    "https://picsum.photos/400/600?random=6",
  ];

  const bottomImages = [
    "https://picsum.photos/400/600?random=7",
    "https://picsum.photos/400/600?random=8",
    "https://picsum.photos/400/600?random=9",
  ];

  return (
    <div>
      <CarouselItems images={topImages} speed={12} />
      <CarouselItems images={middleImages} reverse speed={13} />
      <CarouselItems images={bottomImages} speed={15} />
    </div>
  );
};
