import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import Interest from "../components/Interest";
import OffresSite from "../components/OffreSite";
import projet1 from "../assets/projet1.webp";
import projet2 from "../assets/projet2.webp";
import projet4 from "../assets/projet4.webp";
import projet5 from "../assets/projet5.webp";
import projet6 from "../assets/projet6.webp";
import projet7 from '../assets/projet7.webp';
import projet8 from "../assets/projet8.webp";

const PageOffreSite = () => {
  return (
    <div className="font-quicksand flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre création de sites internet | WenDev</title>
        <link href="https://www.wendev.fr/OffreSite" />
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
                  Grâce à React, Next.js et Tailwindcss, deux technologies récentes,
                  personnalisables et fiables, je te propose un site moderne,
                  accessible et au coeur des tendances.
                  <br />
                  Une offre en no-code est également proposée pour les petits
                  budgets.
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
          <OffresSite />
        </section>
      </Fade>
      <Fade>
        <div className="lg:grid grid-cols-1">
          <h3 className="text-pink text-2xl text-center mb-4">
            Un petit mot sur mes tarifs...{" "}
          </h3>
          <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
            En tant que développeuse web indépendante/freelance, je détermine le
            prix de mes prestations en fonction du coût de mon travail, le temps
            passé à sa réalisation, je m’adapte à des demandes différentes et je
            me place face à la concurrence. C’est un travail de création ! Et
            tout travail mérite salaire, non ? 😉
          </p>
          <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
            En choisissant de travailler avec un développeur web, tu accèdes à
            un service personnalisé d’une flexibilité et d’une liberté qui n’ont
            rien à voir avec celles proposées par une agence ou une embauche
            d’un salarié.
          </p>
        </div>
      </Fade>
      <ButtonFonctionnement />
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
            (Hors Wordpress et boutiques en ligne/e-commerce)
          </p>
          <Link to="/Contact">
            <button
              className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              alt="Redirection vers la page du service de WenDev"
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
          <div className="lg:grid grid-cols-3 gap-4">

          <a
              href="https://melodieducoeur.com/"
              alt="Site web de Mélodie Ducoeur, auteure de romans"
              aria-label="Site web de Mélodie Ducoeur, auteure de romans"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Refonte du site de Mélodie Ducoeur, auteure</p>
                <img
                  src={projet8}
                  alt="Site web de Mélodie Ducoeur, auteure de romans"
                  aria-label="Site web de Mélodie Ducoeur, auteure de romans"
                />
              </div>{" "}
            </a>

            <a
              href="https://www.wendybaqueauteure.com/"
              alt="Site web de Wendy Baqué, auteure de romans"
              aria-label="Site web de Wendy Baqué, auteure de romans"
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
              href="https://www.cinosconsulting.com/"
              alt="Site web CINOS Consulting"
              aria-label="Site web CINOS Consulting"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>CINOS Consulting</p>
                <img
                  src={projet5}
                  alt="Site web CINOS Consulting"
                  aria-label="Site web CINOS Consulting"
                />
              </div>
            </a>

            <a
              href="https://www.lesnettoyeursdetombesreunis.fr/"
              alt="Site web des Nettoyeurs de Tombes Réunis"
              aria-label="Site web des Nettoyeurs de Tombes Réunis"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Les Nettoyeurs de Tombes Réunis</p>
                <img
                  src={projet6}
                  alt="Site web des Nettoyeurs de Tombes Réunis"
                  aria-label="Site web des Nettoyeurs de Tombes Réunis"
                />
              </div>
            </a>

            <a
              href="https://www.diagimmogeraldo.fr/"
              alt="Site web Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
              aria-label="Site web Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
              target="_blank"
              rel="noreferrer"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg dark:border-black dark:bg-black dark:text-white">
                <p>Diag Immo Geraldo</p>
                <img
                  src={projet7}
                  alt="Site web de Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
                  aria-label="Site web de Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
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
