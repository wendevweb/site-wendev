import React from "react";
import "./slider.scss";
import nelixair from "../assets/logo_full_assoc.webp";
import kodework from "../assets/kodeworklogo.webp";
import rookies from "../assets/rookies.webp";
import antiigone from "../assets/antiigone.webp";

const Slider = () => {
  return (
    <div className="slider-body">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Ils me font confiance
      </h3>
      <div className="slider">
        <div className="slide-track p-4">
          <div className="slide">
            <img
              src={nelixair}
              height="200"
              width="250"
              alt="Association Nelixair"
            />
          </div>
          <div className="slide p-4">
            <img
              src={kodework}
              height="100"
              width="250"
              alt="Plateforme KodeWork"
            />
          </div>
          <div className="slide p-4">
            <img
              src={rookies}
              height="100"
              width="250"
              alt="Plateforme Rookies"
            />
          </div>
          <div className="slide p-4">
            <img
              src={antiigone}
              height="50"
              width="100"
              alt="Wendy Baqué, auteure de romans"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
