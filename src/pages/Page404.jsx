import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import error from "../assets/404.webp";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found | WenDev</title>
        <link href="https://www.wendev.fr/*" />
      </Helmet>
      <div className="bg-gradient-to-r from-purple via-pinkDark to-pink dark:bg-black overflow-hidden">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
          <div>
            <div className="lg:grid lg:grid-cols-2 gap-16 flex items-center">
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
