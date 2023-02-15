import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

import maquetteMood from "../assets/maquette-mood.webp";
import prototypeMood from "../assets/prototype-mood.webp";
import fedmind from "../assets/refonte-site-fedmind.webp";
import apside from "../assets/maquette-apside.webp";
import prototypeMbn from "../assets/prototype-mbn.webp";
import maquetteMbn from "../assets/maquette-mbn.webp";

const PageOffreMaquette = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Maquette et prototype | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://assets-global.website-files.com/615b6910fed3ab29278f1893/6239bc9233d83795915b0c50_collaboration-figma2x.png')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Création et mise en forme de
                  <br />
                  <span className="text-pink">
                    prototypes et maquettes pour le web
                  </span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Sur Figma, avec palette de couleurs, palette de polices,
                  responsive
                  <br /> Alors cette offre est faite pour toi ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section
          aria-label="A quoi sert une maquette ?"
          className="lg:m-10 p-10"
        >
          <h3 className="text-pink text-2xl text-center mb-6">
            A quoi sert une maquette ?
          </h3>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Le terme <span className="font-bold text-pinkDark">maquette </span>
            définit l'ébauche d'un site web. En résumé, la maquette d'un site
            web est une esquisse, ou encore un prototype du site web final. Le
            maquettage se trouve à mi-chemin entre le graphisme et le
            développement.
            <br />
            Un <span className="font-bold text-pinkDark">prototype</span> est
            une version de la maquette en noir et blanc, sans textes ni images.
            C'est un peu comme un brouillon ou une version très sommaire de la
            maquette. De manière générale, il n'est pas obligatoire et sa
            conception intervient avant celle de la maquette.
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Ainsi, une maquette sert à{" "}
            <span className="font-bold text-pinkDark">
              avoir une vision globale des pages de ton site web et ses
              composants
            </span>
            , en couleurs, avec les différents liens entre les pages, des
            polices et des couleurs utilisées. Le logo peut également être
            ajouté.{" "}
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            C'est une étape clé avant de se lancer dans le code de ton site,{" "}
            <span className="font-bold text-pinkDark">
              afin de se mettre d'accord sur les différents éléments et de
              gagner du temps lors de la phase de conception.
            </span>{" "}
            Ainsi, une maquette sert à{" "}
            <span className="font-bold text-pinkDark">
              avoir une vision globale des pages de ton qui composent ton site
              et leur disposition{" "}
            </span>
            . Tu auras également un aperçu de son rendu sur téléphone mobile
            pour répondre aux{" "}
            <span className="font-bold text-pinkDark">
              tendances actuelles du mobile first
            </span>{" "}
            (penser le visuel d'un site d'abord en version pour smartphone, puis
            pour ordinateur de bureau), dans la version adaptée ! Cela te
            donnera un avant goût de ton site, avant le résultat final !
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Je réalise tes maquettes et prototypes sur le logiciel{" "}
            <span className="font-bold text-pinkDark">Figma</span>.
          </p>
        </section>
      </Fade>

      <Fade>
        <section
          aria-label="Tarifs de l'offre Maquette"
          className="lg:m-10 p-10"
        >
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <section
            className="bg-white dark:bg-black font-quicksand"
            aria-label="Détail des offres de services réservées aux auteurs"
          >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* OFFRE 1 */}
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-real rounded-lg shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                  <p className="font-light text-black sm:text-lg dark:text-black">
                    Une bonne base pour commencer...{" "}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">100€</span>
                  </div>
                  <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">100+ developers</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-pink hover:bg-pinkDark font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
                  >
                    C'est parti !
                  </a>
                </div>
                {/* OFFRE 2 */}
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col p-16  max-w-xl text-center text-white bg-purpleDark rounded-lg shadow-xl dark:border-black xl:p-8 dark:bg-black dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold text-real">
                    Medium
                  </h3>
                  <p className="text-pink sm:text-lg font-bold dark:text-white">
                    Formule la plus populaire !
                  </p>
                  <p className="text-white sm:text-lg dark:text-white">
                    Relevant for multiple users, extended & premium support.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold text-pink">
                      190€
                    </span>
                  </div>
                  <ul className="mb-8 space-y-4 text-left text-white">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">10 developers</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">24 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span className="font-semibold">24 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-purple bg-real hover:bg-white shadow-md font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
                  >
                    C'est parti !
                  </a>
                </div>
                {/* OFFRE 3 */}
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-real rounded-lg shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Ultimate !</h3>
                  <p className="font-light text-black sm:text-lg dark:text-black">
                    Le must du must du site internet de la mort qui tue !
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">250€</span>
                  </div>
                  <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">100+ developers</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green dark:text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span className="font-semibold">36 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-pink hover:bg-pinkDark font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
                  >
                    C'est parti !
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="lg:grid grid-cols-1">
            <h4 className="text-pink text-xl text-center">
              Un petit mot sur mes tarifs...{" "}
            </h4>
            <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
              En tant que développeuse web indépendante/freelance, je détermine
              le prix de mes prestations en fonction du coût de mon travail, le
              temps passé à sa réalisation, je m’adapte à des demandes
              différentes et je me place face à la concurrence. C’est un travail
              de création ! Et tout travail mérite salaire, non ? 😉
            </p>
            <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
              En choisissant de travailler avec un développeur web, tu accèdes à
              un service personnalisé d’une flexibilité et d’une liberté qui
              n’ont rien à voir avec celles proposées par une agence ou une
              embauche d’un salarié.
            </p>
          </div>
        </section>
      </Fade>

      <Fade>
        <section
          aria-label="Quelques exemples de maquettes réalisées par WenDev"
          className="lg:m-10 p-10"
        >
          <h3 className="text-pink text-2xl text-center mb-6">
            Quelques exemples...
          </h3>
          <div className="grid grid-cols-6 gap-4">
            <figure style={{ display: "table" }}>
              <img
                src={prototypeMood}
                alt="Prototype de l'application Mood"
                aria-label="Prototype de l'application Mood"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Prototype de l'application Mood
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={maquetteMood}
                alt="Maquette de Mood"
                aria-label="Maquette de Mood"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de Mood
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={fedmind}
                alt="Maquette de refonte du site internet de Fedmind"
                aria-label="Maquette de refonte du site internet de Fedmind"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de refonte du site internet de Fedmind
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={prototypeMbn}
                alt="Prototype de Ma bibliothèque Numérique"
                aria-label="Prototype de Ma bibliothèque Numérique"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Prototype de Ma bibliothèque Numérique
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={maquetteMbn}
                alt="Maquette de Ma Bibliothèque Numérique"
                aria-label="Maquette de Ma Bibliothèque Numérique"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de Ma Bibliothèque Numérique
              </figcaption>
            </figure>
            <figure style={{ display: "table" }}>
              <img
                src={apside}
                alt="Maquette de dashboard Hackathon Apside"
                aria-label="Maquette de dashboard Hackathon Apside"
                className="w-96 rounded-md shadow-pb"
              />
              <figcaption
                style={{
                  display: "table-caption",
                  captionSide: "top",
                  textAlign: "center",
                }}
              >
                Maquette de dashboard Hackathon Apside
              </figcaption>
            </figure>
          </div>
        </section>
      </Fade>

      <Fade>
        <section aria-label="Avis des clients sur l'offre de maquette de site web">
          <h3 className="text-pink text-2xl text-center">Vous en parlez !</h3>
          <div className="lg:m-10 p-6 bg-bg">
            <div className="lg:grid grid-cols-4 gap-x-2 m-2 p-2 ">
              {/* CARTE 1 */}
              <div className="flex flex-col w-full max-w-sm rounded-lg shadow-md bg-real  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col content-center justify-center justify-items-center px-5 pb-5">
                  <h5 className="text-l font-quicksand tracking-tight p-4 dark:text-white">
                    " Wendy Baqué nous offre un roman profondément humain qui
                    transpercera les âmes les plus endurcies. Elle nous transmet
                    de très beaux messages avec justesse, humour et sensibilité.
                    "
                  </h5>

                  <div className="flex content-center justify-center justify-items-centermt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <span className="text-xl text-center font-quicksand text-black dark:text-white">
                    Patricia, Lecture évasion
                  </span>
                </div>
              </div>
              {/* CARTE 2  */}
              <div className="flex flex-col w-full max-w-sm rounded-lg shadow-md bg-real transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col content-center justify-center justify-items-center px-5 pb-5">
                  <h5 className="text-l font-quicksand tracking-tight p-4 dark:text-white">
                    " Aucune surprise pour ce livre de Wendy Baqué qui reste
                    dans la veine de mes ressentis précédents, j'ai plus
                    qu'adoré et l'auteure s'installe durablement dans mes «
                    indispensables ». "
                  </h5>

                  <div className="flex content-center justify-center justify-items-centermt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <span className="text-xl text-center font-quicksand text-black dark:text-white">
                    Robin, Les lectures de Florelle et Robin
                  </span>
                </div>
              </div>
              {/* CARTE 3  */}
              <div className="flex flex-col w-full max-w-sm rounded-lg shadow-md bg-real  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col content-center justify-center justify-items-center px-5 pb-5">
                  <h5 className="text-l font-quicksand tracking-tight p-4 dark:text-white">
                    " Ce livre est clairement un chef-d'œuvre. Qu'on l'aime ou
                    pas, il restera dans notre tête et dans notre cœur. De part
                    son sujet déjà : une histoire interdite, un sujet encore
                    tabou dans la société et pour beaucoup de monde et par
                    toutes les questions qu'on est amené nous aussi à se poser
                    au fur et à mesure de l'histoire. "
                  </h5>

                  <div className="flex content-center justify-center justify-items-centermt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <span className="text-xl text-center font-quicksand text-black dark:text-white">
                    Aurore, Les lectures d'Aurore
                  </span>
                </div>
              </div>
              {/* CARTE 4 */}
              <div className="flex flex-col w-full max-w-sm rounded-lg shadow-md bg-real transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col content-center justify-center justify-items-center px-5 pb-5">
                  <h5 className="text-l font-quicksand tracking-tight p-4 dark:text-white">
                    " J’ai eu le plaisir de découvrir une très belle histoire à
                    travers ce livre. L’auteure essaye de faire passer un
                    message dans notre société encore très fermée d’esprit. Ce
                    roman mène à la réflexion et au questionnement sur la vie,
                    la mort, l’amour... C’est un roman très touchant, voir
                    bouleversant. Je recommande sans modération ! "
                  </h5>

                  <div className="flex content-center justify-center justify-items-centermt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-stars"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <span className="text-xl text-center font-quicksand text-black dark:text-white">
                    Marine, Lectrice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreMaquette;
