import React from "react";
import "./partenaires.css";

const Partenaires = () => {
  const partners = [
    {
      id: 1,
      name: "Nono du web",
      service: "Développeur web, copywriter et formateur",
      website: "https://www.nonoweb17.fr/",
      logo: "https://www.nonoweb17.fr/assets/logo-97c07f1d.png",
    },
    {
      id: 2,
      name: "GraphArt's",
      service: "Infographiste Metteur en page",
      website: "https://ccgrapharts.wixsite.com/graphart-s?fbclid=PAAabS0o9R4h8O6PcPrk3b9wd_7fRuM6R12Dk906-KLgD2JXXNW0E9TEtvHr8",
      logo: "https://i.goopics.net/brcvle.png",
    },
    {
      id: 3,
      name: "Farah D.",
      service: "Ecriture de résumés et bêta-lecture",
      website: "https://www.farahdauteure.com/avis-prestation-beta-lectureresume",
      logo: "https://i.goopics.net/hzqhgj.png",
    },
    {
      id: 4,
      name: "Annuaire Auto-édités",
      service: "Répertoire des auteurs et des livres en auto-édition. ",
      website: "https://annuaire-auto-edites.johnlucas.fr/",
      logo: "https://annuaire-auto-edites.johnlucas.fr/wp-content/uploads/2021/02/logo.png",
    },
    {
      id: 5,
      name: "Métavers facile",
      service: "Architecte métavers 2d, créateur de bureaux et événements virtuels.",
      website: "https://www.vanhille.fr",
      logo: "https://vanhille.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c817013-9bb3-4026-8b4d-2412233dcbfe%2Fprofile-pic4.png?table=block&id=71b7aa7d-9127-4e53-ae63-2af2a669dcb3&spaceId=e4a3b1de-7a81-4268-95d9-73d0920f3acc&width=250&userId=&cache=v2",
    },
    {
      id: 6,
      name: "Franck J. Matthews",
      service: "Coach littéraire",
      website: "https://www.franckjmatthews.com/coaching-litteraire",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/AoPZ2xegaQt8NqLy/fjm-AE02QeowRjhqkRWy.png",
    },
    {
      id: 7,
      name: "Cardebook",
      service: "Des cartes à flasher contenant un ouvrage numérique/videos/audios etc.",
      website: "https://www.cardebook.net",
      logo: "https://i.goopics.net/t5h0ss.jpg",
    },
    
  ];
  return (
    <div className="lg:m-10 p-10">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Mes super partenaires à votre service !
      </h3>
      <p className="text-black font-quicksand text-center mb-6">
        Il est temps de voir ton projet en grand ! Et si tu faisais appel à mes partenaires de fconfiance, avec lesquels je partage mes valeurs et ma manière de travailler ? <br /> Je te propose un large choix de professionnels à ton écoute.
      </p>
      <div className="pt-10 lg:grid grid-cols-4 gap-2">
        {partners.map((partner) => (
          <div key={partner.id} className="flip-card mt-6 font-quicksand">
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
