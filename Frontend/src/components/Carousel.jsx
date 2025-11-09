import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselBar = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden shadow-xl">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
      >
        <div>
          <img src="/img1.jpg" alt="Slide 1" />
          <p className="legend">Hackathon Teamwork</p>
        </div>
        <div>
          <img src="/img2.jpg" alt="Slide 2" />
          <p className="legend">Build Innovative Projects</p>
        </div>
        <div>
          <img src="/img3.jpg" alt="Slide 3" />
          <p className="legend">Compete & Learn</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBar;
