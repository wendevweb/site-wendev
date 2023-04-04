import React from "react";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
// import Partenaires from "../components/Partenaires";
import Slider from "../components/Slider";
import Techno from "../components/Techno";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil | WenDev</title>
        <link href="https://wendev.fr" />
      </Helmet>
      <Hero />
      <div className="flex justify-center">
        <Link to="/Fonctionnement">
          <button className="m-6 border border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            Comment se déroule un projet client avec WenDev ?
          </button>
        </Link>
      </div>
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
