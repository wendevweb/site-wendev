import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LogoFeelingCreate from "../assets/Logo.svg";
import pourquoi from "../assets/pourquoi.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const FeelingCreate = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Feeling & Create | WenDev</title>
        <link href="https://www.wendev.fr/FeelingCreate" />
      </Helmet>
      <section
        id="fonctionnement"
        aria-label="Bannière de présentation de l'agence Feeling & Create."
      >
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg')",
            height: "600px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  L'agence Feeling & Create
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Depuis Septembre 2024, je fais partie d'une <strong>agence de
                  marketing et de création digitale</strong> pour élargir ma gamme de services et vous proposer un accompagnement holistique à la hauteur de vos ambitions. <br /> Découvrez nos
                  projets et comment travailler avec une équipe
                  pluridisciplinaire !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            <strong>Qui sommes-nous ?</strong>
          </h3>
          <section
            aria-label="Description de l'agence Feeling & Create."
            className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
          >
            <img
              src={LogoFeelingCreate}
              alt=""
              className="lg:h-72 rounded-full p-6"
            />

            <p className="p-6 text-xl tracking-tight">
              Nous croyons fermement que les <strong>meilleurs projets</strong> naissent de la
              <strong>collaboration </strong>entre des talents passionnés et créatifs.
              <br />
              Nous nous entourons des meilleurs <strong>freelances</strong>, pour offrir à nos
              clients des solutions digitales sur-mesure. <br/>
              <h4 className="text-pinkDark font-bold text-xl mt-6 mb-6">
                Nos réseaux :
              </h4>
              <Link
                to="https://feelingandcreate.com/"
                target={"_blank"}
                rel="noreferrer"
                alt="Redirect to website"
                aria-label="Redirect to website"
              >
                <LanguageIcon className="text-pink hover:text-pinkDark mr-2" />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61562417872218"
                target={"_blank"}
                rel="noreferrer"
                alt="Redirect to Facebook"
                aria-label="Redirect to Facebook"
              >
                <FacebookIcon className="text-pink hover:text-pinkDark mr-2" />
              </Link>
              <Link
                to="https://www.instagram.com/fc.agence/"
                target={"_blank"}
                rel="noreferrer"
                alt="Redirect to Instagram"
                aria-label="Redirect to Instagram"
              >
                <InstagramIcon className="text-pink hover:text-pinkDark mr-2" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/feeling-create/about/"
                target={"_blank"}
                rel="noreferrer"
                alt="Redirect to LinkedIn"
                aria-label="Redirect to LinkedIn"
              >
                <LinkedInIcon className="text-pink hover:text-pinkDark mr-2" />
              </Link>
            </p>
          </section>
        </div>
      </Fade>

      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            <strong>
              Pourquoi faire appel à une agence web pour ton projet ?{" "}
            </strong>
          </h3>
          <section
            aria-label="Pourquoi faire appel à une agence web ?"
            className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
          >
            <img src={pourquoi} alt="" className="lg:h-72 rounded-full" />
            <p className="text-xl tracking-tight">
              {" "}
              Vous avez un projet qui nécessite plusieurs corps de métiers et
              vous souhaitez le confier à une équipe de professionnels ? <br/>
              Quoi de
              mieux qu'une <strong>agence spécialisée dans le web et le marketing</strong> pour
              vous accompagner et atteindre vos objectifs ! <br />
              Nous sommes une <strong>équipe de passionnés</strong> au service de vos projets et
              nous vous proposons des <strong>solutions adaptées à vos besoins</strong>.
              <br />
              Créativité, orientation client, résultats et continuité dans notre
              accompagnement sont nos leitmotivs ! <br />
              Nous vous proposons des services de <strong>création de site, stratégie
              marketing, statégie de communication, identité de marque, SEO
              Booster et audit de site internet.</strong>
              <br />
              <button className="lg:w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white mr-6">
                <a
                  href="https://feelingandcreate.com/"
                  alt="Redirection vers le site de l'agence web Feeling & Create."
                  aria-label="Redirection vers le site de l'agence web Feeling & Create."
                  rel="noreferrer"
                  target="_blank"
                >
                  Visiter notre site
                </a>
              </button>
              <button className="lg:w-fit mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <a
                  href="https://feelingandcreate.com/services/"
                  alt="Redirection vers la page des services de l'agence web Feeling & Create."
                  aria-label="Redirection vers la page des services de l'agence web Feeling & Create."
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir nos services
                </a>
              </button>
            </p>
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default FeelingCreate;
