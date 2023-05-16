import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Interest from "../components/Interest";
import projet1 from "../assets/projet1.webp";
import projet2 from "../assets/projet2.webp";
import projet3 from "../assets/projet3.webp";
import projet4 from "../assets/projet4.webp";

const PageOffreSite = () => {
  return (
    <div className="font-quicksand flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre création de sites internet | WenDev</title>
        <link href="https://wendev.fr/OffreSite" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Création de
                  <br />
                  <strong className="text-pink">Sites internet</strong>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Avoir son propre site internet comporte bien des avantages.
                  C'est un réel atout pour ta marque ou ton entreprise !
                  <br />
                  Grâce à React et Tailwindcss, deux technologies récentes,
                  personnalisables et fiables, je te propose un site moderne,
                  accessible et au coeur des tendances.
                  <br /> Découvre mon offre de création de site web adaptée à
                  tes besoins numériques. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section aria-label="Intérêts d'avoir un site internet - section d'informations">
          <Interest />
        </section>
      </Fade>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <p className="text-center p-6">A venir... Stay tuned !😎</p>
        </section>
      </Fade>
      <div className="flex justify-center">
        <Link to="/Fonctionnement">
          <button className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            Comment se déroule un projet client avec WenDev ?
          </button>
        </Link>
      </div>
      <Fade>
        <section className="grid justify-items-center lg:m-10">
          <h3 className="text-pink text-2xl text-center">
            Besoin d'une refonte de ton site ?
          </h3>
          <p className="text-center p-6">
            Besoin d'un petit coup de neuf sur ta vitrine en ligne ? Avec moi,
            ton site fera peau neuve. <br />
            Viens en discuter avec moi pour que je te propose un service sur
            mesure en fonction de ce qui existe déjà pour ton site ! <br />
            (Hors Wordpress)
          </p>
          <Link to="/Contact">
            <button
              className="border border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
              alt="Redirection vers la page du service de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </button>
          </Link>
        </section>
      </Fade>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center pb-6 ">
            Quelques uns de mes projets...
          </h3>
          <div className="lg:flex justify-around text-center ">
            <a
              href="https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/"
              alt="Site web de l'association Nelixair"
              aria-label="Site web de l'association Nelixair"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Site de Wendy Baqué, auteure</p>
                <img
                  src={projet1}
                  alt="Site web de Wendy Baqué, auteure de romans"
                  aria-label="Site web de Wendy Baqué, auteure de romans"
                />
              </div>{" "}
            </a>
            <a
              href="https://wendybaqueportfoliodev.wendev.fr/"
              alt="Porfolio de Wendy Baqué, développeuse web front-end"
              aria-label="Porfolio de Wendy Baqué, développeuse web front-end"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Mon portfolio</p>
                <img
                  src={projet4}
                  alt="Porfolio de Wendy Baqué, développeuse web front-end"
                  aria-label="Porfolio de Wendy Baqué, développeuse web front-end"
                />
              </div>
            </a>
            <a
              href="https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/"
              alt="Site web de l'association Nelixair"
              aria-label="Site web de l'association Nelixair"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Site web de l'association Nelixair</p>
                <img
                  src={projet2}
                  alt="Site web de l'association Nelixair"
                  aria-label="Site web de l'association Nelixair"
                />
              </div>
            </a>
            <a
              href="https://happy-frontend-components.vercel.app/"
              alt="Site web Happy Front-end components"
              aria-label="Site web Happy Front-end components"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Happy Front-end components</p>
                <img
                  src={projet3}
                  alt="Site web Happy Front-end components"
                  aria-label="Site web Happy Front-end components"
                />
              </div>
            </a>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreSite;
