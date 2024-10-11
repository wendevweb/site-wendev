import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import freebie from "../assets/Ebook-auteurs.webp";
import CheckIcon from "@mui/icons-material/Check";

const Freebie = () => {
  return (
    <section
      aria-label="Télécharge ton livre blanc gratuit pour créer ton site web en toute autonomie"
      className="bg-gradient-to-r from-purple via-pinkDark to-pink dark:bg-black font-quicksand"
    id="freebie"
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
        <Fade>
          <div className="grid lg:grid-cols-2 gap-24 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-4xl mt-6 mb-6">
                Vous êtes <strong>auteur de livres</strong> et vous souhaitez réaliser votre site
                web en toute autonomie ?
              </h3>
              <p className="text-real text-xl mt-6 mb-6 tracking-tight">
                C'est possible, avec mon e-book gratuit conçu rien que pour VOUS
                !
                <br />
                Dedans, vous trouverez :
              </p>
              <ul className=" text-real text-xl mt-6 mb-6 tracking-tight">
                <li>
                  {" "}
                  <CheckIcon /> Les étapes à suivre pour assurer votre présence
                  en ligne
                </li>
                <li>
                  <CheckIcon /> Des ressources gratuites pour créer votre site
                  web avec plus de facilité
                </li>
                <li>
                  <CheckIcon /> Comment bien construire ton site en suivant les
                  bonnes pratiques du secteur
                </li>
                <li>
                  <CheckIcon />
                  Des explications des choses un peu techniques auxquelles serez
                  confronté.e lors de la création de votre site web
                </li>
                <li>
                  <CheckIcon /> Des checklists pour être sûr de ne rien oublier
                </li>
                <li>
                  <CheckIcon /> Des astuces de pro pour avoir un site qui
                  déchiiire !
                </li>
                <li>
                  <CheckIcon /> Et bien plus encore...
                </li>
              </ul>

              <button
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                alt="Redirection vers la page de téléchargement de l'e-book"
              >
                <Link
                  to="https://wendevweb.systeme.io/ebook"
                  target="_blank"
                  rel="noreferrer"
                  alt="Redirection vers la page de téléchargement de l'e-book"
                >
                  Je le veux tout de suite ! 🤩
                </Link>
              </button>
            </div>
            <div>
              <img
                src={freebie}
                alt="Le livre blanc du site internet d'auteur de livres, par Wendev."
                className="h-96"
              />
              <p className="text-real font-bold text-xl mt-6 mb-6 tracking-tight">
                Plus de 300 téléchargements <br /> et autant d'<strong>auteurs </strong>conquis !
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Freebie;
