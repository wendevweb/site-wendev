import React from "react";

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "Offre spéciale auteurs",
      img: "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/Offreauteurs",
    },
    {
      id: 2,
      title: "Création de sites internet sur mesure",
      img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/OffreSite",
    },
    {
      id: 3,
      title: "Création de maquettes et de prototypes pour le web",
      img: "https://assets-global.website-files.com/615b6910fed3ab29278f1893/6239bc9233d83795915b0c50_collaboration-figma2x.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/OffreMaquette",
    },
    {
      id: 4,
      title: "Pages d'authentification sécurisée avec Firebase",
      img: "https://cdn.pixabay.com/photo/2016/08/13/20/07/credit-card-1591492_960_720.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/OffreFirebase",
    },
    {
      id: 5,
      title: "Création d'application mobile avec Glide",
      img: "https://cdn.pixabay.com/photo/2015/07/03/17/23/iphone-830480_960_720.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/OffreGlide",
    },
    {
      id: 6,
      title: "Paramétrage et modélisation de bases de données MySQL",
      img: "https://images.pexels.com/photos/10325707/pexels-photo-10325707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi hic error inventore, sint, voluptatem nulla qui perferendis quis sit laborum voluptate deserunt magnam nemo totam magni, corrupti quisquam delectus.",
      link: "/OffreMysql",
    },
  ];

  return (
    <div className="lg:m-10 p-10">
      <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Mes services
      </h3>
      <p className="text-black font-quicksand text-center pb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        nisi hic error inventore, sint, voluptatem nulla qui perferendis quis
        sit laborum voluptate deserunt magnam nemo totam magni, corrupti
        quisquam delectus.
      </p>

      <div className="font-quicksand space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="lg:flex items-center	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black bg-real rounded-lg shadow-md dark:border-black dark:bg-black dark:text-white"
          >
            <img
              src={service.img}
              alt="Illustration du service de WenDev"
              className="h-48 w-full"
            />
            <h4 className="font-bold text-pink text-xl p-4">{service.title}</h4>
            <p>{service.desc}</p>
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
