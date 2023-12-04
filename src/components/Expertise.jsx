import React from "react";

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "Offre spéciale auteurs",
      img: "https://images.pexels.com/photos/796603/pexels-photo-796603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tu écris des livres et tu souhaites avoir un site web professionnel dédié à ton activité ? Moi aussi, je suis auteure et suis passée par là. Je te propose une offre accessible et adaptée à tes besoins pour promouvoir ton univers littéraire et le partager autour de toi.",
      link: "/Offreauteurs",
    },
    {
      id: 2,
      title: "Création et refonte de sites internet sur mesure",
      img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      desc: "Avoir son propre site internet comporte bien des avantages. C'est un réel atout pour ta marque ou ton entreprise ! Découvre mon offre de création de site web adaptée à tes besoins numériques.",
      link: "/OffreSite",
    },
    {
      id: 3,
      title: "Création de maquettes et de prototypes pour le web",
      img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tu souhaites avoir un aperçu de ce que donnera le site web de tes rêves ? Alors viens vite me demander une maquette !",
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
      desc: "Que tu sois artiste, expert de la tech, débutant ou chevronné, avoir un portfolio est essentiel pour présenter tes projets, mettre en valeur ton travail et qui tu es. Je code et met en page tes projets et ta présentation de manière originale et percutante, mais toujours pro !",
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
    <div className="lg:m-10 p-10">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Mes services
      </h3>

      <div className="font-quicksand space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-6 lg:space-y-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="lg:flex items-center	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black bg-real rounded-lg shadow-lg dark:border-black dark:bg-black dark:text-white"
          >
            <img
              src={service.img}
              alt="Illustration du service de WenDev"
              className="h-48 w-full"
            />
            <h4 className="font-bold text-pink text-xl p-4">{service.title}</h4>
            <p className="p-4">{service.desc}</p>
            <button
              className="w-40 m-4 border border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
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
