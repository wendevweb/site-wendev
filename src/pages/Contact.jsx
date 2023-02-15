import React from "react";
import { Helmet } from "react-helmet";
// import Airtable from "../components/AirtableForm";
// import Calendly from "../components/Calendly";
import JotformContact from "../components/JotformContact";

const Contact = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col mt-10">
        <h2 className="text-pink text-2xl text-center">Contactons-nous !</h2>
        {/* <Airtable /> */}
        <JotformContact />
      </div>
      {/* <div className="flex flex-col mt-10">
        <h2 className="text-pink text-2xl text-center ">
          Rencontrons-nous !
        </h2>
        <Calendly />
        <button className="w-96 mb-6 self-center text-white bg-pink hover:bg-pinkDark font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">
          <a href="" alt="Redirection vers le formulaire de demande de devis">
            Demande un devis sans prendre de rendez-vous
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default Contact;
