import React from "react";
import "./glasscard.css";

const GlassCard = () => {
  const interests = [
    {
      id: 1,
      title: "Une vitrine disponible tout le temps !",
      text: "La site internet est comme la vitrine de votre magasin : n'importe qui qui passe sur le web et recherche votre nom pourra le voir, à tout moment, 24h/24 et 7j/7 ! Ta pub se fait ainsi « toute seule », sans que tu sois derrière ton écran pour répondre tout le temps aux commentaires ou aux questions.",
    },
    {
      id: 2,
      title: "Une vitrine disponible pour tous !",
      text: "Si beaucoup de personnes possèdent un compte sur les réseaux sociaux, certains n'en ont pas encore et préfèrent naviguer sur le web. Ainsi, avoir un site web permet de toucher un public plus large. Ce serait dommage de passer à côté de clients qui n'utilisent pas les réseaux sociaux, non ? ",
    },
    {
      id: 3,
      title: "Une vitrine pour être plus crédible !",
      text: "84% des français pensent qu’un site web rend ton entreprise plus crédible. Et sais-tu que plus de 50% des internautes n’ont pas confiance dans les entreprises sans site web ? Faire l’impasse sur un site internet, c’est donc tourner le dos à de nombreux clients potentiels.",
    },
    {
      id: 4,
      title: "Une vitrine pour se démarquer face à la concurrence !",
      text: "Avoir un site, c'est comme avoir un magasin avec pignon sur rue, alors que tes concurrents n'auront qu'un stand dans un grand entrepôt, parmi une multitude d'autres stands (coucou Amazon !), tous semblables, sans âme et sans personnalisation. Ton site peut ainsi te permettre de contourner cela et de te démarquer dans la masse !",
    },
  ];
  return (
    <div className="lg:m-10 p-10 lg:grid grid-cols-4">
      {interests.map((interest) => (
        <article className="glass-card">
          <div className="glass-circle"></div>
          <div className="glass-circle"></div>
          <div className="glass-card-inner">
            <div className="glass-card-text">
              <div key={interest.id}>
                <h3 className="font-quicksand text-center font-bold">
                  {interest.title}
                </h3>
                <p className="font-quicksand text-center text-light pt-2">
                  {interest.text}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default GlassCard;
