import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import building from "../assets/building.png";

const PageOffreFirebase = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Firebase | WenDev</title>
        <link href="https://wendev.fr/OffreFirebase" />
      </Helmet>

      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/11/02/10/23/security-2910624_960_720.jpg')",
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
                  Création de page d'authentification sur
                  <br />
                  <strong className="text-pink">Firebase</strong>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Tu souhaites que tes utilisateurs s'authentifient sur ton
                  application ou ton site internet de manière sécurisée ?
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
            C'est quoi, Firebase ?
          </h3>
          <div className="flex justify-center">
            {" "}
            <img
              alt="Firebase"
              aria-label="Firebase"
              className="w-52 place-self-center p4-4"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
            />
          </div>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Firebase est une{" "}
            <strong className="font-bold text-pinkDark">
              plateforme de développement d’applications web et mobiles soutenue
              par Google
            </strong>
            , pour aider les développeurs à offrir des expériences
            d’applications plus riches. On parle de
            <strong className="font-bold text-pinkDark">
              {" "}
              Backend As A Service (BaaS)
            </strong>
            . Firebase gère sa propre infrastructure avec un bel ensemble
            d’outils pour simplifier le travail du développeur en lui
            fournissant des kits de développement et un tableau de bord en
            ligne.
            <br />
            Parmis ces services, il y a l'{" "}
            <strong className="font-bold text-pinkDark">
              authentification
            </strong>{" "}
            !
          </p>
        </section>
      </Fade>
      <div className="grid justify-items-center ">
        <h3 className="text-pink text-2xl text-center mb-6">
          Page en construction... Contenu à venir !
        </h3>
        <img
          src={building}
          alt="Page en construction"
          aria-label="page en construction>"
        />
      </div>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <p className="text-center p-6">A venir... Stay tuned !😎</p>
        </section>
      </Fade>
      <ButtonFonctionnement />
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center mb-6">Tarifs</h3>
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
    </div>
  );
};

export default PageOffreFirebase;
