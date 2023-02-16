import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const datas = [
    {
      id: 1,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63e6579c17715.png",
    },
    {
      id: 2,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63e657c94211a.png",
    },
    {
      id: 3,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edf1d36caca.png",
    },
  ];
  return (
    <div className="lg:m-10">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Ils me font confiance
      </h3>

      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        thumbWidth={120}
        showIndicators={true}
        showStatus={false}
        autoFocus={false}
        dynamicHeight={true}
      >
        {datas.map((slide) => (
          <div key={slide.id} aria-label="string" className="bg-light">
            <img src={slide.image} alt="" className="carousel-img " />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
