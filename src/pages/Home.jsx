import React from "react";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
// import Partenaires from "../components/Partenaires";
import Slider from "../components/Slider";
import Techno from "../components/Techno";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
// import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil | WenDev</title>
        <link href="https://www.wendev.fr" />
      </Helmet>
      <Hero />
      <Fade>
        <Expertise />
      </Fade>
      <Fade>
        <Techno />
      </Fade>
      <Fade>
        <Slider />
      </Fade>
      {/* <Fade>
        <Partenaires />
      </Fade> */}
      {/* <Fade>
        <Testimonials />
      </Fade> */}
    </div>
  );
};

export default Home;
