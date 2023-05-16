import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffrePortfolio = () => {
  return (
    <section
      className="bg-white dark:bg-black font-quicksand"
      aria-label="Offre de services de création et de refonte de site web"
    >
      <div className="py-8 px-4 lg:py-16 lg:px-6">
        <Fade>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* OFFRE 1 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Portfolio no-code</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">250€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton branding (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">1</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Formulaire de contact avec redirection automatique des
                    messages vers ta boîte mail
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Logo des réseaux sociaux avec redirection </span>
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
                  <span>Mise en place des paramêtres SEO de base</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Page d'erreur 404 avec redirection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Modifications : 1 à 3 (si +, 5€ par modification)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de code source</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas d'hébergement du site</span>
                </li>

                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>
                    Pas de nom de domaine (url non personnalisable) ou +12€/an
                    pour la gestion de l'hébergement et du nom de domaine
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">3 jours</span>
                  </span>
                </li>
              </ul>
              <Link
                to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 2 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">300€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton branding (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">1 à 5</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>
                    Formulaire de contact avec redirection automatique des
                    messages vers ta boîte mail
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Logo des réseaux sociaux avec redirection </span>
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
                  <ClearIcon style={{ color: "red" }} />
                  <span>Mise en place des paramêtres SEO de base</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Page d'erreur 404 avec redirection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Modifications : 3 à 5 (si +, 5€ par modification)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de code source</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas d'hébergement du site</span>
                </li>

                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>
                    Pas de nom de domaine (url non personnalisable) ou +12€/an
                    pour la gestion de l'hébergement et du nom de domaine
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">7 jours</span>
                  </span>
                </li>
              </ul>
              <Link
                to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 3 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">450€</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec ton branding (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">1 à 5</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Formulaire de contact avec redirection automatique des
                    messages vers ta boîte mail
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Logo des réseaux sociaux avec redirection </span>
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
                  <span>Mise en place des paramêtres SEO de base</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page d'erreur 404 avec redirection</span>
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
                  <span>Maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Code source</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Hébergement inclus, gratuit 1 an</span>
                </li>

                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Nom de domaine personnalisé</span>
                </li>
                <br />
                <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">10 jours</span>
                  </span>
                </li>
              </ul>
              <Link
                to="/Contact"
                className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center dark:text-white"
              >
                C'est parti !
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default OffrePortfolio;
