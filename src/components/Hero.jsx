/* eslint-disable no-lone-blocks */
import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import JotformNewsletter from "./JotformNewsletter";

const Hero = () => {
  return (
    <header className="background-radial-gradient-hero overflow-hidden">
      <div className=" px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
        <div className="container mx-auto xl:px-32 ">
          <div className="grid lg:grid-cols-2 gap-16 flex items-center">
            <Fade triggerOnce cascade="true" direction="left" duration={1000}>
              <div className="mt-32 z-10 font-quicksand ">
                <h1 className="text-purple sm:text-6xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                  WenDev ,<br />
                </h1>
                <h2 className="text-white lg:text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight ">
                  Pour créer ton site internet
                </h2>
                <h2 className="text-pink lg:text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight mb-6">
                  sur mesure !
                </h2>
                <p className="font-quicksand text-xl text-white opacity-70">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, expedita iusto veniam atque, magni tempora
                  mollitia dolorum consequatur nulla, neque debitis eos
                  reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>
            </Fade>
            <div className="mb-12 lg:mb-0 relative">
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              ></div>
              <div id="radius-shape-2" className="absolute shadow-lg"></div>
              <JotformNewsletter />
              <div className="flex flex-col p-4 ">
                <h2 className="text-center p-6 text-xl text-white">
                  <ArrowDropDownIcon className="text-pinkDark animate-bounce" />
                  Restons connectés !
                  <ArrowDropDownIcon className="text-pinkDark animate-bounce" />
                </h2>
                <div className="flex justify-around drop-shadow-md">
                  <Link
                    to="https://www.facebook.com/WenDevWeb"
                    target={"_blank"}
                  >
                    <FacebookIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/wendevweb/"
                    target={"_blank"}
                  >
                    <InstagramIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/92696774/admin/"
                    target={"_blank"}
                  >
                    <LinkedInIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
                  <Link to="https://github.com/wendevweb" target={"_blank"}>
                    <GitHubIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
                  <Link
                    to="https://wendybaqueauteure.wendev.fr/"
                    target={"_blank"}
                  >
                    <AutoStoriesIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

// eslint-disable-next-line no-lone-blocks
// ANCIEN FORMULAIRE
{
  /* <div className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                <h2 className="text-center p-6 text-2xl text-black">
                  Inscris-toi à la newsletter pour bénéficier d'offres
                  exclusives !
                </h2>
                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                      <input
                        type="text"
                        className="focus:invalid:border-pink focus:invalid:ring-pink shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 text-base font-quicksand text-black bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                        placeholder="Ton joli prénom"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="focus:invalid:border-pink focus:invalid:ring-pink shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 text-base font-quicksand text-black bg-white bg-clip-padding  rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                        placeholder="Ton super nom de famille"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="focus:invalid:border-pink focus:invalid:ring-pink shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 mb-6 text-base font-quicksand text-black bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                    placeholder="Ton e-mail de la mort qui tue !"
                  />
                  <div className="form-check flex justify-center mb-6">
                    <input
                      className="focus:invalid:border-pink focus:invalid:ring-pink font-quicksand form-check-input appearance-none h-4 w-4 rounded-sm bg-white checked:bg-pink checked:border-purple focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label
                      className="form-check-label inline-block text-black font-quicksand"
                      for="flexCheckChecked"
                    >
                      Je m'inscris à la newsletter
                    </label>
                  </div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="font-quicksand inline-block px-6 py-2.5 mb-6 w-full bg-pink text-white font-medium text-lg leading-tight uppercase rounded shadow-md focus:shadow-lg hover:bg-pinkDark hover:shadow-lg focus:bg-pink focus:text-white focus:outline-none focus:ring-0 active:bg-pinkDark active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ENVOYER
                  </button>
                </form>
                
              </div> */
}
