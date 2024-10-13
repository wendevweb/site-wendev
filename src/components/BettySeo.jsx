import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Betty from "../assets/Betty.webp";

const Freebie = () => {
  return (
    <section
      aria-label="Betty Labroche de Craies'dactions, ton alliée pour la rédaction web !"
      className="bg-gradient-to-r from-purple via-pinkDark to-pink dark:bg-black font-quicksand"
      id="Betty"
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
        <Fade>
          <div className="grid lg:grid-cols-2 gap-24 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-4xl mt-6 mb-6">
                Quoi ?! Des paramètres de référencement "de base" seulement ?!
                😱
              </h3>
              <p className="text-real text-xl mt-6 mb-6 tracking-tight">
                Je suis <strong>développeuse web</strong>... pas spécialiste en
                rédaction web et en SEO (Search Engine Optimization), qui est un
                métier à part entière. <br />
                C'est pour cela que je fais appel à{" "}
                <strong>Betty Labroche</strong>, de{" "}
                <strong>Craies'dactions</strong> !
                <br /> Ma partenaire professionnelle saura sublimer et
                personnaliser vos textes à la manière du{" "}
                <strong>storytelling</strong>, ainsi que cibler au mieux des
                mots clés pertinents pour votre domaine d'activité. Nous
                travaillons de manière complémentaire autour de votre projet.
                Ses prestations sont une <strong>option essentielle </strong>à
                ajouter à votre projet web pour qu'il apparaisse de manière
                pertinente dans les recherches internet et cible mieux vos
                utilisateurs. <br />
                <br /> Prenez contact avec votre <strong>
                  experte SEO
                </strong>{" "}
                pour optimiser vos écrits pour le web !
              </p>
              <button
                className="mr-6 mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                alt="Redirection vers le blog de Betty La broche"
              >
                <Link
                  to="https://www.craiesdactions.fr/post/pourquoi-faire-appel-redacteur-web"
                  target="_blank"
                  rel="noreferrer"
                  alt="Redirection vers le blog de Betty La broche"
                >
                  Pourquoi faire appel à un <strong>rédacteur web</strong> ?
                </Link>
              </button>
              <button
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                alt="Contactez Betty Labroche"
              >
                <Link
                  to="https://www.craiesdactions.fr/contact"
                  target="_blank"
                  rel="noreferrer"
                  alt="Contactez Betty Labroche"
                >
                  Contactez Betty
                </Link>
              </button>
            </div>
            <div>
              <img
                src={Betty}
                alt="Betty Labroche, votre alliée pour la rédaction web."
                className="h-fit rounded-full"
              />
              <p className="text-real font-bold text-xl mt-6 mb-6 tracking-tight">
                Betty Labroche, votre alliée pour la rédaction web.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Freebie;
