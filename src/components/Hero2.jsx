/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import img from "../assets/wendywildcodeschool.webp";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Hero2 = () => {
  return (
    <header className="bg-gradient-to-r from-purple via-pinkDark to-pink dark:bg-black">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-white drop-shadow-sm max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <strong>WenDev</strong>,
          </h1>
          <br />
          <Fade triggerOnce cascade="true" direction="left" duration={1000}>
            <h2 className="text-white drop-shadow-sm	 max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              la WebDev <br /> des <strong>auteurs de livres</strong> !
            </h2>
          </Fade>

          <p className="tracking-tight text-2xl pt-4 pb-4 max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Je vous accompagne dans la promotion de vos produits et services littéraires sur le web, en créant un <strong>site internet</strong> qui vous ressemble.
         <br/> Faites appel à une <strong>développeuse web professionnelle</strong> et <strong>auteure de romans</strong> assurer votre présence en ligne.</p>
          <div className="drop-shadow-2xl">
            <Link
              to="https://calendly.com/wendevweb/premier-rendez-vous"
              target={"_blank"}
            >
              <button className="text-xl border-solid border-2 border-pinkDark shadow-lg bg-white text-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                <EventAvailableIcon />
                Prendre rendez-vous
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={img} alt="mockup" className="rounded-full shadow-lg w-96 mb-6"/>
        </div>
      </div>
    </header>
  );
};
export default Hero2;
