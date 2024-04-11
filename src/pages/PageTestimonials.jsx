import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Testimonials from "../components/TestimonialsAll";

const Temoignages = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Témoignages | WenDev</title>
        <link href="https://www.wendev.fr/Temoignages" />
      </Helmet>
      <section aria-label="Bannière de présentation du déroulement d'un projet avec WenDev.">
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
                  Témoignages <br />
                  <strong className="text-pinkDark"> de mes clients</strong>
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Certains clients ont eu la gentillesse de prendre quelques
                  minutes de leur temps précieux pour me rédiger une
                  recommandation. <br /> Je vous laisse les découvrir. <br />{" "}
                  Pour plus d'informations, vous pouvez contacter mes clients,
                  via leur <strong>site internet</strong> !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <Testimonials />
        </div>
      </Fade>
    </div>
  );
};

export default Temoignages;
