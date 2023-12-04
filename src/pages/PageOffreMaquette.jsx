import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import maquetteMood from "../assets/maquette-mood.webp";
import prototypeMood from "../assets/prototype-mood.webp";
import fedmind from "../assets/refonte-site-fedmind.webp";
import apside from "../assets/maquette-apside.webp";
import prototypeMbn from "../assets/prototype-mbn.webp";
import maquetteMbn from "../assets/maquette-mbn.webp";
import figma from "../assets/figma.webp";
import OffreMaquette from "../components/OffreMaquette";

const PageOffreMaquette = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Maquette et prototype | WenDev</title>
        <link href="https://www.wendev.fr/OffreMaquette" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
                  <strong className="text-pink">
                    prototypes et maquettes pour le web
                  </strong>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Tu souhaites avoir un aperçu de ce que donnera le site web de
                  tes rêves ?
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
            Le terme{" "}
            <strong className="font-bold text-pinkDark">maquette </strong>
            définit l'ébauche d'un site web. En résumé, la maquette d'un site
            web est une esquisse, ou encore un prototype du site web final. Le
            maquettage se trouve à mi-chemin entre le graphisme et le
            développement.
            <br />
            Un <strong className="font-bold text-pinkDark">
              prototype
            </strong>{" "}
            est une version de la maquette en noir et blanc, sans textes ni
            images. C'est un peu comme un brouillon ou une version très sommaire
            de la maquette. De manière générale, il n'est pas obligatoire et sa
            conception intervient avant celle de la maquette.
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Ainsi, une maquette sert à{" "}
            <strong className="font-bold text-pinkDark">
              avoir une vision globale des pages de ton site web et ses
              composants
            </strong>
            , en couleurs, avec les différents liens entre les pages, des
            polices et des couleurs utilisées. Le logo peut également être
            ajouté.{" "}
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            C'est une étape clé avant de se lancer dans le code de ton site,{" "}
            <strong className="font-bold text-pinkDark">
              afin de se mettre d'accord sur les différents éléments et de
              gagner du temps lors de la phase de conception.
            </strong>{" "}
            Ainsi, une maquette sert à{" "}
            <strong className="font-bold text-pinkDark">
              avoir une vision globale des pages de ton qui composent ton site
              et leur disposition{" "}
            </strong>
            . Tu auras également un aperçu de son rendu sur téléphone mobile
            pour répondre aux{" "}
            <strong className="font-bold text-pinkDark">
              tendances actuelles du mobile first
            </strong>{" "}
            (penser le visuel d'un site d'abord en version pour smartphone, puis
            pour ordinateur de bureau), dans la version adaptée ! Cela te
            donnera un avant goût de ton site, avant le résultat final !
          </p>
          <p className="text-light leading-relaxed pb-6 text-xl">
            Je réalise tes maquettes et prototypes sur le logiciel{" "}
            <strong className="font-bold text-pinkDark">Figma</strong>.
          </p>
          <div className="flex justify-center">
            {" "}
            <img
              src={figma}
              alt="Firebase"
              aria-label="Firebase"
              className="w-52 p-4"
            />
          </div>
        </section>
      </Fade>

      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <OffreMaquette />
          <div className="lg:grid grid-cols-1">
            <h3 className="text-pink text-2xl text-center mb-4">
              Un petit mot sur mes tarifs...{" "}
            </h3>
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
      <ButtonFonctionnement />
      <Fade>
        <section
          aria-label="Quelques exemples de maquettes réalisées par WenDev"
          className="lg:m-10 p-10"
        >
          <h3 className="text-pink text-2xl text-center mb-6">
            Quelques exemples...
          </h3>
          <div className="lg:grid grid-cols-6 gap-4">
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
    </div>
  );
};

export default PageOffreMaquette;
