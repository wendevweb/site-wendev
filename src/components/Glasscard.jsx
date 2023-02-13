import React from "react";
import "./glasscard.css";

const GlassCard = () => {
  const interests = [
    {
      id: 1,
      title: "Une vitrine disponible tout le temps !",
      text: "",
    },
    {
      id: 2,
      title: "Une vitrine disponible pour tous !",
      text: "",
    },
    {
      id: 3,
      title: "Une vitrine pour être plus crédible !",
      text: "",
    },
    {
        id: 4,
        title: "Une vitrine pour se démarquer face à la concurrence !",
        text: "",
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
                <h3 className="font-quicksand text-center">{interest.title}</h3>
                <p className="font-quicksand text-center text-light pt-2">{interest.text}</p>
              </div>
            </div>
          </div>
        
      </article>
      ))}
    </div>
  );
};

export default GlassCard;
