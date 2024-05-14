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
      id="offreaudit"
    >
      <div className="p-4 grid grid-cols-1 justify-items-center py-8 px-4 lg:py-16 lg:px-6">
        <Fade>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden w-auto p-6 text-center text-black bg-real rounded-md shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">
              Une séance de 30 minutes en visio * avec un compte-rendu écrit et
              des conseils personnalisés
            </h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-pinkDark">
                30€
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1/2 heure en individuel avec une pro du web</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Des conseils personnalisés en analysant ensemble votre site
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  1 compte-rendu écrit avec tout ce qui s'est dit pendant la
                  séance, des exemples, des ressources gratuites et des conseils
                </span>
              </li>
              <br/>
              * Si vous ne souhaitez pas de séance en visio, je m'adapte à votre demande et propose cette prestation par téléphone ou par messages.
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
