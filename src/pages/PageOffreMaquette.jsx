import React from "react";
import { Helmet } from "react-helmet";

const PageOffreMaquette = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Maquette et prototype | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="mb-20" aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://assets-global.website-files.com/615b6910fed3ab29278f1893/6239bc9233d83795915b0c50_collaboration-figma2x.png')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Création et mise en forme de
                  <br />
                  <span className="text-pink">
                    prototypes et maquettes pour le web
                  </span>
                </h1>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Sur Figma, avec palette de couleurs, palette de polices,
                  responsive
                  <br /> Alors cette offre est faite pour toi ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageOffreMaquette;
