import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "../components/hero.css";
import error from "../assets/404.webp";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found | WenDev</title>
        <link href="https://wendev.fr/*" />
      </Helmet>
      <div className="background-radial-gradient-hero overflow-hidden h-screen">
        <div className=" px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-32 ">
            <div className="lg:grid lg:grid-cols-2 gap-16 flex items-center pt-48">
              <img src={error} alt="" />
              <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                  <h2 className="mb-2 text-4xl font-bold text-center text-black md:text-3xl">
                    <span className="text-pinkDark">Oops !</span> <br />
                    Page not found...
                  </h2>
                  <p className="mb-8 text-center text-black md:text-lg">
                    La page que tu recherches n'existe pas...
                  </p>
                  <p className="mb-8 text-center text-black md:text-lg">
                    Tu vas être directement redirigé à l'accueil dans quelques
                    secondes !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
