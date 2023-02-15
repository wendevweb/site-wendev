import React from "react";
import { Helmet } from "react-helmet";
import building from "../assets/building.png";

const PageProjets = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mes projets | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg')",
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
                  Les projets réalisés
                  <br />
                  <span className="text-pink">pour mes clients</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Voici l'ensemble des projets que j'ai réalisé pour mes
                  clients. <br />
                  Tu pourras ainsi avoir un aperçu de ce que je sais faire.{" "}
                  <br /> Alors, ça te plaît ?
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
    </div>
  );
};

export default PageProjets;
