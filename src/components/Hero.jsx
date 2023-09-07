/* eslint-disable no-lone-blocks */
import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import img from "../assets/wendev.png"
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import JotformNewsletter from "./JotformNewsletter";

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
                  Besoin d'un nouveau site internet ou de redonner un coup de
                  neuf à un site existant ? D'une page d'authentification ? D'un
                  portfolio personnel ou professionnel ? D'une maquette pour le
                  web ? Tu es auteur.e et tu souhaites avoir ton site internet
                  comme un pro ? <br />
                  <br />
                  Fais appel à une développeuse web qualifiée pour donner vie à
                  toutes tes envies numériques !
                </p>
              </div>
            </Fade>
            <div className="mb-12 lg:mb-0 relative">
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              ></div>
              <div id="radius-shape-2" className="absolute shadow-lg"></div>
              {/* <JotformNewsletter /> */}
              <div className="flex flex-col p-4 ">
              <img src={img} alt="" className="sticky"></img>
                <h2 className="text-center p-6 text-xl text-white relative">
                  <ArrowDropDownIcon className="text-pinkDark animate-bounce" />
                  Restons connectés !
                  <ArrowDropDownIcon className="text-pinkDark animate-bounce" />
                </h2>
                <div className="flex justify-around drop-shadow-lg">
                <Link
                    to="https://wendevweb.systeme.io/inscription"
                    target={"_blank"}
                  >
                    <MarkEmailUnreadIcon className="text-white hover:text-pinkDark mr-2" />
                  </Link>
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
            
            <div className="drop-shadow-2xl flex items-center justify-center animate-bounce">
              <Link
                to="https://calendly.com/wendevweb/premier-rendez-vous"
                target={"_blank"}
              >
                <button className="shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                  <EventAvailableIcon />
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
