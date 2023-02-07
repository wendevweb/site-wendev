import React from "react";
import Hero from "../components/Hero";
import PageOffresAuteurs from "../components/OffresAuteurs";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <PageOffresAuteurs />
      <Slider />
    </div>
  );
};

export default Home;
