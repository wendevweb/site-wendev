import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import OffrePortfolio from "../components/OffrePortfolio";
import Rdv from "../components/Rdv";
import projet4 from "../assets/projet4.webp";
import Kay from "../assets/Kay.webp";

const PageOffrePortfolio = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Portfolio | WenDev</title>
        <link href="https://www.wendev.fr/OffrePortfolio" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
                  Création de votre
                  <br />
                  <span className="text-pinkDark">portfolio</span>
                </h2>
                <p className="text-white sm:text-xl">
                  Que vous soyez artiste, artisan, commerçant, débutant ou
                  chevronné, <br />
                  avoir un portfolio est essentiel pour présenter vos projets,
                  mettre en valeur votre travail et qui vous êtes. <br />
                  C'est un peu comme un CV... mais en mieux ! 😉 <br />
                  Je vous livre une solution fonctionnelle, personnalisée, faite
                  pour en mettre plein les yeux à ceux qui le regarderont ! 🤩
                  <br/> Avec moi, finie la charge mentale de la mise à jour de votre portfolio ! Je m'occupe de tout de A à Z.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section
          aria-label="Grille tarifaire de création de portfolio."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffrePortfolio />
        </section>
      </Fade>
      <ButtonFonctionnement />
      <Fade>
        <section
          aria-label="Exemples de réalisations de portfolios, de Wendev."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Exemples de réalisations
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* PORTFOLIO DE NEORDART */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Kay}
                alt="Porfolio de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                aria-label="Porfolio de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.kaynorde.com/portfolio"
                  alt="Porfolio de de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                  aria-label="Porfolio de de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio de Neordart
                </a>{" "}
              </button>
            </div>
            {/* PORTFOLIO WENDY BAQUE */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={projet4}
                alt="Porfolio de Wendy Baqué, développeuse web front-end"
                aria-label="Porfolio de Wendy Baqué, développeuse web front-end"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://wendybaqueportfoliodev.wendev.fr/"
                  alt="Porfolio de Wendy Baqué, développeuse web front-end"
                  aria-label="Porfolio de Wendy Baqué, développeuse web front-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mon portfolio (mise à jour en cours)
                </a>{" "}
              </button>
            </div>
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
            avec un développeur web, vous accédez à un service personnalisé
            d’une flexibilité et d’une liberté qui n’ont rien à voir avec celles
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

export default PageOffrePortfolio;
