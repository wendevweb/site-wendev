import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Slider from "../components/Slider";
import Techno from "../components/Techno";
import wendev3 from "../assets/wendev-3.webp";
import malt from "../assets/logomalt.webp";
import comet from "../assets/logocomet.webp";
import fiverr from "../assets/logofiverr.webp";

const Entreprise = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Entreprise | WenDev</title>
        <link href="https://www.wendev.fr/Entreprise" />
      </Helmet>
      <section className="m-4 p-4">
        <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
          Un projet ? Une mission ? <br /> Besoin d'un dev freelance ou
          indépendant ?
        </h2>
        <div className="flex h-96 justify-center">
          <img src={wendev3} alt="" />
        </div>
      </section>
      <Fade>
        <section>
          <div className="lg:flex justify-evenly m-10">
            <div>
              <button className="mb-6 mt-6 w-56 bg-real shadow-lg font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.malt.fr/profile/wendybaque"
                  alt="Redirection vers le profil Malt de WenDev"
                  aria-label="Redirection vers le profil Malt de WenDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir mon profil sur Malt
                </a>
              </button>
              <img
                src={malt}
                alt="Logo de Malt"
                aria-label="Logo de Malt"
                className="w-56"
              />
            </div>
            <div>
              <button className="mb-6 mt-6 w-56 bg-real shadow-lg font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://fr.fiverr.com/wendev?public_mode=true"
                  alt="Redirection vers le profil Fiverr de WenDev"
                  aria-label="Redirection vers le profil Fiverr de WenDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir mon profil sur Fiverr
                </a>
              </button>
              <img
                src={fiverr}
                alt="Logo de Fiverr"
                aria-label="Logo de Fiverr"
                className="w-56"
              />
            </div>
            <div>
              <button className="mb-6 mt-6 w-56 bg-real shadow-lg font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://app.comet.co/freelancer/profile/QBeXG18dyK?readOnly=false"
                  alt="Redirection vers le profil Comet de WenDev"
                  aria-label="Redirection vers le profil Comet de WenDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir mon profil sur Comet
                </a>
              </button>
              <img
                src={comet}
                alt="Logo de Comet"
                aria-label="Logo de Comet"
                className="w-56"
              />
            </div>
          </div>
        </section>
      </Fade>
      <Techno />
      <Slider />
    </div>
  );
};

export default Entreprise;
