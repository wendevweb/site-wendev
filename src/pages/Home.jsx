import React from "react";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
import Partenaires from "../components/Partenaires";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Intérêt d'un site internet avec quelques chiffres */}
      <Expertise />
      <Slider />
      <Partenaires />
    </div>
  );
};

export default Home;
