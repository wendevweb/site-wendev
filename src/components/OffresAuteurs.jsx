import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import ButtonFonctionnement from "./ButtonFonctionnement";

// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffresAuteurs = () => {
  return (
    <section
      className="bg-white dark:bg-black font-quicksand"
      aria-label="Offre de services spécialisée pour les auteurs de livres"
    >
      <div className="py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pinkDark dark:text-white">
            Mon offre spéciale auteurs
          </h2>
        </div>
        <Fade>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* OFFRE 1 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">60€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 en-tête/header</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section "A propos"</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section par livre paru</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 pied-de-page/footer avec réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 page de mentions légales aux normes RGPD </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif{" "}
                    <span className="font-semibold">
                      (adapté aux différentes tailles d'écran)
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Modifications : ajout d'une nouvelle page pour la sortie d'un nouveau livre, ajout d'un nouvel événement, ajout d'une section : 5€/modification.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de menu de navigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de formulaire de contact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Paramètres minimums de SEO</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément. Sinon, url non personnalisable, par défaut.
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">3 jours</span>
                  </span>
                </li> */}
              </ul>
              <Link to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-lg text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 2 */}
            <div className="bg-purpleDark text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center rounded-md shadow-lg dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl text-pink font-semibold">Standard</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="text-pink mr-2 text-5xl font-extrabold">90€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 en-tête/header</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section "A propos"</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section par livre paru</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    1 section au choix parmi :{" "}
                    <span className="font-semibold">
                      Avis des lecteurs, chroniques, vidéo, extraits du livre, actualité, événements littéraires{" "}
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 pied-de-page/footer avec réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 page de mentions légales aux normes RGPD </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif{" "}
                    <span className="font-semibold">
                      (adapté aux différentes tailles d'écran)
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Animations au défilement, sur les boutons et les images
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Modifications : ajout d'une nouvelle page pour la sortie d'un nouveau livre, ajout d'un nouvel événement, ajout d'une section : 5€/modification.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de menu de navigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de formulaire de contact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Paramètres minimums de SEO</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément. Sinon, url non personnalisable, par défaut.
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">5 jours</span>
                  </span>
                </li> */}
              </ul>
              <Link to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-lg text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 3 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">180€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 en-tête/header</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section + 1 page "A propos"</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 section + 1 page par livre paru</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de sections et pages illimité parmi :{" "}
                    <span className="font-semibold">
                      Avis des lecteurs, chroniques, vidéo, extraits du livre, actualité, événements littéraires{" "}
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 page de contact avec formulaire et redirection automatique des messages sur votre boîte mail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 pied-de-page/footer avec réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Menu de navigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>1 page de mentions légales aux normes RGPD </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif{" "}
                    <span className="font-semibold">
                      (adapté aux différentes tailles d'écran)
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Animations au défilement, sur les boutons et les images
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Modifications illimitées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant permanente sur mon site</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>+200 Mockups gratuits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Optimisation des paramètres de SEO</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément. Sinon, url non personnalisable, par défaut.
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">7 jours</span>
                  </span>
                </li> */}
              </ul>
              <Link to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-lg text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <ButtonFonctionnement />
    </section>
  );
};

export default OffresAuteurs;
