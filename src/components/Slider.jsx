import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const datas = [
    {
      id: 1,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edfe7890020.png",
    },
    {
      id: 2,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edfeaf2e19f.png",
    },
    {
      id: 3,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edf791be30f.png",
    },
    {
      id: 4,
      image:
        "https://www.fedmind.com/sanacup/uploads/2022/10/Logo_Fedmind_format_carre_baseline.png",
    },
    {
      id: 5,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edf83864750.png",
    },
    {
      id: 6,
      image:
        "https://www.hebergeur-image.com/upload/88.174.47.6-63edf1d36caca.png",
    },
  ];
  return (
    <div className="lg:m-10 grid grid-cols-1 justify-items-center content-center	">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Ils me font confiance
      </h3>
      <div className="lg:w-96 grid justify-items-center">
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
            <div key={slide.id} aria-label="string" className="bg-light flex">
              <img src={slide.image} alt="" className="carousel-img" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Slider;
