import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import formation from "../assets/formation.webp";
import evogue from "../assets/evogue.webp";

const Formation = () => {
  return (
    <div className="h-screen lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Formation | WenDev</title>
        <link href="https://wendev.fr/Formation" />
      </Helmet>
      <Fade>
        <section className="m-4 p-4">
          <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
            Je suis aussi formatrice !
          </h2>
        </section>
      </Fade>
      <Fade>
        <div className="lg:grid grid-cols-2">
          <section className="m-6 p-6">
            <h3>
              Retrouvez-moi chez <strong>Evogue formation</strong>
            </h3>
            <img
              src={evogue}
              alt="Evogue formation, l'équipe des formateurs, consultants, collaborateurs qui vous renforce."
            />
            <p>
              Forte d'une expérience de <strong>formatrice référente</strong>{" "}
              pour la préparation aux concours sanitaires et sociaux de niveau
              IV et V et ayant une réelle appétence à transmettre mon savoir en
              toute bienveillance, je suis formatrice chez{" "}
              <strong>Evogue </strong>. <br />
              Je privilégie une <strong>pédagogie active</strong> par la
              pratique et accompagne mes apprenants vers leurs objectifs
              réalistes et réalisables, en fonction de leurs ressources et de
              leurs besoins.
            </p>
            <div className="lg:flex flex-col">
              <button
                src="https://www.evogue.fr/"
                alt="Redirection vers le site d'Evogue"
              >
                En savoir plus sur Evogue
              </button>
              <button src="" alt="">
                Des besoins en formation professionnelle ?
              </button>
            </div>
          </section>
          <section>
            <img src={formation} alt="" />
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default Formation;
