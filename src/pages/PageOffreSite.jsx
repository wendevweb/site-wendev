import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
// import Interest from "../components/Interest";
import OffresSite from "../components/OffreSite";
import Rdv from "../components/Rdv";
import projet1 from "../assets/projet1.webp";
import projet5 from "../assets/projet5.webp";
import projet6 from "../assets/projet6.webp";
import projet7 from "../assets/projet7.webp";
import projet8 from "../assets/projet8.webp";
import projet9 from "../assets/projet9.webp";
import projet10 from "../assets/projet10.webp";
// import projet11 from "../assets/projet11.webp";
import projet12 from "../assets/Waltzer.webp";
import projet13 from "../assets/Ribera.webp";

const PageOffreSite = () => {
  return (
    <div className="font-quicksand">
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
                  Création de
                  <br />
                  <strong className="text-pinkDark">Sites internet</strong>
                </h2>
                <p className="text-white sm:text-xl">
                  Avoir son propre <strong>site internet</strong> comporte bien
                  des avantages. C'est un réel atout pour votre marque ou votre
                  entreprise !
                  <br />
                  Grâce à React, Next.js et Tailwindcss, des technologies
                  récentes, personnalisables et fiables, jevous propose un site
                  moderne, accessible et au coeur des tendances.
                  <br />
                  Une offre en no-code est également proposée pour les petits
                  budgets.
                  <br /> Découvrez mon offre de création de site web adaptée à
                  vos besoins numériques. <br />
                  Avec moi, finie la charge mentale de la mise à jour de votre
                  site ! Je m'occupe de tout de A à Z.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Fade>
        <section aria-label="Intérêts d'avoir un site internet - section d'informations">
          <Interest />
        </section>
      </Fade> */}
      <Fade>
        <section
          aria-label="Grille tarifaire de création de sites internet."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffresSite />
        </section>
      </Fade>
      <Fade>
        <section
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
          aria-label="Les options"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Et en option pour chaque offre :
          </h3>
          <ul className="mb-8 space-y-4 text-left">
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Nom de domaine personnalisé et hébergement pour 1 an,
                renouvelable : <span className="font-bold">20€/an</span>, en
                supplément. Sinon, url non personnalisable, par défaut.
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                paramétrage et redirection d'un nom de domaine déjà acheté chez
                un hébergeur (OVH, Hostinger, O2Switch...) :
                <span className="font-bold"> 20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Page supplémentaire : <span className="font-bold">20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Recherche d'éléments graphiques (polices, visuels, images libres
                de droit) : <span className="font-bold"> 20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Maquette et prototype : <span className="font-bold">100€/page</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Site en plusieurs langues (textes traduits à fournir){" "}
                <span className="font-bold"> : 20€/langue</span>
              </span>
            </li>
          </ul>
        </section>
      </Fade>
      <ButtonFonctionnement />
      <Fade>
        <section
          aria-label="Refonte et mise à jour de site existant"
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Besoin d'une refonte/mise à jour de votre site ?
          </h3>
          <p className="text-xl tracking-tight">
            Besoin d'un petit coup de neuf sur votre vitrine en ligne ? Avec
            moi, votre site fera peau neuve. <br />
            Venez en discuter avec moi pour que je vous propose un service sur
            mesure en fonction de ce qui existe déjà pour votre site ! <br />
            (Hors boutiques en ligne/e-commerce).
            <br />
            Vous avez un site WordPress et vous souhaitez une refonte/mise à
            jour ? Je ne travaille pas avec WordPress, alors l'audit de votre
            site peut être la solution optimale pour que je puisse vous aider !
          </p>
          <section className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
            <Link to="/Contact">
              <button
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                alt="Redirection vers la page de contact de WenDev"
              >
                Contact
              </button>
            </Link>
            <Link to="/OffreAudit">
              <button
                className="mt-10 lg:ml-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                alt="Redirection vers la page du service de WenDev"
              >
                Je veux un audit de mon site
              </button>
            </Link>
          </section>
        </section>
      </Fade>
      
      <Fade>
        <section className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Quelques uns de mes projets...
          </h3>
          <div className="lg:grid grid-cols-3 gap-4">
            {/* REFONTE VERONIQUE RIBERA */}
          <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg">
              <img
                src={projet13}
                alt="Refonte du site web de Véronique Ribera, auteure et correctrice."
                aria-label="Refonte du site web de Véronique Ribera, auteure et correctrice."
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.veronique-ribera.com/"
                  alt="Refonte du site web de Véronique Ribera, auteure et correctrice."
                  aria-label="Refonte du site web de Véronique Ribera, auteure et correctrice."
                  target="_blank"
                  rel="noreferrer"
                >
                  Refonte du site de Véronique Ribera
                </a>
              </button>
            </div>
            {/* WALTZER TRADUCTION*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg">
              <img
                src={projet12}
                alt="Site web de Rose-Marie Waltzer, traductrice indépendante"
                aria-label="Site web de Rose-Marie Waltzer, traductrice indépendante"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.waltzerrm.com/"
                  alt="Site web de Rose-Marie Waltzer, traductrice indépendante"
                  aria-label="Site web de Rose-Marie Waltzer, traductrice indépendante"
                  target="_blank"
                  rel="noreferrer"
                >
                  Waltzer Traduction
                </a>
              </button>
            </div>
            {/* REFONTE GITES DES GUISSINNIERES */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet10}
                alt="Site web des Gîtes des Guissinnières, à Noyant-Village"
                aria-label="Site web des Gîtes des Guissinnières, à Noyant-Village"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.frenchholidaygites.co.uk/?lang=fr"
                  alt="Site web des Gîtes des Guissinnières, à Noyant-Villages."
                  aria-label="Site web des Gîtes des Guissinnières, à Noyant-Villages."
                  target="_blank"
                  rel="noreferrer"
                >
                  Refonte du site des Gîtes des Guissinnières (49)
                </a>{" "}
              </button>
            </div>
            {/* DIAG IMMO GERALDO */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              {" "}
              <img
                src={projet7}
                alt="Site web de Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
                aria-label="Site web de Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
              />{" "}
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.diagimmogeraldo.fr/"
                  alt="Site web Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
                  aria-label="Site web Diag Immo Geraldo, diagnostiqueur immobilier dans le Sud Touraine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Diag Immo Geraldo
                </a>{" "}
              </button>
            </div>
            {/* REFONTE MELODIE DUCOEUR AUTEURE */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg">
              <img
                src={projet8}
                alt="Site web de Mélodie Ducoeur, auteure de romans"
                aria-label="Site web de Mélodie Ducoeur, auteure de romans"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://melodieducoeur.com/"
                  alt="Site web de Mélodie Ducoeur, auteure de romans"
                  aria-label="Site web de Mélodie Ducoeur, auteure de romans"
                  target="_blank"
                  rel="noreferrer"
                >
                  Refonte du site de Mélodie Ducoeur, auteure
                </a>
              </button>
            </div>

            {/* REFONTE PLUMES DE COEUR */}
            {/* <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet11}
                alt="Site web des éditions Plumes de Coeur."
                aria-label="Site web des éditions Plumes de Coeur."
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.plumesdecoeur.com/"
                  alt="Site web des éditions Plumes de Coeur."
                  aria-label="Site web des éditions Plumes de Coeur."
                  target="_blank"
                  rel="noreferrer"
                >
                  Refonte du site des éditions Plumes de Coeur
                </a>{" "}
              </button>
            </div> */}
            {/* WENDY BAQUE AUTEURE */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet1}
                alt="Site web de Wendy Baqué, auteure de romans"
                aria-label="Site web de Wendy Baqué, auteure de romans"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.wendybaqueauteure.com/"
                  alt="Site web de Wendy Baqué, auteure de romans"
                  aria-label="Site web de Wendy Baqué, auteure de romans"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Wendy Baqué, auteure
                </a>
              </button>
            </div>

            {/* CINOS CONSULTING */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet5}
                alt="Site web CINOS Consulting"
                aria-label="Site web CINOS Consulting"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.cinosconsulting.com/"
                  alt="Site web CINOS Consulting"
                  aria-label="Site web CINOS Consulting"
                  target="_blank"
                  rel="noreferrer"
                >
                  CINOS Consulting
                </a>{" "}
              </button>
            </div>
            {/* LES NETTOYEURS DE TOMBES REUNIS */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              {" "}
              <img
                src={projet6}
                alt="Site web des Nettoyeurs de Tombes Réunis"
                aria-label="Site web des Nettoyeurs de Tombes Réunis"
              />{" "}
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.lesnettoyeursdetombesreunis.fr/"
                  alt="Site web des Nettoyeurs de Tombes Réunis"
                  aria-label="Site web des Nettoyeurs de Tombes Réunis"
                  target="_blank"
                  rel="noreferrer"
                >
                  Les Nettoyeurs de Tombes Réunis
                </a>
              </button>
            </div>

            {/* LES GARDIENNES DU SOUVENIR */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              {" "}
              <img
                src={projet9}
                alt="Site web des Gardiennes du Souvenir."
                aria-label="Site web des Gardiennes du Souvenir."
              />{" "}
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.lesgardiennesdusouvenir.fr/"
                  alt="Site web des Gardiennes du Souvenir"
                  aria-label="Site web des Gardiennes du Souvenir"
                  target="_blank"
                  rel="noreferrer"
                >
                  Les Gardiennes du Souvenir
                </a>{" "}
              </button>
            </div>
            {/* NELIXAIR */}
            {/* <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet2}
                alt="Site web de l'association Nelixair"
                aria-label="Site web de l'association Nelixair"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/"
                  alt="Site web de l'association Nelixair"
                  aria-label="Site web de l'association Nelixair"
                  target="_blank"
                  rel="noreferrer"
                >
                  Site web de l'association Nelixair
                </a>{" "}
              </button>
            </div> */}
          </div>
        </section>
      </Fade>
      <div className="grid justify-items-center">
        <Rdv />
      </div>
    </div>
  );
};

export default PageOffreSite;
