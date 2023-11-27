/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { ArrowBack, ArrowForward } from "./button";
import Link from "next/link";
import Carousel from "./carousel";

const ArtCategory = ({ category, isColorBgLight }) => {
  const carouselRef = useRef(null);
  const textColor = isColorBgLight ? "text-base-100" : "text-neutral";
  const buttonColor = isColorBgLight ? "btn-accent" : "btn-neutral";

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="ml-20">
      <Link href="">
        <p className="text-xl text-base-200 underline underline-offset-8 mb-8">
          {category}
        </p>
      </Link>
      <Carousel carouselRef={carouselRef} textColor={textColor} />
      <div className="mt-2 mb-8">
        <div className="flex flex-row-reverse">
          <div onClick={() => scrollCarousel("right")}>
            <ArrowForward buttonColor={buttonColor} />
          </div>
          <div onClick={() => scrollCarousel("left")}>
            <ArrowBack buttonColor={buttonColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCategory;
