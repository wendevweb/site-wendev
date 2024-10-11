import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import AddIcon from "@mui/icons-material/Add";

import ButtonFonctionnement from "../components/ButtonFonctionnement";
import OffrePortfolio from "../components/OffrePortfolio";
import Rdv from "../components/Rdv";
// import projet4 from "../assets/projet4.webp";
import Neordart from "../assets/Neordart-removebg-preview.png";
import BettySeo from "../components/BettySeo";

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
                  <br /> Avec moi, finie la charge mentale de la mise à jour de
                  votre portfolio ! Je m'occupe de tout de A à Z.
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
                Maquette et prototype :{" "}
                <span className="font-bold">100€/page</span>
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
        <BettySeo />
      </Fade>
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
                src={Neordart}
                alt="Porfolio de Neordart, graphiste et illustratrice, qui a choisi l'offre de création de portfolio No Code."
                aria-label="Porfolio de Neordart, graphiste et illustratrice, qui a choisi l'offre de création de portfolio No Code."
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.neordart.com/"
                  alt="Porfolio de de Neordart, graphiste et illustratrice, qui a choisi l'offre de création de portfolio No Code."
                  aria-label="Porfolio de de Neordart, graphiste et illustratrice, qui a choisi l'offre de création de portfolio No Code."
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio de Neordart
                </a>{" "}
              </button>
            </div>
            {/* PORTFOLIO WENDY BAQUE
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

export default PageOffrePortfolio;
