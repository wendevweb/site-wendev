import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Testimonials from "../components/TestimonialsAll";

const Temoignages = () => {
  return (
    <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Témoignages | WenDev</title>
        <link href="https://www.wendev.fr/Temoignages" />
      </Helmet>
      <section>
        <h2 className="font-quicksand text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-pinkDark">
          Témoignages de mes clients{" "}
        </h2>
        <p className="tracking-tight	">
          Certains clients ont eu la gentillesse de prendre quelques minutes de
          leur temps précieux pour me rédiger une recommandation. Je vous laisse
          les découvrir. <br />
          Pour plus d'informations, vous pouvez contacter mes clients, via leur
          site internet !
        </p>
      </section>
      <Fade>
        <Testimonials />
      </Fade>
    </div>
  );
};

export default Temoignages;
