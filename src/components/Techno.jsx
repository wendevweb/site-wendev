import React from "react";
import mysql from "../assets/mysql.webp";
import javascript from "../assets/javascript.webp";
import htmlcss from "../assets/htmlcss.webp";
import react from "../assets/react.webp";
import express from "../assets/express.webp";
import tailwind from "../assets/tailwind.webp";

const Techno = () => {
  return (
    <div
      className="lg:m-10"
      aria-label="Avis des clients sur l'offre aux auteurs"
    >
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Mes technologies préférées et celles avec lesquelles je réalise tous vos
        projets
      </h3>
      <div className="lg:flex justify-center grid justify-items-center">
        <img
          src={htmlcss}
          alt="html & css"
          aria-label="html & css"
          className="w-32 place-self-center pr-4"
        />
        <img
          src={javascript}
          alt="Javascript"
          aria-label="Javascript"
          className="w-32 place-self-center pr-4"
        />
        <img src={react} alt="React" aria-label="React" className="w-32 place-self-center pr-4" />
        <img
          src={tailwind}
          alt="Tailwindcss"
          aria-label="Tailwindcss"
          className="w-32 place-self-center pr-4"
        />
        <img
          src={express}
          alt="Express & Node"
          aria-label="Express & Node"
          className="w-32 place-self-center pr-4"
        />
        <img src={mysql} alt="MySQL" aria-label="MySQL" className="w-32 place-self-center pr-4" />
      </div>
    </div>
  );
};

export default Techno;
