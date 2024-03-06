import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Techno from "../components/Techno";
import wendev3 from "../assets/wendev-3.webp";
import malt from "../assets/logomalt.webp";
import comet from "../assets/logocomet.webp";
import fiverr from "../assets/logofiverr.webp";

const Entreprise = () => {
  return (
    <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Entreprise | WenDev</title>
        <link href="https://www.wendev.fr/Entreprise" />
      </Helmet>
      <section>
        <h2 className="font-quicksand text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-pinkDark">
          Besoin d'une développeuse web front-end freelance ?
        </h2>
      </section>
      <Fade>
        <section className="lg:flex justify-evenly">
            <div>
              <button className="mt-10 mb-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
              <button className="mt-10 mb-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
              <button className="mt-10 mb-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
        </section>
      </Fade>
      <div className="mt-10 flex h-96 justify-center">
          <img src={wendev3} alt="" />
        </div>
      <Techno />
    </div>
  );
};

export default Entreprise;
