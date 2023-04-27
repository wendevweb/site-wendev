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
                <h1 className="text-pinkDark xl:text-7xl font-bold tracking-tight mb-6">
                  WenDev ,<br />
                </h1>
                <h2 className="text-white lg:text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight ">
                  Des solutions numériques
                </h2>
                <h2 className="text-pink lg:text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight mb-6">
                  sur mesure !
                </h2>
                <p className="font-quicksand text-xl text-white opacity-70">
                  Besoin d'un nouveau site internet ou de redonner un coup de neuf à un site existant ? D'une page d'authentification ? D'une application mobile no-code ? D'une maquette pour le web ? Tu es auteur.e et tu souhaites avoir ton site internet comme un pro ? <br /><br />Fais appel à une développeuse web qualifiée pour donner vie à toutes tes envies numériques !
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
                <h2 className="text-center p-6 text-xl text-white relative">
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
            <a href="#intro" alt="redirection vers la section à propos">
                <div className="drop-shadow-2xl flex items-center justify-center animate-bounce">
                  <svg
                    width="80px"
                    height="80px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C12.5523 7 13 7.44772 13 8V13.5858L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858V8C11 7.44772 11.4477 7 12 7Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
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
