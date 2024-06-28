import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import OffresAuteurs from "../components/OffresAuteurs";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import Farah from "../assets/Farah.webp";
import Andraroc from "../assets/Andraroc.webp";
import Franck from "../assets/matthews.webp";
import Elisa from "../assets/Elisa.webp";
import Elisabet from "../assets/Elisabet.webp";
import Kay from "../assets/Kay.webp";
import Lea from "../assets/Lea.webp";
import Elsa from "../assets/Elsa.webp";
import Florent from "../assets/Florent.webp";
import Olivier from "../assets/Olivier.webp";
import Virginie from "../assets/virginie.webp";
import Nicolas from "../assets/Nicolas.webp";
import Loriot from "../assets/Loriot.webp";
import Sissy from "../assets/Sissy.webp";
import Freebie from "../components/Freebie";
import Rdv from "../components/Rdv";

const PageOffreAuteurs = () => {
  return (
    <div className="font-quicksand">
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
            height: "600px",
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
                  <strong className="text-pinkDark">auteurs</strong>
                </h2>
                <p className="text-white sm:text-xl">
                  Vous écrivez des livres et souhaitez avoir un site web
                  professionnel dédié à votre activité ? <br /> Moi aussi, je
                  suis auteure et suis passée par là. <br /> J'ai mis en place
                  trois offres accessibles et adaptées à vos besoins pour
                  promouvoir votre univers littéraire et le partager autour de
                  vous.
                  <br />
                  Je vous propose une bonne alternative à une boutique
                  e-commerce... sans les frais habituels ! 😉
                  <br/> Avec moi, finie la charge mentale de la mise à jour de votre site ! Je m'occupe de tout de A à Z.
                </p>
                {/* <div className="grid grid-cols-1 place-items-center">
                  <button className="mt-10 mb-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                    <a
                      href="https://www.cardebook.net/post/d%C3%A9veloppez-votre-pr%C3%A9sence-litt%C3%A9raire-pourquoi-chaque-auteur-devrait-avoir-un-site-web"
                      alt="Redirection vers l'article de Cardebook"
                      aria-label="Redirection vers l'article de Cardebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lire l'article : Pourquoi chaque auteur devrait avoir un
                      site web.
                    </a>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fade>
        <section
          aria-label="Grille tarifaire pour l'offre spéciale auteurs de livres."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffresAuteurs />
        </section>
      </Fade>
      <section
        className="mb-10"
        aria-label="Comment se déroule un projet avec Wendev"
      >
        <ButtonFonctionnement />
      </section>

      <Fade>
        <Freebie />
      </Fade>

      <Fade>
        <section className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Exemples de réalisations et démos{" "}
          </h3>
          <h4 className="text-pinkDark text-2xl mt-6 mb-6">
            Offre premium, l'offre préférée des auteurs !
          </h4>
          <div className="lg:grid grid-cols-3 gap-4">
            {/* SISSY BATZY*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Sissy}
                alt="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.sissy-batzy.com/"
                  alt="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>

            {/* ANNE-SOPHIE LORIOT*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Loriot}
                alt="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.annesophieloriotauteure.com/"
                  alt="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>

            {/* NICOLAS PELLOLIO*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Nicolas}
                alt="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.nicolaspellolio.com/"
                  alt="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                  aria-label="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* OLIVIER WISLER*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Olivier}
                alt="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.sagasyane.net/"
                  alt="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* FLORENT BARTHEL*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Florent}
                alt="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.florentbarthelauteur.com/"
                  alt="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                  aria-label="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* KAY NORDE*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Kay}
                alt="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                aria-label="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.kaynorde.com/portfolio"
                  alt="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                  aria-label="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* ELISABET GUILLOT*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elisabet}
                alt="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.elisabetguillot.com/"
                  alt="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* ELSA ERRACK */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elsa}
                alt="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.elsaerrackauteure.com/"
                  alt="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* FARAH D. */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Farah}
                alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.farahdauteure.com"
                  alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* ALEXANDRA ROCH*/}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Andraroc}
                alt="Site internet d'alexandra Roch, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.alexandraroch.com/"
                  alt="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* FRANCK J. MATTHEWS */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Franck}
                alt="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.franckjmatthews.com/"
                  alt="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                  aria-label="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* ELISA AVRAIN */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elisa}
                alt="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.elisaavrainauteure.fr"
                  alt="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
          </div>
          <h4 className="text-pinkDark text-2xl mt-6 mb-6">Offre Standard</h4>
          <div className="lg:grid grid-cols-3 gap-4">
            {/* VIRGINIE ROGER */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Virginie}
                alt="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.virginierogerauteure.com/"
                  alt="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                  aria-label="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>
            {/* LEA SAMSON */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Lea}
                alt="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.leasamsonauteure.fr/"
                  alt="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                  aria-label="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* DOM TERRENCE */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src="https://i.goopics.net/lbuaht.png"
                alt="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                aria-label="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://hotpink-cobra-376869.builder-preview.com/"
                  alt="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                  aria-label="Site internet fictif de Dom Terrence pour illustrer l'offre medium de WenDev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir la démo !
                </a>
              </button>
            </div>
          </div>
          <h4 className="text-pinkDark text-2xl mt-6 mb-6">Offre Basic</h4>
          <div className="lg:grid grid-cols-3 gap-4">
            {/* JEROME MULLER */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src="https://i.goopics.net/t8qp4y.png"
                alt="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://lightcyan-tiger-770474.builder-preview.com/"
                  alt="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                  aria-label="Site internet fictif de Jérôme Muller pour illustrer l'offre basic de WenDev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir la démo
                </a>
              </button>
            </div>
            {/* LUC HORLA */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src="https://i.goopics.net/lxccuk.png"
                alt="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Luc Horla pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src="https://i.goopics.net/7s7i56.png"
                alt="Site internet fictif de Tomas Carlier pour illustrer l'offre basic de WenDev"
                aria-label="Site internet fictif de Tomas Carlier pour illustrer l'offre basic de WenDev"
                className="rounded-md"
              />
              <button className="w-full mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
        <section
          aria-label="Un petit mot sur mes tairfs"
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Un petit mot sur mes tarifs...{" "}
          </h3>
          <p className="text-xl tracking-tight">
            En tant que développeuse web indépendante/freelance, je détermine le
            prix de mes prestations en fonction du coût de mon travail, le temps
            passé à sa réalisation, je m’adapte à des demandes différentes et je
            me place face à la concurrence. C’est un travail de création ! Et
            tout travail mérite salaire, non ? 😉 En choisissant de travailler
            avec un développeur web, vous accédez à un service personnalisé
            d’une flexibilité et d’une liberté qui n’ont rien à voir avec celles
            proposées par une agence ou une embauche d’un salarié.
          </p>
        </section>
      </Fade>
      <div className="grid justify-items-center">
        <Rdv />
      </div>
    </div>
  );
};

export default PageOffreAuteurs;
