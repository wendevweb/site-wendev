import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import maquetteMood from "../assets/maquette-mood.webp";
import prototypeMood from "../assets/prototype-mood.webp";
import fedmind from "../assets/refonte-site-fedmind.webp";
import apside from "../assets/maquette-apside.webp";
import prototypeMbn from "../assets/prototype-mbn.webp";
import maquetteMbn from "../assets/maquette-mbn.webp";
import figma from "../assets/figma.webp";
import OffreMaquette from "../components/OffreMaquette";
import Rdv from "../components/Rdv";

const PageOffreMaquette = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Maquette et prototype | WenDev</title>
        <link href="https://www.wendev.fr/OffreMaquette" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            height: "600px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Création et mise en forme de
                  <br />
                  <strong className="text-pinkDark">
                    prototypes et maquettes pour le web
                  </strong>
                </h2>
                <p className="tracking-tight text-white sm:text-xl">
                  Une maquette est un bon moyen d'avoir un aperçu visuel de
                  votre futur <strong>site internet</strong> ou application, <br /> avant de
                  commencer à créer votre site ou coder. Vous désirez savoir ce
                  que donnera le site web de vos rêves ? <br /> Alors venez vite
                  me demander une maquette pour donner vie à vos envies !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fade>
        <section
          aria-label="Grille tarifaire de l'offre de création de maquettes et prototypes pour le web."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffreMaquette />
        </section>
      </Fade>
      <Fade>
        <section aria-label="Figma">
          <p className="tracking-tight text-center pb-6 text-xl">
            Je réalise tes maquettes et prototypes sur le logiciel{" "}
            <strong className="font-bold text-pinkDark">Figma</strong>.
          </p>
          <div className="flex justify-center">
            {" "}
            <img
              src={figma}
              alt="Figma"
              aria-label="Figma"
              className="w-52 p-4"
            />
          </div>
        </section>
      </Fade>
      <ButtonFonctionnement />

      <Fade>
        <section
          aria-label="Exemples de réalisations de maquettes et prototypes pour le web, de Wendev."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Exemples de réalisations
          </h3>
          <div className="lg:grid grid-cols-3 gap-4">
            <figure style={{ display: "table" }}>
              <img
                src={prototypeMood}
                alt="Prototype de l'application Mood"
                aria-label="Prototype de l'application Mood"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Prototype de l'application Mood
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={maquetteMood}
                alt="Maquette de Mood"
                aria-label="Maquette de Mood"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de Mood
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={fedmind}
                alt="Maquette de refonte du site internet de Fedmind"
                aria-label="Maquette de refonte du site internet de Fedmind"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de refonte du site internet de Fedmind
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={prototypeMbn}
                alt="Prototype de Ma bibliothèque Numérique"
                aria-label="Prototype de Ma bibliothèque Numérique"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Prototype de Ma bibliothèque Numérique
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={maquetteMbn}
                alt="Maquette de Ma Bibliothèque Numérique"
                aria-label="Maquette de Ma Bibliothèque Numérique"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de Ma Bibliothèque Numérique
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={apside}
                alt="Maquette de dashboard Hackathon Apside"
                aria-label="Maquette de dashboard Hackathon Apside"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de dashboard Hackathon Apside
              </figcaption>
            </figure>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Un petit mot sur mes tairfs"
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Un petit mot sur mes tarifs...{" "}
          </h3>
          <p className="text-xl tracking-tight">
            En tant que développeuse web indépendante/freelance, je détermine le
            prix de mes prestations en fonction du coût de mon travail, le temps
            passé à sa réalisation, je m’adapte à des demandes différentes et je
            me place face à la concurrence. C’est un travail de création ! Et
            tout travail mérite salaire, non ? 😉 En choisissant de travailler
            avec un développeur web, vous accédez à un service personnalisé d’une
            flexibilité et d’une liberté qui n’ont rien à voir avec celles
            proposées par une agence ou une embauche d’un salarié.
          </p>
        </section>
      </Fade>
      <div className="grid justify-items-center">
        <Rdv />
      </div>
    </div>
  );
};

export default PageOffreMaquette;
