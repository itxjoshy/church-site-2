import React from "react";
import CarouselItems from "./CarouselItems";
import c1 from "@/assets/carousel-images/c_i-1.jpg";
import c2 from "@/assets/carousel-images/c_i-2.JPG";
import c3 from "@/assets/carousel-images/c_i-3.jpg";
import c4 from "@/assets/carousel-images/c_i-4.JPG";
import c5 from "@/assets/carousel-images/c_i-5.jpg";
import c6 from "@/assets/carousel-images/c_i-6.JPG";
import c7 from "@/assets/carousel-images/c_i-7.jpg";
import c8 from "@/assets/carousel-images/c_i-8.JPG";
import c9 from "@/assets/carousel-images/c_i-9.jpg";
import c10 from "@/assets/carousel-images/c_i-10.JPG";
import c11 from "@/assets/carousel-images/c_i-11.jpg";
import c12 from "@/assets/carousel-images/c_i-12.JPG";
import c13 from "@/assets/carousel-images/c_i-13.jpg";
import c14 from "@/assets/carousel-images/c_i-14.JPG";
import c15 from "@/assets/carousel-images/c_i-15.jpg";
import c16 from "@/assets/carousel-images/c_i-16.JPG";
import c17 from "@/assets/carousel-images/c_i-17.jpg";
import c18 from "@/assets/carousel-images/c_i-18.JPG";
import c19 from "@/assets/carousel-images/c_i-19.jpg";
import c20 from "@/assets/carousel-images/c_i-20.JPG";
import c21 from "@/assets/carousel-images/c_i-21.jpg";
import c22 from "@/assets/carousel-images/c_i-22.JPG";
import c23 from "@/assets/carousel-images/c_i-23.jpg";
import c24 from "@/assets/carousel-images/c_i-24.JPG";
import c25 from "@/assets/carousel-images/c_i-25.jpg";
import c26 from "@/assets/carousel-images/c_i-26.JPG";
import c27 from "@/assets/carousel-images/c_i-27.jpg";
import c28 from "@/assets/carousel-images/c_i-28.JPG";
import c29 from "@/assets/carousel-images/c_i-29.jpg";
import c30 from "@/assets/carousel-images/c_i-30.JPG";
import c31 from "@/assets/carousel-images/c_i-31.jpg";
import c32 from "@/assets/carousel-images/c_i-32.JPG";
import c33 from "@/assets/carousel-images/c_i-33.jpg";
import c34 from "@/assets/carousel-images/c_i-34.JPG";
import c35 from "@/assets/carousel-images/c_i-35.jpg";
import c36 from "@/assets/carousel-images/c_i-36.JPG";
import c37 from "@/assets/carousel-images/c_i-37.jpg";
import c38 from "@/assets/carousel-images/c_i-38.JPG";

export const Carousel = () => {
  const topImages = [
    c7,
    c2,
    c15,
    c22,
    c1,
    c33,
    c12,
    c28,
    c5,
    c18,
    c31,
    c9,
    c26,
  ];

  const middleImages = [
    c4,
    c11,
    c20,
    c3,
    c8,
    c35,
    c6,
    c14,
    c21,
    c37,
    c10,
    c24,
    c30,
  ];

  const bottomImages = [
    c13,
    c17,
    c23,
    c36,
    c19,
    c29,
    c16,
    c25,
    c32,
    c38,
    c27,
    c34,
  ];

  return (
    <div>
      <CarouselItems images={topImages} speed={12} />
      <CarouselItems images={middleImages} reverse speed={13} />
      <CarouselItems images={bottomImages} speed={15} />
    </div>
  );
};
