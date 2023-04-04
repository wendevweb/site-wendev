import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Slider from "../components/Slider";
import Techno from "../components/Techno";
import wendev3 from '../assets/wendev-3.webp';

const Entreprise = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Entreprise | WenDev</title>
        <link href="https://wendev.fr/Entreprise" />
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
            <button className="mb-6 mt-6 w-56 border border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
              <a
                href="/"
                alt="Redirection vers le profil de WenDev"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon profil sur Malt
              </a>
            </button>
            <button className="mb-6 mt-6 w-56 border border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
              <a
                href="/"
                alt="Redirection vers le profil de WenDev"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon profil sur Fiverr
              </a>
            </button>
            <button className="mb-6 mt-6 w-56 border border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
              <a
                href="/"
                alt="Redirection vers le profil de WenDev"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon profil sur Comet
              </a>
            </button>
            
          </div>
        </section>
      </Fade>
      <Techno />
      <Slider />
    </div>
  );
};

export default Entreprise;
