import React from "react";
import "./partenaires.css";

const Partenaires = () => {
  const partners = [
    {
      id: 1,
      name: "Nono du web",
      service: "Développeur web et formateur",
      website: "https://www.nonoweb17.fr/",
      logo: "https://www.nonoweb17.fr/static/media/logo.4c7d8262a72e29a3bea0.png",
    },
    {
      id: 2,
      name: "GraphArt's",
      service: "Infographiste Metteur en page",
      website: "https://ccgrapharts.wixsite.com/graphart-s?fbclid=PAAabS0o9R4h8O6PcPrk3b9wd_7fRuM6R12Dk906-KLgD2JXXNW0E9TEtvHr8",
      logo: "https://static.wixstatic.com/media/c090d8_0a2787f5c2444bb4aac9cf1b7a7b5104~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20grapharts%20definitif-07.png",
    },
    {
      id: 3,
      name: "Farah D.",
      service: "Ecriture de résumés et bêta-lecture",
      website: "https://www.farahdauteure.com/avis-prestation-beta-lectureresume",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=144,h=144,fit=crop/mv0LN7ebOPipRqNq/logo_noir-removebg-preview-AMq27aX1WwFE7DKJ.png",
    },
    {
      id: 4,
      name: "Annuaire Auto-édités",
      service: "Répertoire des auteurs et des livres en auto-édition. ",
      website: "https://annuaire-auto-edites.johnlucas.fr/",
      logo: "https://annuaire-auto-edites.johnlucas.fr/wp-content/uploads/2021/02/logo.png",
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
                <img src={partner.logo} alt="Logo du partenaire de WenDev" className="p-4"/>
                <h3>{partner.name}</h3>
                <p>{partner.service}</p>
              </div>
              <div className="flip-card-back font-quicksand">
                <img src={partner.logo} alt="Logo du partenaire de WenDev" className="m-4" />
                <h3>{partner.name}</h3>
                <p>{partner.service}</p>
                <button className="border border-white font-bold rounded-md mt-2 p-2 hover:bg-real hover:border-real hover:text-pinkDark">
                  <a
                    href={partner.website}
                    alt="Redirection vers le site web du partenaire de WenDev"
                    aria-label="Redirection vers le site web du partenaire de WenDev"
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
