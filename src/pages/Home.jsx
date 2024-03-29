import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Expertise from "../components/Expertise";
import Hero2 from "../components/Hero2";
import Partenaires from "../components/Partenaires";
import Techno from "../components/Techno";
import Testimonials from "../components/Testimonials";
import Networks from "../components/Networks";
import Freebie from "../components/Freebie";

const Home = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil | WenDev</title>
        <link href="https://wendev.fr" />
      </Helmet>
      <Hero2 />
      <Fade>
        <Expertise />
      </Fade>
      <Fade>
        <Freebie />
      </Fade>
      <Fade>
        <Testimonials />
      </Fade>
      <Networks />
      <Fade>
        <Techno />
      </Fade>
      <Fade>
        <Partenaires />
      </Fade>
    </div>
  );
};

export default Home;
