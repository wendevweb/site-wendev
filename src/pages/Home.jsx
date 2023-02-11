import React from "react";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
import Partenaires from "../components/Partenaires";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      {/* Intérêt d'un site internet avec quelques chiffres */}
      <Expertise />
      <Slider />
      <Partenaires />
    </div>
  );
};

export default Home;
