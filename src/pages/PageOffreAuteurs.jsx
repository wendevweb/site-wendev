import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import OffresAuteurs from "../components/OffresAuteurs";
import RedeemIcon from "@mui/icons-material/Redeem";
import Farah from "../assets/Farah.webp";
import Andraroc from "../assets/Andraroc.webp";
import Franck from "../assets/franck.webp";
import Elisa from "../assets/Elisa.webp";
import Elisabet from "../assets/Elisabet.webp";
import Kay from "../assets/Kay.webp";
import Lea from "../assets/Lea.webp";
import Elsa from "../assets/Elsa.webp";
import Florent from "../assets/Florent.webp";
import Freebie from "../components/Freebie"

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
              "url('https://images.pexels.com/photos/796603/pexels-photo-796603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
                <p className="font-light text-white sm:text-xl">
                  Tu écris des livres et tu souhaites avoir un site web
                  professionnel dédié à ton activité ? <br /> Moi aussi, je suis
                  auteure et suis passée par là.
                  <br /> Alors cette offre est faite pour toi ! <br />
                  <br />
                  Je te propose une bonne alternative à une boutique
                  e-commerce... sans les frais habituels !
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
        <Freebie />
      </Fade>
      <Fade>
        <div className="grid grid-cols-1 place-items-center h-32 bg-pink">
          <button className="place-self-center  border border-pink bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
            {" "}
            <RedeemIcon />
            <a
              href="https://annuaire-auto-edites.johnlucas.fr/partenaires/"
              alt="Redirection vers l'annuaire Auto-édités"
              aria-label="Redirection vers l'annuaire Auto-édités"
              target="_blank"
              rel="noreferrer"
            >
              Bénéficie de -10% en étant référencé ici
            </a>
          </button>
        </div>
      </Fade>

      <Fade>
        <section className="font-quicksand lg:flex flex-col justify-center items-center">
          <h3 className="pt-6 text-pink text-2xl text-center mb-4">
            Exemples de réalisations et démos{" "}
          </h3>
          <h4 className="font-quicksand text-center uppercase text-pinkDark text-2xl font-bold">
            Offre premium
          </h4>

          <div className="lg:grid grid-flow-row-dense grid-cols-3 grid-rows-2 p-4 items-center mb-6">
            {/* FLORENT BARTHEL*/}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Florent}
                alt="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.florentbarthelauteur.com/"
                alt="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>

            {/* KAY NORDE*/}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Kay}
                alt="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                aria-label="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.kaynorde.com/"
                alt="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                aria-label="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>

            {/* ELISABET GUILLOT*/}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Elisabet}
                alt="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.elisabetguillot.com/"
                alt="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* ELSA ERRACK */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Elsa}
                alt="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.elsaerrackauteure.com/"
                alt="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* FARAH D. */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Farah}
                alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
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
                src={Andraroc}
                alt="Site internet d'alexandra Roch, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
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
            {/* FRANCK J. MATTHEWS */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Franck}
                alt="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.franckjmatthews.com/"
                alt="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
            {/* ELISA AVRAIN */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Elisa}
                alt="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <a
                href="https://www.elisaavrainauteure.fr"
                alt="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
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
            Offre Standard
          </h4>
          <div className="lg:flex flex-row p-4 items-center ">
            {/* LEA SAMSON */}
            <div className="lg:flex flex-col p-4 items-center ">
              <img
                src={Lea}
                alt="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                className="rounded-md"
              />
              <a
                href="https://www.leasamsonauteure.fr/"
                alt="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                rel="noreferrer"
                target="_blank"
              >
                <button className="w-56  bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
                  Voir le site !
                </button>
              </a>
            </div>
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
                  Voir la démo !
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
                  Voir la démo !
                </button>
              </a>
            </div>
          </div>

          <h4 className="font-quicksand text-center uppercase text-pinkDark text-2xl font-bold">
            Offre Basic
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
                  Voir la démo !
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
                  Voir la démo !
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
                  Voir la démo !
                </a>
              </button>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <div className="grid grid-cols-1 place-items-center h-32 bg-pink">
          <button className="place-self-center  border border-pink bg-real font-bold rounded-md shadow-lg mt-2 p-2 hover:bg-pinkDark hover:text-white">
            <a
              href="https://calendly.com/wendevweb/premier-rendez-vous"
              alt="Redirection vers le portfolio de Wendy Baqué"
              aria-label="Redirection vers la prise de rendez-vous"
              rel="noreferrer"
              target="_blank"
            >
              Prendre rendez-vous !
            </a>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default PageOffreAuteurs;
