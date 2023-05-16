import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import building from "../assets/building.png";

const PageOffrePortfolio = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Portfolio | WenDev</title>
        <link href="https://wendev.fr/OffrePortfolio" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/08/12/09/17/industry-2633878_960_720.jpg')",
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
                  Création de ton
                  <br />
                  <span className="text-pink">portfolio</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Que tu sois artiste, expert de la tech, débutant ou chevronné,
                  avoir un portfolio est essentiel pour présenter tes projets,
                  mettre en valeur ton travail et qui tu es.
                  <br />
                  <br /> Je code et met en page tes projets et ta présentation
                  de manière originale et percutante, mais toujours pro !
                  <br />
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
            Quel est le but d'un portfolio ?
          </h3>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Un <span className="font-bold text-pinkDark">porfolio</span> est un
            très bon moyen de présenter ton travail et de te présenter, quel
            que soit votre secteur d'activité.
            <br />
            C'est un peu comme un CV... mais en mieux ! 🤩 En effet, avec un
            portfolio numérique, on peut ajouter de l'interactivité, du
            dynamisme et des liens directs vers vos projets. Par rapport à un
            site web ou à une landing page, un portfolio a une visée plus
            professionnelle et est destiné à être vu par un public ciblé et
            restreint, comme tes employeurs, ton centre de formation, etc.
            <br />
            C'est aussi un bon moyen d'entrer en contact avec toi et de
            rencontrer de nouveaux clients, lorsqu'il est pourvu d'un formulaire
            de contact.
            <br />
            Je te livre une solution fonctionnelle, personnalisée, faite pour en
            mettre plein les yeux à ceux qui le regarderont !
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
      <div className="flex justify-center">
        <Link to="/Fonctionnement">
          <button className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            Comment se déroule un projet client avec WenDev ?
          </button>
        </Link>
      </div>
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
      <Fade>
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-pink text-2xl text-center mb-4">
            Un exemple ? Mon portfolio de dev.
          </h3>
          <button className="w-56 border border-pinkDark bg-real font-bold rounded-md shadow-md mt-2 p-2 hover:bg-pinkDark">
            <a
              href="https://wendybaqueportfoliodev.wendev.fr/"
              alt="Redirection vers le portfolio de Wendy Baqué"
              aria-label="Redirection vers le portfolio de Wendy Baqué"
              rel="noreferrer"
              target="_blank"
            >
              Voir mon portfolio
            </a>
          </button>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffrePortfolio;
