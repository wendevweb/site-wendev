import React from "react";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
import Partenaires from "../components/Partenaires";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Interest from "../components/Interest";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <Fade>
        <Interest />
      </Fade>
      <Fade>
        <Expertise />
      </Fade>
      <Fade>
        <Slider />
      </Fade>
      <Fade>
        <Partenaires />
      </Fade>
    </div>
  );
};

export default Home;
