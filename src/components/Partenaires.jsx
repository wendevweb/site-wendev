import React from "react";

const Partenaires = () => {
  const partners = [
    {
      id: 1,
      name: "Philomène Frébault - MasterAutoédition",
      desc: "Romancière autoéditée, j’ai créé fin 2023 ma newsletter sur LinkedIn™ afin de guider les auteurs indépendants dans leur aventure éditoriale et entrepreneuriale.",
      website:
        "https://www.linkedin.com/newsletters/masterauto%C3%A9dition-7122599472240447488/",
      logo: "https://i.goopics.net/qrtq6r.png",
    },
    {
      id: 2,
      name: "GraphArt's",
      desc: "Infographiste Metteur en page, conseils en identité numérique et design sur Instagram.",
      website:
        "https://ccgrapharts.wixsite.com/graphart-s?fbclid=PAAabS0o9R4h8O6PcPrk3b9wd_7fRuM6R12Dk906-KLgD2JXXNW0E9TEtvHr8",
      logo: "https://i.goopics.net/968zt6.png",
    },
    {
      id: 3,
      name: "Farah D.",
      desc: "Autrice en autoédition, Ecriture de résumés et bêta-lecture",
      website:
        "https://www.farahdauteure.com/prestations-auteurs",
      logo: "https://i.goopics.net/7oe33h.png",
    },
    {
      id: 4,
      name: "Bookstannuaire",
      desc: "Répertoire des auteurs et des livres en auto-édition pour améliorer ta visibilité et rejoindre une communauté d'entraide. ",
      website: "https://annuaire-auto-edites.johnlucas.fr/",
      logo: "https://annuaire-auto-edites.johnlucas.fr/wp-content/uploads/2024/06/logo-annuaire.png",
    },
    {
      id: 5,
      name: "François Vanhille - Métavers facile",
      desc: "Architecte métavers 2d, créateur de bureaux et événements virtuels. Organisation du Salon métaversel des Livres Auteurs.",
      website: "https://www.vanhille.fr",
      logo: "https://vanhille.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c817013-9bb3-4026-8b4d-2412233dcbfe%2Fprofile-pic4.png?table=block&id=71b7aa7d-9127-4e53-ae63-2af2a669dcb3&spaceId=e4a3b1de-7a81-4268-95d9-73d0920f3acc&width=250&userId=&cache=v2",
    },
    {
      id: 6,
      name: "Franck J. Matthews",
      desc: "Auteur de fantasy et Coach littéraire. Expertise, écoute et atmosphère rassurante sont au rendez-vous !",
      website: "https://www.franckjmatthews.com/coaching-litteraire",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=534,h=400,fit=crop/AoPZ2xegaQt8NqLy/biographie-m2WBNjpe2buQRBO6.jpg",
    },
    // {
    //   id: 7,
    //   name: "Fabien Dedieu - Cardebook",
    //   desc: "Des cartes à flasher contenant un ouvrage numérique/vidéos/audios, outil d'aide à l'écriture et générateur de livre audio par IA.",
    //   website: "https://www.cardebook.net",
    //   logo: "https://i.goopics.net/t5h0ss.jpg",
    // },
    {
      id: 8,
      name: "Emilie David - ED Multi-Services",
      desc: "Corrections d'écrits, transcription, rédaction de courriers, prête-plume et rédaction web.",
      website: "https://ed-multi-partners.jimdosite.com/",
      logo: "https://jimdo-storage.freetls.fastly.net/image/440839526/6e276933-a6a2-4ef8-b865-da9a0b5d4b38.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1024&height=1024&trim=67,208,645,204",
    },
  ];
  return (
    <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div>
        <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
          Mes partenaires du monde littéraire
        </h3>{" "}
        <p className="tracking-tight text-xl pt-10 pb-10">
          Il est temps de voir votre projet en grand ! Et si vous faisiez appel
          à mes partenaires de confiance, avec lesquels je partage mes valeurs
          et ma manière de travailler ? <br /> Je vous propose un large choix de
          professionnels à votre écoute.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-10">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden text-black bg-real rounded-lg shadow-lg"
          >
            <img
              src={partner.logo}
              alt="Logo du partenaire de WenDev"
              className="h-48 w-full"
            />
            <h4 className="font-bold text-pinkDark text-xl p-4">
              {partner.name}
            </h4>
            <p className="p-4 text-xl tracking-tight">{partner.desc}</p>
            <button
              className="w-40 m-4 border shadow-lg text-pinkDark border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
              alt="Redirection vers la page du partner de WenDev"
            >
              <a href={partner.website} target="_blank" rel="noreferrer">
                Voir ses services
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;

//
//   <div className="flip-card-inner">
