import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import OffreAudit from "../components/OffreAudit";
import Rdv from "../components/Rdv";

const PageOffreMaquette = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Audit de site web | WenDev</title>
        <link href="https://www.wendev.fr/OffreAudit" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            height: "600px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Séance d'audit
                  <br />
                  <strong className="text-pinkDark">
                    pour améliorer votre site web
                  </strong>
                </h2>
                <p className="tracking-tight text-white sm:text-xl">
                  Vous avez déjà un <strong>site internet</strong> et vous
                  souhaitez offrir une meilleure expérience à vos utilisateurs ?{" "}
                  <br />
                  Vous avez besoin des conseils d'une professionnelle du web ?
                  Design, accessibilité, performances, sécurité, expérience
                  utilisateur, etc. <br /> Ensemble, nous passerons en revue
                  votre site dans les moindres détails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fade>
        <section
          aria-label="Grille tarifaire de l'offre de création de maquettes et prototypes pour le web."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffreAudit />
          <p className="text-xl tracking-tight">Vous avez un site WordPress et vous souhaitez une refonte/mise à jour ? <br/> Je ne travaille pas avec WordPress, alors l'audit de votre site peut être la solution optimale pour que je puisse vous aider !</p>

        </section>
      </Fade>

      <ButtonFonctionnement />

      <div className="grid justify-items-center">
        <Rdv />
      </div>
    </div>
  );
};

export default PageOffreMaquette;
