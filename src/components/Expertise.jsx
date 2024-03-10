import React from "react";

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "Offre spéciale auteurs",
      img: "https://images.pexels.com/photos/796603/pexels-photo-796603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Vous écrivez des livres et souhaitez avoir un site web professionnel dédié à votre activité ? Moi aussi, je suis auteure et suis passée par là. Je vous propose trois offres accessibles et adaptées à vos besoins pour promouvoir votre univers littéraire et le partager autour de vous.",
      link: "/Offreauteurs",
    },
    {
      id: 2,
      title: "Création et refonte de sites internet sur mesure",
      img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      desc: "Avoir son propre site internet comporte bien des avantages et votre présence en ligne est essentielle. C'est un réel atout pour votre marque ou votre entreprise ! Découvrez mes offres de création de site web pensées selon vos besoins numériques. Je mets également au goût du jour des sites web existants.",
      link: "/OffreSite",
    },
    {
      id: 3,
      title: "Création de maquettes et de prototypes pour le web",
      img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Une maquette est un bon moyen d'avoir un aperçu visuel de votre futur site internet ou application, avant de commencer à coder. Vous désirez savoir ce que donnera le site web de vos rêves ? Alors venez vite me demander une maquette pour donner vie à vos envies !",
      link: "/OffreMaquette",
    },
    // {
    //   id: 4,
    //   title: "Pages d'authentification sécurisée avec Firebase",
    //   img: "https://cdn.pixabay.com/photo/2016/08/13/20/07/credit-card-1591492_960_720.jpg",
    //   desc: "Tu souhaites que tes utilisateurs s'authentifient sur ton application ou ton site internet de manière sécurisée ? Grâce à Firebase, je te propose une solution clefs en mains !",
    //   link: "/OffreFirebase",
    // },
    // {
    //   id: 5,
    //   title: "Création d'application mobile avec Glide",
    //   img: "https://cdn.pixabay.com/photo/2015/07/03/17/23/iphone-830480_960_720.jpg",
    //   desc: "Une application mobile est le must have pour ton entreprise ou pour ta marque ! Et tout cela, sans base de données à construire. Je transforme ton tableur Google Sheet ou Airtable en application pour mobile.",
    //   link: "/OffreGlide",
    // },

    {
      id: 7,
      title: "Création de ton portfolio",
      img: "https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Que vous soyez artiste, artisan, commerçant, débutant ou chevronné, avoir un portfolio est essentiel pour présenter vos projets, mettre en valeur votre travail et qui vous êtes. Je vous livre une solution fonctionnelle, personnalisée, faite pour en mettre plein les yeux à ceux qui le regarderont ! 🤩",
      link: "/OffrePortfolio",
    },

    // {
    //   id: 8,
    //   title: "Création de chats et chatbots personnalisés et sécurisés",
    //   img: "https://cdn.pixabay.com/photo/2018/03/16/19/10/communication-3232227_960_720.jpg",
    //   desc: "Echanger avec ses collègues, ses amis, sa familles, etc. de manière fun et sécurisée, ou répondre automatiquement aux questions de tes utilisateurs selon des chemins prédéfinis est dans l'air du temps. Je crée ton chatbot ou ton serveur de chat personnalisés et sécurisés.",
    //   link: "/OffreChat",
    // },
  ];

  return (
    <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div>
        <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
          Mes services et prestations
        </h3>{" "}
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden text-black bg-real rounded-lg shadow-lg"
          >
            <img
              src={service.img}
              alt="Illustration du service de WenDev"
              className="h-48 w-full"
            />
            <h4 className="font-bold text-pinkDark text-xl p-4">
              {service.title}
            </h4>
            <p className="p-4 tracking-tight text-xl">{service.desc}</p>
            <button
              className="w-40 m-4 border shadow-lg text-pinkDark border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
              alt="Redirection vers la page du service de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              <a href={service.link}>En savoir plus...</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
