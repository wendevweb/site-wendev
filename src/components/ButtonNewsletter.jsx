import React from "react";

const ButtonNewsletter = () => {
  return (
    <div className="">
      <button className="sticky m-6 shadow-lg bg-real font-bold rounded-md p-6 hover:bg-pinkDark hover:text-white">
        <a
          href="https://wendevweb.systeme.io/inscription"
          alt="Redirection vers l'inscription à ma newsletter"
          aria-label="Redirection vers le site web du partenaire de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          Inscris-toi à ma newsletter !
        </a>
      </button>
    </div>
  );
};

export default ButtonNewsletter;
