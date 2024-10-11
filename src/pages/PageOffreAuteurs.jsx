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
import Jc from "../assets/jc.webp";
import Alberte from "../assets/Alberte.webp";
import Nathalie from "../assets/Nathalie.webp";
import Cleo from "../assets/Cléo_Ballatore-removebg-preview.webp";
import Beatrice from "../assets/Béatrice_Mas-removebg-preview.webp";
import Freebie from "../components/Freebie";
import Rdv from "../components/Rdv";
import AddIcon from "@mui/icons-material/Add";
import BettySeo from "../components/BettySeo";

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
                  <br /> Avec moi, finie la charge mentale de la mise à jour de
                  votre site ! Je m'occupe de tout de A à Z.
                </p>
                <div className="grid grid-cols-1 place-items-center">
                  <button className="mt-10 mb-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white w-fit">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <Freebie />
      </Fade>
      <Fade>
        <section
          aria-label="Grille tarifaire pour l'offre spéciale auteurs de livres."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
        >
          <OffresAuteurs />
        </section>
      </Fade>

      <Fade>
        <section
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
          aria-label="Les options"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Et en option pour chaque offre :
          </h3>
          <ul className="mb-8 space-y-4 text-left">
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Formulaire d'achat en ligne, via PayPal, une bonne alternative à
                la boutique en ligne : <span className="font-bold">40€</span>.{" "}
                <a
                  href="https://www.virginierogerauteure.com/#commandes"
                  alt="Redirection le site d'exemple"
                  aria-label="Redirection vers le site d'exemple"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pinkDark hover:font-bold text-decoration-line: underline"
                >
                  Voir un exemple.
                </a>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Nom de domaine personnalisé et hébergement pour 1 an,
                renouvelable : <span className="font-bold">20€/an</span>, en
                supplément. Sinon, url non personnalisable, par défaut.
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                paramétrage et redirection d'un nom de domaine déjà acheté chez
                un hébergeur (OVH, Hostinger, O2Switch...) :
                <span className="font-bold"> 20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Page supplémentaire : <span className="font-bold">20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Recherche d'éléments graphiques (polices, visuels, images libres
                de droit) : <span className="font-bold">20€</span>
              </span>
            </li>
            <li>
              <AddIcon style={{ color: "magenta" }} />
              <span>
                Site en plusieurs langues (textes traduits à fournir) :{" "}
                <span className="font-bold">20€/langue</span>
              </span>
            </li>
          </ul>
        </section>
      </Fade>
      <section
        className="mb-10"
        aria-label="Comment se déroule un projet avec Wendev"
      >
        <ButtonFonctionnement />
      </section>
      <Fade>
        <BettySeo />
      </Fade>

      <Fade>
        <section
          aria-label=" Exemples de réalisations de sites web pour les auteurs de livres, par WenDev."
          className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
        >
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            Exemples de réalisations
          </h3>
          <div className="lg:grid grid-cols-3 gap-4">
            {/* BEATRICE MAS */}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Beatrice}
                alt="Site internet de Béatrice Mas, auteure, qui a choisi l'offre Ultra+"
                aria-label="Site internet de Béatrice Mas, auteure, qui a choisi l'offre Ultra+"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.beatricemasautrice.fr/"
                  alt="Site internet de Béatrice Mas, auteure, qui a choisi l'offre Ultra+"
                  aria-label="Site internet de Béatrice Mas, auteure, qui a choisi l'offre Ultra+"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
            {/* CLEO BALLATORE*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Cleo}
                alt="Site internet de Cléo Ballatore, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Cléo Ballatore, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.cleoballatore.com/"
                  alt="Site internet de Cléo Ballatore, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet de Cléo Ballatore, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>
            {/* NATHALIE HELDE*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Nathalie}
                alt="Site internet de Nathalie Heldé, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Nathalie Heldé, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.nathaliehelde.fr/"
                  alt="Site internet de Nathalie Heldé, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet de Nathalie Heldé, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>

            {/* ELISA ALBERTE*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Alberte}
                alt="Site internet d'Elisa Alberte, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisa Alberte, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.elisaalberteautrice.ch/"
                  alt="Site internet d'Elisa Alberte, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet d'Elisa Alberte, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* JC STAIGNIER*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Jc}
                alt="Site internet de JC Staignier, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de JC Staignier, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.jcstaignierauteure.com/"
                  alt="Site internet de JC Staignier, auteure, qui a choisi l'offre Premium"
                  aria-label="Site internet de JC Staignier, auteure, qui a choisi l'offre Premium"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir le site !
                </a>
              </button>
            </div>

            {/* SISSY BATZY*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Sissy}
                alt="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Sissy Batzy, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Loriot}
                alt="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Anne-Sophie Loriot, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Nicolas}
                alt="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Nicolas Pellolio, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Olivier}
                alt="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet d'Olivier Wisler, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Florent}
                alt="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Florent Barthel, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Kay}
                alt="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                aria-label="Site internet de Kay Norde, autrice, graphiste et illustratrice, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://www.kaynorde.com"
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elisabet}
                alt="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisabet Guillot, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>

            {/* FARAH D. */}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Farah}
                alt="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet de Farah D, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
              <p className="mt-10">Avec option formulaire PayPal</p>
            </div>

            {/* ALEXANDRA ROCH*/}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Andraroc}
                alt="Site internet d'alexandra Roch, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Alexandra Roch, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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

            {/* ELISA AVRAIN */}
            <div className="overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elisa}
                alt="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elisa Avrain, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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

            {/* VIRGINIE ROGER */}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Virginie}
                alt="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Virginie Roger, qui a choisi l'offre Standard pour les auteurs de WenDev."
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Lea}
                alt="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                aria-label="Site internet de Léa Samson, qui a choisi l'offre Standard pour les auteurs de WenDev."
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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

            {/* ELSA ERRACK */}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Elsa}
                alt="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                aria-label="Site internet d'Elsa Errack, auteure, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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

            {/* FRANCK J. MATTHEWS */}
            <div className="overflow-hidden flex flex-col items-center mx-auto max-w-lg text-center text-black rounded-lg ">
              <img
                src={Franck}
                alt="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                aria-label="Site internet de Franck J. Matthews, auteur, qui a choisi l'offre Premium"
                className="rounded-md"
              />
              <button className="w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
          </div>
        </section>
      </Fade>

      <div className="grid justify-items-center">
        <Rdv />
      </div>
    </div>
  );
};

export default PageOffreAuteurs;
