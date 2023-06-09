import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const datas = [
    {
      id: 1,
      title:"Farahd",
      image:
        "https://i.goopics.net/z5e4k5.png",
    },
    {
      id: 2,
      title:"Andraroc",
      image:
        "https://i.goopics.net/ncpc8d.png",
    },
    {
      id: 3,
      title:"Cinos",
      image:
        "https://i.goopics.net/d4yxtp.png",
    },
    {
      id: 4,
      title:"Antiigone",
      image:
        "https://i.goopics.net/t8a7nb.png",
    },
    // {
    //   id: 3,
    //   title:"OMedia",
    //   image:
    //     "https://www.hebergeur-image.com/upload/88.174.47.6-63edfeaf2e19f.png",
    // },
    {
      id: 5,
      title:"Nelixair",
      image:
        "https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/static/media/newlogo.47a17871978e339cd786.png",
    },
    {
      id: 6,
      title:"Fedmind",
      image:
        "https://www.fedmind.com/sanacup/uploads/2022/10/Logo_Fedmind_format_carre_baseline.png",
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
