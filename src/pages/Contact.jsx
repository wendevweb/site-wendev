import React from "react";
import { Helmet } from "react-helmet";
// import Airtable from "../components/AirtableForm";
import Calendly from "../components/Calendly";
import JotformContact from "../components/JotformContact";

const Contact = () => {
  return (
    <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | WenDev</title>
        <link href="https://www.wendev.fr/Contact" />
      </Helmet>
      <section id="contact" className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
        <div>
          <h2 className="font-quicksand text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-pinkDark">
            Rencontrons-nous !
          </h2>
          <button className="self-center mt-10 mb-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            <a
              href="https://forms.gle/CLK88Hz5eKFGXZFr7"
              alt="Redirection vers le formulaire de demande de devis"
              aria-label="Redirection vers le formulaire de demande de devis"
              rel="noreferrer"
              target="_blank"
            >
              Demandez un devis sans prendre de rendez-vous
            </a>
          </button>
        </div>

        <Calendly />
      </section>
      <section >
        {/* <Airtable /> */}
        <JotformContact />
      </section>
    </div>
  );
};

export default Contact;
