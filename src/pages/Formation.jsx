import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Formation = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Formation | WenDev</title>
        <link href="https://wendev.fr/Formation" />
      </Helmet>
      <Fade>
        <section>
          <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
            Je suis aussi formatrice !
          </h2>
        </section>
      </Fade>
    </div>
  );
};

export default Formation;