import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import building from "../assets/building.png";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
// import wendev16 from '../assets/wendev-16.webp';

const PageOffreChat = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Chat et chatbot | WenDev</title>
        <link href="https://wendev.fr/OffreChat" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2018/03/16/19/10/communication-3232227_960_720.jpg')",
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
                  Création de
                  <br />
                  <span className="text-pink">Chat et Chatbot</span>
                </h2>
                <p className="text-white sm:text-xl">
                  Echanger avec ses collègues, ses amis, sa familles, etc. de
                  manière fun et sécurisée, ou répondre automatiquement aux
                  questions de tes utilisateurs selon des chemins prédéfinis est
                  dans l'air du temps.
                  <br />
                  Je crée ton chatbot ou ton serveur de chat personnalisés et
                  sécurisés.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          {" "}
          <div className="lg:grid grid-cols-1">
            <h3 className="text-pink text-2xl text-center mb-4">
              Un petit mot sur mes tarifs...{" "}
            </h3>
            <p className="tracking-tight lg:pr-64 lg:pl-64 m-4">
              En tant que développeuse web indépendante/freelance, je détermine
              le prix de mes prestations en fonction du coût de mon travail, le
              temps passé à sa réalisation, je m’adapte à des demandes
              différentes et je me place face à la concurrence. C’est un travail
              de création ! Et tout travail mérite salaire, non ? 😉
            </p>
            <p className="tracking-tight lg:pr-64 lg:pl-64 m-4">
              En choisissant de travailler avec un développeur web, tu accèdes à
              un service personnalisé d’une flexibilité et d’une liberté qui
              n’ont rien à voir avec celles proposées par une agence ou une
              embauche d’un salarié.
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section className="lg:flex flex-col justify-center items-center">
          <h3 className="text-pink text-2xl text-center mb-4">Démo </h3>
          {/* <img src={wendev16} alt="" className="w-fit"/> */}

          <img
            src="https://i.goopics.net/f7mwpn.png"
            alt="Module Alerte"
            aria-label="Module Alerte"
            className="rounded-md shadow-lg w-1/2"
          />
          <button className="w-56 bg-real font-bold rounded-md shadow-lg mt-6 p-2 hover:bg-pinkDark hover:text-real">
            <a
              href="https://module-alert-deploy.vercel.app/"
              alt="Redirection vers le Module Alerte"
              aria-label="Redirection vers le Module Alerte"
              rel="noreferrer"
              target="_blank"
            >
              Teste en live !
            </a>
          </button>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreChat;
