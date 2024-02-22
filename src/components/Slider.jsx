import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const datas = [
    {
      id: 1,
      title:"Elisabet",
      image:
        "https://i.goopics.net/iv6y9o.png",
    },
    // {
    //   id: 1,
    //   title:"Kay Norde,
    //   image:
    //     "https://i.goopics.net/ags7bq.png",
    // },
    {
      id: 1,
      title:"Franck",
      image:
        "https://i.goopics.net/ags7bq.png",
    },
    // {
    //   id: 2,
    //   title:"Elisa",
    //   image:
    //     "https://i.goopics.net/389bgt.png",
    // },
    {
      id: 3,
      title:"Farahd",
      image:
        "https://i.goopics.net/z5e4k5.png",
    },
    // {
    //   id:4,
    //   title:"Andraroc",
    //   image:
    //     "https://i.goopics.net/ncpc8d.png",
    // },
    {
      id: 5,
      title:"Cinos",
      image:
        "https://i.goopics.net/d4yxtp.png",
    },
    {
      id: 6,
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
      id: 7,
      title:"Nelixair",
      image:
        "https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/static/media/newlogo.47a17871978e339cd786.png",
    },
    {
      id: 8,
      title:"Fedmind",
      image:
        "https://i.goopics.net/4at2g4.png",
    },
    {
      id: 9,
      title:"Nettoyeurs",
      image:
        "https://i.goopics.net/luvrq3.png",
    },

    // {
    //   id: 10,
    //   title:"Mélodie Ducoeur",
    //   image:
    //     "https://www.melodieducoeur.com/gallery_gen/d7110ef61f2a93a3d1da07fbfbb78407_692x832_fit.jpg?ts=1702025445",
    // },

    {
      id: 11,
      title:"Plumes de Coeur éditions",
      image:
        "https://i.goopics.net/14wkyn.png",
    },

    {
      id: 12,
      title:"Diag Immo Geraldo",
      image:
        "https://i.goopics.net/tuf0by.jpg",
    },

    {
      id: 12,
      title:"Les Gardiennes du Souvenir",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=136,h=136,fit=crop/AGB3XwRQJ0HQoNp1/logo_lgds-removebg-preview-m2WlV7QOrVce5oe7.png",
    },
    {
      id: 13,
      title:"Les Gîtes des Guissinnières",
      image:
        "https://i.goopics.net/s2oa0a.png",
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
