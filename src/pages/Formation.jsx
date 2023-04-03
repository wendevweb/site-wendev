import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import formation from "../assets/formation.webp";
import evogue from "../assets/evogue.webp";

const Formation = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
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
            <h3 className="font-quicksand text-2xl lg:p-10 leading-relaxed">
              Retrouvez-moi chez{" "}
              <strong className="text-bold text-pinkDark">
                Evogue formation
              </strong>
            </h3>
            <img
              src={evogue}
              alt="Evogue formation, l'équipe des formateurs, consultants, collaborateurs qui vous renforce."
              className="m-10 rounded-md shadow-md w-64"
            />
            <p className="font-quicksand text-light lg:p-10 leading-relaxed">
              Forte d'une expérience de{" "}
              <strong className="text-bold text-pinkDark">
                formatrice référente
              </strong>{" "}
              pour la préparation aux concours sanitaires et sociaux de niveau
              IV et V et ayant une réelle appétence à transmettre mon savoir en
              toute bienveillance, je suis formatrice chez{" "}
              <strong className="text-bold  text-pinkDark">Evogue </strong>.{" "}
              <br />
              Je privilégie une{" "}
              <strong className="text-bold  text-pinkDark">
                pédagogie active
              </strong>{" "}
              par la pratique et accompagne mes apprenants vers leurs objectifs
              réalistes et réalisables, en fonction de leurs ressources et de
              leurs besoins. <br />
              Je privilégie les cours en{" "}
              <strong className="text-bold  text-pinkDark">full remote</strong>.
            </p>
            <div className="grid justify-items-center lg:m-10">
              <button className="mb-6 mt-6 w-56 border border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.evogue.fr/"
                  alt="Redirection vers le site d'Evogue"
                  target="_blank"
                  rel="noreferrer"
                >
                  En savoir plus sur Evogue
                </a>
              </button>
              <Link to="/Contact">
                <button
                  className="w-56 border border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
                  alt="Redirection vers la page du service de WenDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Des besoins en formation professionnelle ?
                </button>
              </Link>
            </div>
          </section>
          <section>
            <img src={formation} alt="" className="lg:ml-56 w-auto" />
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default Formation;
