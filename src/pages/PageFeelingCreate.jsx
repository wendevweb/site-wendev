import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LogoFeelingCreate from "../assets/Logo.svg";
import wendev2 from "../assets/wendev-2.webp";
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
            backgroundImage: "url('https://i.goopics.net/ay4x9z.png')",
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
                  Depuis Septembre 2024, je fais partie d'une agence de
                  marketing et de création digitale. <br /> Découvrez nos
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
            className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3"
          >
            <img
              src={LogoFeelingCreate}
              alt=""
              className="h-fit rounded-full"
            />
            
            <p>blablabla</p>
            <div aria-label="Redirection vers les réseaux sociaux de l'agence Feeling & Create.">
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
            </div>
          </section>
        </div>
      </Fade>
      
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
            <strong>Pourquoi faire appel à une agence web ? </strong>
          </h3>
          <section
            aria-label="Pourquoi faire appel à une agence web ?"
            className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
          >
            <img src={wendev2} alt="" className="h-fit" />
            <p>Blablabla</p>
            <button className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
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
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default FeelingCreate;
