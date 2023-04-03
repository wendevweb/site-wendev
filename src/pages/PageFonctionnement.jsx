import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const PageFonctionnement = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fonctionnement | WenDev</title>
        <link href="https://wendev.fr/Fonctionnement" />
      </Helmet>
      <Fade>
        <section className="m-4 p-4">
          <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
            Comment se passe la création <br />
            d'un projet de A à Z avec WenDev ?{" "}
          </h2>
        </section>
      </Fade>
    </div>
  );
};

export default PageFonctionnement;
