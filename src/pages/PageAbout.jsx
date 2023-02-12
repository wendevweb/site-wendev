import React from "react";
import { Helmet } from "react-helmet";

const PageAbout = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="mb-20" aria-label="Titre et présentation du service">
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
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
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
    </div>
  );
};

export default PageAbout;
