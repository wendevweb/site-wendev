import React from "react";
import { Link } from "react-router-dom";

const ButtonFonctionnement = () => {
  return (
    <div className="flex justify-center">
      <Link to="/Fonctionnement">
        <button className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
          Comment se déroule un projet client avec WenDev ?
        </button>
      </Link>
    </div>
  );
};

export default ButtonFonctionnement;
