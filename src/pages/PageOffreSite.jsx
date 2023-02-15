import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Interest from "../components/Interest";

const PageOffreSite = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre création de sites internet | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg')",
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
                  <span className="text-pink">Sites internet</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Avoir son propre site internet comporte bien des avantages.
                  C'est un réel atout pour ta marque ou ton entreprise !
                  <br />
                  Grâce à React et Tailwindcss, deux technologies récentes,
                  personnalisables et fiables, je te propose un site moderne,
                  accessible et au coeur des tendances.
                  <br /> Découvre mon offre de création de site web adaptée à
                  tes besoins numériques. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section aria-label="Intérêts d'avoir un site internet - section d'informations">
          <Interest />
        </section>
      </Fade>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <p className="text-center p-6">A venir... Stay tuned !😎</p>
        </section>
      </Fade>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Démos</h3>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreSite;
