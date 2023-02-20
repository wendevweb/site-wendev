import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const PageOffreAuteurs = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre spéciale auteurs | WenDev</title>
        <link href="https://www.wendev.fr/Offreauteurs" />
      </Helmet>

      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.58)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Offre spéciale
                  <br />
                  <span className="text-pink">auteurs</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Tu écris des livres et tu souhaites avoir un site web
                  professionnel dédié à ton activité ? <br /> Moi aussi, je suis
                  auteure et suis passée par là.
                  <br /> Alors cette offre est faite pour toi ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <p className="text-center p-6">A venir... Stay tuned !😎</p>
        </section>
      </Fade>
      
      <Fade>
        <section className="lg:flex flex-col justify-center items-center">
          <h3 className="text-pink text-2xl text-center mb-4">Démo </h3>
          <img
            src="https://www.hebergeur-image.com/upload/88.174.47.6-63db7ce5436f1.png"
            alt="Site internet de Wendy Baqué, auteure de romans"
            aria-label="Site internet de Wendy Baqué, auteure de romans"
            className="rounded-md shadow-md w-1/2"
          />
          <button className="w-56 border border-pinkDark bg-real font-bold rounded-md shadow-md mt-2 p-2 hover:bg-pinkDark">
            <a
              href="https://wendybaqueauteure.wendev.fr/"
              alt="Site internet de Wendy Baqué, auteure de romans"
              aria-label="Site internet de Wendy Baqué, auteure de romans"
              rel="noreferrer"
              target="_blank"
            >
              Voir le site !
            </a>
          </button>
          
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreAuteurs;
