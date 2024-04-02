import React from "react";

const ButtonNewsletter = () => {
  return (
    <div>
      <button className="sticky m-6 shadow-lg bg-real font-bold rounded-md p-6 hover:bg-pinkDark hover:text-white">
        <a
          href="https://wendevweb.systeme.io/inscription"
          alt="Redirection vers l'inscription à ma newsletter"
          aria-label="Redirection vers l'inscription à ma newsletter"
          target="_blank"
          rel="noreferrer"
        >
          Inscrivez-vous à ma newsletter !
        </a>
      </button>
    </div>
  );
};

export default ButtonNewsletter;
