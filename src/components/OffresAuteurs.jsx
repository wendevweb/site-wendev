import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffresAuteurs = () => {
  return (
    <section
      id="offreauteur"
      aria-label="Offre de services spécialisée pour les auteurs de livres"
    >
      <Fade>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
          {/* OFFRE 1 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">
              Standard / landing page
            </h3>
            <h4>L'offre idéale pour te lancer.</h4>
            <div className="flex justify-center items-baseline my-8">
              <span className="text-pinkDark mr-2 text-5xl font-extrabold">
                99€
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3 font-bold">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Nombre de pages : 1</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Personnalisation avec votre contenu (à fournir)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section "Biographie"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section par livre paru ou saga</span>
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
                  Site réactif (adapté aux différentes tailles d'écran)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Gestion de l'accessibilité (Site web accessible aux personnes
                  atteintes de handicap)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de la sécurité du site</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  <span className="font-bold">Modifications : </span>
                  5€/modification
                </span>
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
                <span>Paramètres minimums de référencement (SEO)</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas d'animations</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas de mockups</span>
              </li>
            </ul>
            <Link
              to="/Contact"
              className="mt-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
            >
              C'est parti !
            </Link>
          </div>
          {/* OFFRE 2 */}
          <div className="bg-gradient-to-r from-purple  to-pinkDark dark:bg-black text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center rounded-md shadow-lg xl:p-8">
            <h3 className="mb-4 text-2xl text-real font-semibold">Premium</h3>
            <h4>L'offre préférée des auteurs !</h4>
            <div className="flex justify-center items-baseline my-8">
              <span className="text-realmr-2 text-5xl font-extrabold">
                198€
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3 font-bold">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Nombre de pages : 1-5</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Personnalisation avec votre contenu (à fournir)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page "Biographie"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page par livre paru ou saga</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  1 page de contact avec formulaire et redirection automatique
                  des messages sur votre boîte mail
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
                  Site réactif (adapté aux différentes tailles d'écran)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Gestion de l'accessibilité (Site web accessible aux personnes
                  atteintes de handicap)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de la sécurité du site</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                <span className="font-bold">Modifications :</span> 5€/modification
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Menu de navigation</span>
              </li>

              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Optimisation des paramètres de référencement (SEO)</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas d'animations</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas de mockups</span>
              </li>
            </ul>
            <Link
              to="/Contact"
              className="mt-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
            >
              C'est parti !
            </Link>
          </div>
          {/* OFFRE 3 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">Ultra +</h3>
            <h4>L'offre la plus complète.</h4>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-pinkDark">
                250€
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3 font-bold">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Nombre de pages : 5-8</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Personnalisation avec votre contenu (à fournir)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page "Biographie"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page par livre paru ou saga</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  1 page de contact avec formulaire et redirection automatique
                  des messages sur votre boîte mail
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
                  Site réactif (adapté aux différentes tailles d'écran)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Gestion de l'accessibilité (Site web accessible aux personnes
                  atteintes de handicap)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de la sécurité du site</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span className="font-bold">Modifications illimitées</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Menu de navigation</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Optimisation des paramètres de référencement (SEO)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Animations au défilement, sur les boutons et les images
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mockups personnalisés avec vos livres</span>
              </li>
              
            </ul>
            <Link
              to="/Contact"
              className="mt-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
            >
              C'est parti !
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default OffresAuteurs;
