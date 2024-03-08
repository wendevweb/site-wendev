import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import wendycolor from "../assets/wendywildcodeschool.webp";
import wendev7 from "../assets/wendev-7.webp";
import wendev9 from "../assets/wendev-9.webp";
import wendev10 from "../assets/wendev-10.webp";
import wendev11 from "../assets/wendev-11.webp";
import wendev13 from "../assets/wendev-13.webp";
import wendev15 from "../assets/wenedv-15.webp";
import wild from '../assets/wildcodeschool.webp'

import InstagramIcon from "@mui/icons-material/Instagram";

const PageAbout = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>À propos | WenDev</title>
        <link href="https://www.wendev.fr/About" />
      </Helmet>
      <section aria-label="A propos de WenDev">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url('https://i.goopics.net/ay4x9z.png')",
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
                  À propos de
                  <br />
                  <strong className="text-pinkDark">WenDev</strong>
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Mais qui se cache derrière ce logo ? Quelle est l'histoire de
                  WenDev ?
                  <br /> Rendez-vous dans les sections ci-dessous pour le
                  découvrir ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section aria-label="Qui est WenDev">
            <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
              Qui suis-je ?{" "}
            </h3>
            <div className="lg:grid grid-cols-2 content-center items-center">
              <img
                src={wendycolor}
                alt="Wendy Baqué"
                className="rounded-full shadow-lg w-96 mb-6"
              />

              <p className="tracking-tight text-xl">
                Je suis{" "}
                <strong className="text-bold text-pinkDark">Wendy</strong>,
                fondatrice et gérante de ma micro-entreprise{" "}
                <strong className="text-bold text-pinkDark">WenDev</strong>,
                développeuse web en freelance, passionnée, no-code friendly et
                auteure de romans ! <br />À la suite de ma formation à la{" "}
                <strong className="text-bold text-pinkDark">
                  <a
                    href="https://www.wildcodeschool.com/fr-fr/"
                    alt="Redirection vers le site web de la Wild Code School"
                    aria-label="Redirection vers le site web de la Wild Code School"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Wild Code School
                  </a>
                </strong>
                , j'ai passé mon titre diplôme de dev en février 2023, dans le
                but de créer ma propre entreprise :{" "}
                <strong className="text-bold text-pinkDark">WenDev</strong> que
                voici !
                <br />
                <button className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                  <a
                    href="https://www.wildcodeschool.com/fr-fr/blog/devenir-d%C3%A9veloppeurse-web-en-freelance-les-conseils-cl%C3%A9s-pour-se-lancer"
                    alt="Redirection vers mon article sur le blog de la Wild Code School"
                    aria-label="Redirection vers mon article sur le blog de la Wild Code School"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Lire mon article sur le blog de la Wild Code School
                  </a>
                </button>
              </p>
            </div>
          </section>
        </div>
      </Fade>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-">
          <section aria-label="Le parcours professionnel de WenDev">
            <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
              Mon pracours professionnel
            </h3>
            <div className="lg:grid grid-cols-2 content-center items-center">
              <img
                src={wild}
                className="rounded-lg shadow-lg lg:w-2/3"
                alt="Le parcours professionnel de Wendy Baqué"
                aria-label="Le parcours professionnel de Wendy Baqué"
              />
              <p className="text-xl tracking-tight">
                J'ai toujours été attirée par les professions mettant{" "}
                <strong className="text-bold text-pinkDark">
                  l'humain au cœur des actes et des pratiques
                </strong>
                .
                <br /> C'est pour cela qu'en 2018, j'ai commencé à exercer en
                tant que{" "}
                <strong className="text-bold text-pinkDark">
                  psychologue et formatrice
                </strong>{" "}
                dans le domaine de la santé. <br />
                Mais il me manquait quelque chose... une touche de{" "}
                <strong className="text-bold text-pinkDark">créativité</strong>,
                un brin de concret et une once de fantaisie pour être en accord
                avec mes valeurs. <br />
                Après un bilan de compétences, le métier de développeuse web
                s'est rapidement imposé et j'ai commencé ma formation où j'ai pu
                réaliser plusieurs projets concrets et confirmer mon appétence
                pour la{" "}
                <strong className="text-bold text-pinkDark">
                  programmation informatique
                </strong>{" "}
                ! <br />
                J'ai ensuite été en stage chez Fedmind, puis bénévole chez O
                Media, où j'ai découvert le No Code et fait partie d'une belle
                expérience humaine pour aider les personnes souffrant d'obésité
                à se sentir mieux dans leur corps et dans leur tête.
                <br />
                Aujourd'hui, je m'épanouis à plein temps dans mon quotidien de
                développeuse web auprès des{" "}
                <strong className="text-bold text-pinkDark">
                  auteurs de livres
                </strong>{" "}
                et je suis{" "}
                <strong className="text-bold text-pinkDark">
                  ambassadrice
                </strong>{" "}
                de mon école d'informatique.
              </p>
            </div>
          </section>
        </div>
      </Fade>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section aria-label="Les valeurs de WenDev">
            <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
              Mes valeurs
            </h3>
            <div className="lg:grid grid-cols-2 content-center items-center">
              <img
                src={wendev9}
                alt="Les valeurs de Wendy Baqué"
                aria-label="Les valeurs de Wendy Baqué"
              />
              <p className="text-xl tracking-tight">
                ✨ Je suis une personne{" "}
                <strong className="text-bold text-pinkDark">rigoureuse</strong>,
                ce qui me permet de mener à bien mes projets et activités
                confiées de A à Z et de bien gérer mon temps de travail. Je fais
                également preuve de créativité et d'imaginativité, ce qui me
                pousse à trouver des{" "}
                <strong className="text-bold text-pinkDark">
                  solutions innovantes et originales
                </strong>{" "}
                pour répondre à vos besoins numériques.
                <br />
                ✨Soucieuse d’améliorer ma pratique dans un monde en constante
                évolution, je sais faire preuve d’
                <strong className="text-bold text-pinkDark">
                  adaptabilité
                </strong>
                , comme le prouve ma reconversion professionnelle dans un
                domaine totalement nouveau pour moi.
                <br />✨ Être{" "}
                <strong className="text-bold text-pinkDark">
                  autonome
                </strong>{" "}
                dans ma pratique est important pour moi afin d'envisager tous
                les possibles qui s'offrent à moi et repose avant tout sur un{" "}
                <strong className="text-bold text-pinkDark">
                  climat de confiance
                </strong>{" "}
                établi avec le client. Lui être utile apparaît aussi primordial
                pour donner un sens à mon travail.
                <br />✨ Enfin, ma{" "}
                <strong className="text-bold text-pinkDark">
                  curiosité
                </strong>{" "}
                me donne un goût certain pour l'apprentissage et l'actualisation
                de mes acquis dans un monde en constante évolution.
                <br />
                <br />➕{" "}
                <strong className="text-bold text-pinkDark">
                  Mon petit plus ?
                </strong>
                Je suis développeuse, mais aussi psychologue ! Ainsi, tout
                naturellement, je suis attirée par l' UX et l' UI. C'est un
                domaine qui me parle, et qui me tient toujours à cœur. Mon
                regard est un bonus : 100% user first et centrage sur
                l'accessibilité !
                <br />➕{" "}
                <strong className="text-bold text-pinkDark">
                  Mon autre petit plus ?
                </strong>{" "}
                Je suis no code friendly ! Face à la demande croissante sur des
                outils de solutions en ligne clés en mains, je me suis formée au
                no-code et te propose des solutions pour augmenter ta
                productivité et ton efficacité !
              </p>
            </div>
          </section>
        </div>
      </Fade>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section aria-label="Les valeurs de WenDev">
            <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
              Mes objectifs
            </h3>
            <div className="lg:grid grid-cols-2 gap-4">
              <div className="lg:flex">
                <p className="text-xl tracking-tight">
                  <strong className="text-bold text-2xl text-pinkDark">
                    Te proposer une solution numérique sur mesure
                  </strong>
                  <br />
                  <br />
                  Des services de création de sites web, il y en a plein ! Il y
                  en a même des gratuits qui font tout à ta place ! 😵‍💫 Mais cela
                  ne remplacera jamais le travail d'un développeur formé à créer
                  des
                  <strong className="text-bold text-pinkDark">
                    {" "}
                    sites internet robustes et viables, avec un design à la
                    pointe des tendances
                  </strong>
                  . 💅
                  <br />
                  Avec moi, toi et ton site internet serez chouchoutés et,
                  surtout, écoutés ! Car oui, je suis à l'écoute de tes besoins
                  et de tes envies numériques pour pouvoir y répondre au mieux
                  et aider ton business à décoler sur internet. <br />
                  On se détend, pas de stress, je m'occupe de tout et on en
                  discute ! T'être utile fait partie de l'essence même de{" "}
                  <strong className="text-bold text-pinkDark">WenDev</strong> !
                </p>
                <img src={wendev13} alt="" className="w-64 h-64 p-4" />
              </div>

              <div className="lg:flex">
                <p className="text-xl tracking-tight">
                  <strong className="text-bold text-2xl text-pinkDark">
                    Te présenter des offres adaptées à tes finances
                  </strong>{" "}
                  <br />
                  <br />
                  Tout le monde n'a pas les moyens d'investir dans la création
                  d'un site web du tonnerre, surtout lrosque l'on débute son
                  activité. 😨 Et ça, je l'ai bien compris (et je suis passée
                  par là aussi ! 😅) !
                  <br />
                  Pas de panique, j'ai une solution adaptée à tes besoins (et
                  sans brader mes services certifiés !). Pour chaque type
                  d'offre, je te propose une gamme de fonctionnalités et des
                  tarifs évolutifs. <br />
                  <strong className="text-bold  text-pinkDark">
                    Avec tout ça, je suis persuadée que tu trouveras ton bonheur
                    !
                  </strong>
                  🥳
                </p>
                <img src={wendev10} alt="" className="w-64 h-64 p-4" />
              </div>
              <div className="lg:flex">
                <p className="text-xl tracking-tight">
                  <strong className="text-bold text-2xl text-pinkDark">
                  Être une référence en création de sites web pour les auteurs
                    de livres
                  </strong>{" "}
                  <br />
                  <br />
                  Aujourd'hui, les réseaux sociaux ou les boutiques en ligne ne
                  suffisent plus aux écrivains pour présenter leurs livres et se
                  faire connaître.{" "}
                  <strong className="text-bold  text-pinkDark">
                    Il est primordial de ne plus faire l'impasse sur une vitrine
                    virtuelle accessible à tous
                  </strong>
                  , comme peut l'être un site internet ! <br />
                  En tant qu'auteure de romans, je suis déjà passée par la
                  création de mon site internet et ai fait face à plusieurs
                  difficultés que je peux ainsi t'éviter !{" "}
                  <strong className="text-bold  text-pinkDark">
                    Je sais de quoi tu as besoin
                  </strong>{" "}
                  pour mettre tes livres et ton univers littéraire en valeur. 📚
                  <br /> Grâce à{" "}
                  <strong className="text-bold  text-pinkDark">
                    mes compétences et à mon réseau
                  </strong>
                  , tu bénéficieras d'une solution numérique optimale pour
                  toucher tes lecteurs et, qui sait, peut-être qu'une maison
                  d'édition passera par là ! 😉
                  <br />
                  <button className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                    <Link to="/Offreauteurs">Voir l'offre</Link>
                  </button>
                </p>
                <img src={wendev11} alt="" className="w-64 h-64" />
              </div>
              <div className="lg:flex">
                <p className="text-xl tracking-tight">
                  <strong className="text-bold text-2xl text-pinkDark">
                  Devenir LE média d'information français qui allie activités
                    littéraires et tech !
                  </strong>{" "}
                  <br />
                  <br />
                  Lorsque je construisais mon propre site internet d'auteure de
                  livres, je me suis heurtée à pas mal de freins et fait
                  quelques erreursdans le choix de mes outils, par exemple. Je
                  me suis rendue compte que réaliser un site ne s'improvise pas
                  et qu'il nécessite du temps pour saisir les bonnes pratiques
                  sur le web. <br /> Le web est un vaste monde bien complexe et
                  je ne suis pas la seule à avoir fait ces erreurs.
                  <br />
                  <strong className="text-bold  text-pinkDark">
                    Et si je t'évitais de faire ces erreurs en t'informant sur
                    tout cela de manière fun et didactique ? 🤩
                  </strong>
                  <br />
                  Sur{" "}
                  <strong className="text-bold  text-pinkDark">
                    mes réseaux sociaux et dans ma newsletter
                  </strong>
                  , je publie des ressources utiles et partage la culture du web
                  pour mieux la faire connaître !
                  <br />
                  <button className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                    <a
                      href="https://www.instagram.com/wendevweb/"
                      alt="Redirection vers le compte Instagram de WenDev"
                      aria-label="Redirection vers le compte Instagram de WenDev"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Rejoignez-moi sur Instagram ! <InstagramIcon />
                    </a>
                  </button>
                </p>
                <img src={wendev7} alt="" className="w-64 h-64 p-4" />
              </div>
            </div>
          </section>
        </div>
      </Fade>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section aria-label="Les activités d'auteure de WenDev">
            <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
              Mes activités d'auteure de romans
            </h3>
            <div className="lg:grid grid-cols-2 content-center items-center">
              <img
                src={wendev15}
                alt="Les activités d'auteure de romans de WenDev"
                aria-label="Les activités d'auteure de romans de WenDev"
              />
              <div>
                <p className="text-xl tracking-tight">
                  Je suis aussi également{" "}
                  <strong className="text-bold text-pinkDark">
                    auteure de 4 romans contemporains
                  </strong>{" "}
                  sur des thématiques qui me tiennent à coeur : la santé
                  mentale, l'acceptation de soi, la discrimination, la quête de
                  sens, la pression sociale, la Vie, la musique et la fin de
                  vie.
                  <br />
                  Cela me permet de développer des compétences
                  organisationnelles, de maîtriser les normes rédactionnelles
                  et, surtout, d'être à l' avec le{" "}
                  <strong className="text-bold text-pinkDark">
                    storytelling
                  </strong>{" "}
                  lorsque j'ai un projet à vous présenter ! Je suis également{" "}
                  <strong className="text-bold text-pinkDark">
                    chroniqueuse littéraire{" "}
                  </strong>{" "}
                  depuis 2019 et partenaire de plusieurs maisons d'éditions,
                  comme Leduc, Plumes de Mimi ou Erato.
                </p>
                <button className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
                  <a
                    href="https://www.wendybaqueauteure.com/"
                    alt="Redirection vers le site d'auteure de Wendy Baqué"
                    aria-label="Redirection vers le site d'auteure de Wendy Baqué"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Découvrez mes romans et chroniques littéraires
                  </a>
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default PageAbout;
