import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Partenaires = () => {
  const partenaires = [
    {
      id: 1,
      name: "Nono du Web",
      title: "Développeur web & formateur",
      descr:
        "Je m'appelle Arnaud et j'ai 34 ans. Je suis développeur web depuis février 2022 et formateur depuis octobre 2022. En tant que développeur web, je suis dévoué à offrir un service de qualité à mes clients et à concrétiser leurs projets. Je suis constamment à la recherche de nouvelles opportunités pour améliorer mes compétences et proposer des sites encore meilleurs à mes clients. Je suis une personne curieuse, toujours en quête de connaissances pour rester à la pointe des dernières tendances et technologies du secteur. Je tiens également à exprimer ma gratitude envers WenDev pour ce partenariat prometteur. Je suis convaincu que cette collaboration sera enrichissante et nous permettra de réaliser de belles choses ensemble.",
      img: "https://www.nonoweb17.fr/static/media/logo.4c7d8262a72e29a3bea0.png",
      link: "https://www.nonoweb17.fr/",
    },
    {
      id: 2,
      name: "GraphArt's",
      title: "Infographiste metteur en page",
      descr:
        "Je m'appelle Cindy, je suis infographiste metteur en page, je travaille pour toutes les femmes artistes et créatrices fait main. Petit ou gros budget, j'ai à coeur de vous aider à gagner plus de clients et plus de visibilité grâce à des visuels de qualités.",
      img: "https://static.wixstatic.com/media/c090d8_0a2787f5c2444bb4aac9cf1b7a7b5104~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20grapharts%20definitif-07.png",
      link: "https://ccgrapharts.wixsite.com/graphart-s?fbclid=PAAabS0o9R4h8O6PcPrk3b9wd_7fRuM6R12Dk906-KLgD2JXXNW0E9TEtvHr8",
    },
    {
      id: 3,
      name: "Farah D.",
      title: "Bêta-lectrice bénévole et créatrice de résumés de livres",
      descr:
        "Si vous cherchez une bêta-lectrice sérieuse, vous êtes au bon endroit. Vous êtes en difficulté face à votre résumé pour l'intégrer en 4ème de couverture ? Je suis là pour vous aider. Je tiens à vous informer que je m'entraîne au sujet des résumés, donc il se peut qu'il ne soit pas parfait... mais je ferai de mon mieux pour donner envie à ton lecture de découvrir ce qui se cache entre tes pages ! A long terme, j'aimerais proposer mes services de bêta-lectrice professionnelle, de même que vous aider dans vos résumés de romans et ainsi fournir un résultat soigné et professionnel. Je suis, en pleine réflexion pour développer également d'autres prestations.",
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=144,h=144,fit=crop/mv0LN7ebOPipRqNq/logo_noir-removebg-preview-AMq27aX1WwFE7DKJ.png",
      link: "https://www.farahdauteure.com/avis-prestation-beta-lectureresume",
    },
    {
      id: 4,
      name: "Annuaire Auto-édités",
      title: "Répertoire des auteurs et des livres en auto-édition",
      descr:
        "Ce site a été créé dans le but de référencer les auteurs auto-édités, afin de leur donner un peu plus de visibilité. Vous y trouverez des fiches auteurs ainsi que des fiches livres que vous pourrez noter et commenter. Vous pourrez aussi gérer votre collection de livres d’auteurs auto-édités et utiliser des fonctionnalités telles que : Marquer un livre comme lu, Ajouter un livre à ses envies, Ajouter un livre à ses favoris, Ajouter un auteur à ses favoris. Bénéficiez d'une réduction de -10% sur mes offres de services aux auteurs en étant référencé sur ce site.",
      img: "https://annuaire-auto-edites.johnlucas.fr/wp-content/uploads/2021/02/logo.png",
      link: "https://annuaire-auto-edites.johnlucas.fr/",
    },
  ];
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Partenaires | WenDev</title>
        <link href="https://www.wendev.fr/Partenaires" />
      </Helmet>
      <section className="m-4 p-4">
        <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
          Mes partenaires
        </h2>
        <p className="text-center font-quicksand text-xl md:text-xl xl:text-xl font-bold tracking-tight mb-12 text-pink">
          Chez Wendev, j'ai à coeur de travailler avec des personnes de
          confiance, avec des compétences roches et variées. Voici la crème de
          la crème à votre service !
        </p>
      </section>
      <Fade>
        <section className="m-4 p-4 font-quicksand lg:grid grid-cols-3 gap-4">
          {partenaires.map((partenaire) => (
            <div
              key={partenaire.id}
              className="lg:flex items-center	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-center text-black bg-real rounded-lg shadow-lg dark:border-black dark:bg-black dark:text-white"
            >
              <img
                src={partenaire.img}
                alt="Logo du partenaire"
                className="h-56"
              />
              <h4 className="font-bold text-pink text-xl p-4">
                {partenaire.title}
              </h4>
              <p className="p-6">{partenaire.descr}</p>
              <button
                className="w-40 m-4 border border-pinkDark font-bold rounded-md mt-2 p-2 hover:bg-pinkDark hover:text-white"
                alt="Redirection vers la page du partenaire"
              >
                <a href={partenaire.link} target="_blank" rel="noreferrer">
                  En savoir plus...
                </a>
              </button>
            </div>
          ))}
        </section>
      </Fade>
    </div>
  );
};

export default Partenaires;
