import React from "react";
import DownloadIcon from "@mui/icons-material/Download";


const WhiteBook = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://form.jotform.com/231160807687056"
        alt="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
        aria-label="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
        target="_blank"
        rel="noreferrer"
      >
        <button className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
          <DownloadIcon /> Auteur.e de livres ? Télécharge gratuitement ton livre blanc pour
          t'aider à créer ton propre site internet !
        </button>
      </a>
    </div>
  );
};

export default WhiteBook;
