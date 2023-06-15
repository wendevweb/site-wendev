import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import OffresAuteurs from "../components/OffresAuteurs";
import WhiteBook from "../components/WhiteBook";

const PageOffreAuteurs = () => {
  return (
    <div className="font-quicksand flex flex-col justify-center justify-items-center">
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
                  <strong className="text-pink">auteurs</strong>
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
          <OffresAuteurs />
        </section>
      </Fade>
      <Fade>
        <WhiteBook />
      </Fade>

      <Fade>
        <section className="font-quicksand lg:flex flex-col justify-center items-center">
          <h3 className="text-pink text-2xl text-center mb-4">Démos </h3>
          <h4 className="font-quicksand text-center uppercase text-pinkDark text-2xl font-bold">
            Offre basic
          </h4>
          <div className="lg:flex flex-row pb-4 items-center ">
            <div className="lg:flex flex-col p-4 items-center ">
              {/* JEROME MULLER */}
              <img
                src="https://i.goopics.net/t8qp4y.png"
                alt="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://lightcyan-tiger-770474.builder-preview.com/"
                  alt="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                  aria-label="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
            {/* LUC HORLA */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/lxccuk.png"
                alt="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://lightslategrey-alligator-289384.builder-preview.com/"
                  alt="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                  aria-label="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
            {/* TOMAS CARLIER */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/7s7i56.png"
                alt="Site internet fictif de Tomas Carlier pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Tomas Carlier pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://lightgoldenrodyellow-lion-545728.builder-preview.com/"
                  alt="Site internet fictif de Tomas Cariler pour illustrer l'offre basic de WenDev"
                  aria-label="Site internet fictif de Tomas Cariler pour illustrer l'offre basic de WenDev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
          </div>

          <h4 className="font-quicksand text-center uppercase text-pinkDark text-2xl font-bold">
            Offre medium
          </h4>
          <div className="lg:flex flex-row p-4 items-center ">
            {/* HONORE SAINT HILAIRE */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/s0fo8g.png"
                alt="Site internet fictif de Honoré Saint Hilaire pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Honoré Saint Hilaire pour illustrer l'offre medium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://darkseagreen-fish-520996.builder-preview.com/"
                alt="Site internet fictif de Honoré Saint Hilaire pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Honoré Saint Hilaire pour illustrer l'offre medium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* DOM TERRENCE */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/lbuaht.png"
                alt="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://hotpink-cobra-376869.builder-preview.com/"
                alt="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* OCEANE GOUSSE */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/2tl6bf.png"
                alt="Site internet fictif de Océane Gousse pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Océane Gousse pour illustrer l'offre medium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://slateblue-grasshopper-490914.builder-preview.com/"
                alt="Site internet fictif de Océane Gousse pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Océane Gousse pour illustrer l'offre medium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
          </div>

          <h4 className="font-quicksand text-center uppercase text-pinkDark text-2xl font-bold">
            Offre premium
          </h4>
          <div className="lg:flex flex-row p-4 items-center mb-6">
            {/* FARAH D. */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/gb2alk.png"
                alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                className="rounded-md w-96"
              />
              <a
                href="https://www.farahdauteure.com"
                alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
             {/* ALEXANDRA ROCH*/}
             <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/pbowtq.png"
                alt="Site internet d'alexandra Roch, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                className="rounded-md w-96"
              />
              <a
                href="https://www.alexandraroch.com/"
                alt="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* LUCY MENARD
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://www.hebergeur-image.com/upload/88.174.47.6-64255808be2ac.png"
                alt="Site internet fictif de Lucy Ménard pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Lucy Ménard pour illustrer l'offre premium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://greenyellow-gnu-914551.builder-preview.com/"
                alt="Site internet fictif de Lucy Ménard pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Lucy Ménard pour illustrer l'offre premium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div> */}
            {/* GREGORY HENRI */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/vp65lb.png"
                alt="Site internet fictif de Gregory Henri pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Gregory Henri pour illustrer l'offre premium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://seashell-dog-370737.builder-preview.com/"
                alt="Site internet fictif de Gregory Henri pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Gregory Henri pour illustrer l'offre premium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* NATHALIE BEAULAC */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src="https://i.goopics.net/kbvo6m.png"
                alt="Site internet fictif de Nathalie Beaulac pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Nathalie Beaulac pour illustrer l'offre premium de WenDev"
                className="rounded-md"
              />
              <a
                href="https://sienna-bat-190844.builder-preview.com/"
                alt="Site internet fictif de Nathalie Beaulac pour illustrer l'offre premium de WenDev"
                aria-label="Site internet fictif de Nathalie Beaulac pour illustrer l'offre premium de WenDev"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <div className="grid grid-cols-1 place-items-center h-32 bg-pink">
          <button className="place-self-center  border border-pink bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
            <a href="https://calendly.com/wendevweb/premier-rendez-vous"  alt="Redirection vers le portfolio de Wendy Baqué"
              aria-label="Redirection vers la prise de rendez-vous"
              rel="noreferrer"
              target="_blank">Prendre rendez-vous !</a>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default PageOffreAuteurs;
