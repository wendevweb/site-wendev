import React from "react";

const Techno = () => {
  return (
    <div
      className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      aria-label="Technologies et langages de programmation utilisés par WenDev"
    >
      <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
        Mon expertise à votre service
      </h3>
      <div className="lg:flex justify-center grid justify-items-center">
      <img
          alt="Hostinger"
          aria-label="Hostinger"
          className="w-32 place-self-center p-4"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Hostinger_Logotype.png"
        />
        <img
          alt="html"
          aria-label="html"
          className="mt-4 w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        />
        <img
          alt="css"
          aria-label="css"
          className="mt-4 w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        />

        {/* <img
          alt="angular"
          aria-label="angular"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
        /> */}
        <img
          alt="Javascript"
          aria-label="Javascript"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <img
          alt="React"
          aria-label="React"
          className="mt-4 w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />

        <img
          alt="Next.js"
          aria-label="Next.js"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />

        <img
          alt="Tailwindcss"
          aria-label="Tailwindcss"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
        />
        <img
          alt="Node.js"
          aria-label="Node.js"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
        {/* <img
          alt="Express"
          aria-label="Express"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        /> */}

        <img
          alt="Webflow"
          aria-label="Webflow"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
        />
        <img
          alt="Figma"
          aria-label="Figma"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"        />
        {/* <img
          alt="MySQL"
          aria-label="MySQL"
          className="w-32 place-self-center p-4"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        /> */}
      </div>
    </div>
  );
};

export default Techno;
