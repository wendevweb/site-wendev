import React from "react";

const Techno = () => {
  return (
    <div
      className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      aria-label="Avis des clients sur l'offre aux auteurs"
    >
      <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
        Mon expertise à votre service
      </h3>
      <div className="lg:flex justify-center grid justify-items-center">
        <img
          alt="html"
          aria-label="html"
          className="mt-4 w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        />
        <img
          alt="css"
          aria-label="css"
          className="mt-4 w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        />

        <img
          alt="angular"
          aria-label="angular"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
        />
        <img
          alt="Javascript"
          aria-label="Javascript"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <img
          alt="React"
          aria-label="React"
          className="mt-4 w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />

        <img
          alt="Next.js"
          aria-label="Nex.js"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />

        <img
          alt="Tailwindcss"
          aria-label="Tailwindcss"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
        />
        <img
          alt="Node.js"
          aria-label="Node.js"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
        <img
          alt="Express"
          aria-label="Express"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />

        <img
          alt="Firebase"
          aria-label="Firebase"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
        />
        {/* <img
          alt="MySQL"
          aria-label="MySQL"
          className="w-32 place-self-center pr-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        /> */}
      </div>
    </div>
  );
};

export default Techno;
