import React from "react";
import CheckIcon from "@mui/icons-material/Check";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffreMaquette = () => {
  return (
    <section
      aria-label="Offre de services de création maquettes et prototypes pour le web."
    >
      <div className="p-4 grid grid-cols-1 justify-items-center py-8 px-4 lg:py-16 lg:px-6">
        <Fade>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden w-auto p-6 text-center text-black bg-real rounded-md shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">
              Une offre unique qui s'adapte à toutes tes envies !
            </h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-pinkDark">
                100€ par page
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Prototype</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Personnalisation avec ton contenu (à fournir)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Pages pour versions desktop et mobile</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Fichiers source</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Modifications illimitées</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Design inspiré des tendances et de la psychologie cognitive et de l'utilisateur</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <AccessTimeIcon style={{ color: "magenta" }} />
                <span>
                  Délai de création : <span className="font-bold">1.5 jour par page</span>
                </span>
              </li> */}
            </ul>
            <Link
              to="/Contact"
              className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              >
              C'est parti !
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default OffreMaquette;
