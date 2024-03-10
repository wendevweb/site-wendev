import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ButtonFonctionnement = () => {
  return (
    <div className="flex justify-center">
      <Fade>
        <Link
          to="/Fonctionnement"
          target={"_blank"}
          rel="noreferrer"
          alt="redirection vers la page de Fonctionnemement."
          aria-label="redirection vers la page de Fonctionnemement."
        >
          <button className="text-xl border-solid border-2 border-pinkDark shadow-lg bg-real text-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-real">
            Comment se déroule un projet client avec WenDev ?
          </button>
        </Link>
      </Fade>
    </div>
  );
};

export default ButtonFonctionnement;
