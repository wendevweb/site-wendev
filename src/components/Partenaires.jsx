import React from "react";
import "./partenaires.css";

const Partenaires = () => {
  const partners = [
    {
      id: 1,
      name: "Grimoire Numérique",
      service: "Création de sites internet à La Réunion",
      website: "https://grimoire-numerique.re/",
      logo: "https://grimoire-numerique.re/assets/favicon.d78533d4.png",
    },
    {
      id: 1,
      name: "Grimoire Numérique",
      service: "Création de sites internet à La Réunion",
      website: "https://grimoire-numerique.re/",
      logo: "https://grimoire-numerique.re/assets/favicon.d78533d4.png",
    },
    {
      id: 1,
      name: "Grimoire Numérique",
      service: "Création de sites internet à La Réunion",
      website: "https://grimoire-numerique.re/",
      logo: "https://grimoire-numerique.re/assets/favicon.d78533d4.png",
    },
    {
      id: 1,
      name: "Grimoire Numérique",
      service: "Création de sites internet à La Réunion",
      website: "https://grimoire-numerique.re/",
      logo: "https://grimoire-numerique.re/assets/favicon.d78533d4.png",
    },
  ];
  return (
    <div className="lg:m-10 p-10">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Mes super partenaires à votre service !
      </h3>
      <p className="text-black font-quicksand text-center mb-6">
        Il est temps de voir ton projet en grand ! Et si tu faisais appel à mes partenaires de fconfiance, avec lesquels je partage mes valeurs et ma manière de travailler ? Je te propose un large choix de professionnels à ton écoute.
      </p>
      <div className="pt-10 lg:grid grid-cols-4 gap-2">
        {partners.map((partner) => (
          <div key={partner.id} className="flip-card ml-6 mr-6 font-quicksand">
            <div className="flip-card-inner ">
              <div className="flip-card-front">
                <img src={partner.logo} alt="Logo du partenaire de WenDev" />
                <h3>{partner.name}</h3>
                <p>{partner.service}</p>
              </div>
              <div className="flip-card-back font-quicksand">
                <img src={partner.logo} alt="Logo du partenaire de WenDev" />
                <h3>{partner.name}</h3>
                <p>{partner.service}</p>
                <button className="border border-white font-bold rounded-md shadow-md mt-2 p-2 hover:bg-pinkDark">
                  <a
                    href={partner.website}
                    alt="Redirection vers le site web du partenaire de WenDev"
                    target="_blank"
                    rel="noreferrer"
                  >Voir son site</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;

//
//   <div className="flip-card-inner">
