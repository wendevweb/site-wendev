import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import wendycolor from "../assets/wendy-color.png";

const PageAbout = () => {
  return (
    <div className="lg:flex flex-col justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  A propos de
                  <br />
                  <span className="text-pink">WenDev</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Mais qui se cache derrière ce logo ?
                  <br /> Rendez-vous dans les sections ci-dessous pour le
                  découvrir ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section aria-label="Qui est WenDev" className="lg:ml-20 lg:mr-20">
          <h3 className="text-pink text-2xl text-center mt-12 mb-6">
            Qui suis-je ?{" "}
          </h3>
          <div className="lg:grid grid-cols-2 gap-2 content-center items-center lg:m-10 p-10">
            <img
              src={wendycolor}
              alt="Wendy Baqué"
              className="rounded-full shadow-md w-96 p-2"
            />
            <p className="font-quicksand text-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, aliquid ratione quibusdam ad, repellendus neque at
              natus est quo, perferendis soluta molestias nisi amet! Hic veniam
              voluptate dolorem mollitia. Esse? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia quo ex perspiciatis amet
              dignissimos neque modi totam ullam, iusto recusandae quaerat sequi
              distinctio? Dolor obcaecati, aliquam labore nulla amet doloribus.
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Le parcours professionnel de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6">
            Mon pracours professionnel
          </h3>
          <div className="lg:grid grid-cols-2 gap-2 content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg"
              alt="Wendy Baqué"
              className="rounded-full shadow-md grayscale w-2/3 h-56"
            />
            <p className="font-quicksand text-light leading-relaxed">
              J'ai toujours été attirée par les professions mettant l'humain au
              cœur des actes et des pratiques. <br /> C'est pour cela qu'en 2018, j'ai
              commencé à exercer en tant que psychologue et formatricedans le
              domaine de la santé. <br />Mais il me manquait quelque chose... une
              touche de créativité, un brin de concret et une once de fantaisie
              pour être en accord avec mes valeurs. <br />Après un bilan de
              compétences, le métier de développeuse web s'est rapidement imposé
              et j'ai commencé une formation à la Wild Code School où j'ai pu
              réaliser plusieurs projets concrets et confirmer mon appétence
              pour le code fullstack ! <br />J'ai ensuite été en stage chez Fedmind,
              puis O Media, où j'ai découvert le No Code et fait partie d'une
              belle expérience humaine pour aider les personnes souffrant
              d'obésité à se sentir mieux dans leur corps et dans leur tête.
              <br />Après l'obtention de mon diplôme de dev en 2023, j'ai décidé de me
              lancer dans ma propre entreprise, WenDev pour mettre mes
              compétences multifacettes à votre service !
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les valeurs de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6">
            Mes valeurs
          </h3>
          <div className="lg:grid grid-cols-2 gap-2 content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/18/23/19/gesture-772977_960_720.jpg"
              alt="Wendy Baqué"
              className="rounded-full shadow-md grayscale w-2/3 h-56"
            />
            <p className="font-quicksand text-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis obcaecati ratione, vitae recusandae nam hic voluptates
              alias sint nisi maxime quibusdam laborum, quas dicta asperiores
              nobis sit cumque quod necessitatibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veniam mollitia aliquam placeat cum
              suscipit eligendi repellat doloremque, deleniti blanditiis animi
              consequuntur ducimus praesentium libero officia, provident
              consequatur commodi. Soluta, possimus.
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les valeurs de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6">
            Mes objectifs
          </h3>
          <div className="lg:grid grid-cols-2 gap-2 content-center items-center">
            <p className="font-quicksand text-light lg:m-10 p-10 leading-relaxed">
              <span className="text-bold text-pinkDark">
                Te proposer une solution numérique sur mesure
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cum
              consectetur non, blanditiis magni unde voluptate architecto quia
              possimus sequi doloribus earum iure nisi voluptas mollitia eum.
              Mollitia, fugit animi. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sunt distinctio sit similique eaque amet
              voluptatum voluptas, nihil possimus quis quas fugiat veritatis ad
              maiores itaque quisquam et officia ipsa eum!
            </p>
            <p className="font-quicksand text-light lg:m-10 p-10 leading-relaxed">
              <span className="text-bold text-pinkDark">
                Te proposer des offres adaptées à tes finances
              </span>{" "}
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cum
              consectetur non, blanditiis magni unde voluptate architecto quia
              possimus sequi doloribus earum iure nisi voluptas mollitia eum.
              Mollitia, fugit animi. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sunt distinctio sit similique eaque amet
              voluptatum voluptas, nihil possimus quis quas fugiat veritatis ad
              maiores itaque quisquam et officia ipsa eum!
            </p>
            <p className="font-quicksand text-light lg:m-10 p-10 leading-relaxed">
              <span className="text-bold text-pinkDark">
                Etre une référence en création de sites web pour les auteurs de
                livres
              </span>{" "}
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cum
              consectetur non, blanditiis magni unde voluptate architecto quia
              possimus sequi doloribus earum iure nisi voluptas mollitia eum.
              Mollitia, fugit animi. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sunt distinctio sit similique eaque amet
              voluptatum voluptas, nihil possimus quis quas fugiat veritatis ad
              maiores itaque quisquam et officia ipsa eum!
            </p>
            <p className="font-quicksand text-light lg:m-10 p-10 leading-relaxed">
              <span className="text-bold text-pinkDark">
                Etre LE média d'information français sur le métier de
                développeur web
              </span>{" "}
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cum
              consectetur non, blanditiis magni unde voluptate architecto quia
              possimus sequi doloribus earum iure nisi voluptas mollitia eum.
              Mollitia, fugit animi. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sunt distinctio sit similique eaque amet
              voluptatum voluptas, nihil possimus quis quas fugiat veritatis ad
              maiores itaque quisquam et officia ipsa eum!
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les activités d'auteure de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6">
            Mes activités d'auteure de romans
          </h3>
          <div className="lg:grid grid-cols-2 gap-2 content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776_960_720.jpg"
              alt="Les activités d'auteure de romans de WenDev"
              className="rounded-full shadow-md grayscale w-2/3 h-56"
            />
            <div>
              <p className="font-quicksand text-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                maxime repellat tempora, deleniti facere deserunt sequi dolorem
                vitae quibusdam ipsam blanditiis facilis ducimus iusto obcaecati
                corrupti veniam exercitationem cum illo. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ut tempora repellat explicabo
                reiciendis corrupti veniam non veritatis facilis, dolorem
                excepturi nostrum laudantium. Sit provident laborum doloribus
                voluptas nesciunt dignissimos odio?
              </p>
              <button className="text-white bg-gradient-to-br from-purple to-pinkDark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6">
                <a
                  href="https://wendybaqueauteure.wendev.fr/"
                  alt="Redirection vers le site d'auteure de Wendy Baqué"
                  aria-label="Redirection vers le site d'auteure de Wendy Baqué"
                  rel="noreferrer"
                  target="_blank"
                >
                  En savoir plus...
                </a>
              </button>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default PageAbout;
