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
      <section
        id="contact"
        className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
      >
        <div>
          <h2 className="text-pinkDark font-bold text-4xl">Rencontrons-nous</h2>
          <button className="mt-6 mb-6  border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            <a
              href="https://form.jotform.com/wendevweb/contact"
              alt="Redirection vers le formulaire de contact"
              aria-label="Redirection vers le formulaire de contact"
              rel="noreferrer"
              target="_blank"
            >
              Je préfère écrire un petit mot... ✍️
            </a>
          </button>
        </div>
        <Calendly />
      </section>
      <section>
        {/* <Airtable /> */}
        <div>
          <h2 className="text-pinkDark font-bold text-4xl">
            Contacte-moi pour toute question
          </h2>
        </div>
        <JotformContact />
        <p className="mt-4">
          * Nous avons besoin de ces informations pour pouvoir vous répondre
          dans les meilleures conditions. Vos données personnelles ne seront
          jamais utilisées à des fins commerciales ni diffusées. Vous pouvez à
          tout moment exercer vos droits Informatiques et Libertés en envoyant
          un message à contact@wendev.fr .
        </p>
      </section>
    </div>
  );
};

export default Contact;
