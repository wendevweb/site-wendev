import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import wendycolor from "../assets/wendy-color.png";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <section aria-label="Qui est WenDev" className="lg:ml-20 lg:mr-20">
          <h3 className="text-pink text-2xl text-center mt-12 mb-6 font-quicksand">
            Qui suis-je ?{" "}
          </h3>
          <div className="lg:grid grid-cols-2 content-center items-center lg:m-10 p-10">
            <img
              src={wendycolor}
              alt="Wendy Baqué"
              className="rounded-full shadow-md w-96 mb-6"
            />
            <p className="font-quicksand text-light leading-relaxed">
              Je suis <span className="text-bold text-pinkDark">Wendy</span>,
              fondatrice et gérante de ma micro-entreprise{" "}
              <span className="text-bold text-pinkDark">WenDev</span>,
              développeuse web passionnée, no-code friendly et auteure de romans
              ! Après un bilan de compétences réalisé en full remote, je suis en
              reconversion professionnelle dans le domaine du développement web
              et web mobile. 💻 <br />A la suite de ma formation à la{" "}
              <span className="text-bold text-pinkDark">Wild Code School</span>{" "}
              , j'ai passé mon titre diplôme de dev en février 2023, dans le but
              de créer ma propre entreprise :{" "}
              <span className="text-bold text-pinkDark">WenDev</span> que voici
              !
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Le parcours professionnel de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6 font-quicksand">
            Mon pracours professionnel
          </h3>
          <div className="lg:grid grid-cols-2 content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg"
              alt="Wendy Baqué"
              className="rounded-md shadow-md grayscale h-72 mb-6"
            />
            <p className="font-quicksand text-light leading-relaxed">
              J'ai toujours été attirée par les professions mettant{" "}
              <span className="text-bold text-pinkDark">
                l'humain au cœur des actes et des pratiques
              </span>
              .
              <br /> C'est pour cela qu'en 2018, j'ai commencé à exercer en tant
              que{" "}
              <span className="text-bold text-pinkDark">
                psychologue et formatrice
              </span>{" "}
              dans le domaine de la santé. <br />
              Mais il me manquait quelque chose... une touche de{" "}
              <span className="text-bold text-pinkDark">créativité</span>, un
              brin de concret et une once de fantaisie pour être en accord avec
              mes valeurs. <br />
              Après un bilan de compétences, le métier de développeuse web s'est
              rapidement imposé et j'ai commencé ma formation où j'ai pu
              réaliser plusieurs projets concrets et confirmer mon appétence
              pour le{" "}
              <span className="text-bold text-pinkDark">
                code fullstack
              </span> ! <br />
              J'ai ensuite été en stage chez Fedmind, puis bénévole chez O
              Media, où j'ai découvert le No Code et fait partie d'une belle
              expérience humaine pour aider les personnes souffrant d'obésité à
              se sentir mieux dans leur corps et dans leur tête.
              <br />
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les valeurs de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6 font-quicksand">
            Mes valeurs
          </h3>
          <div className="lg:grid grid-cols-2 content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/18/23/19/gesture-772977_960_720.jpg"
              alt="Wendy Baqué"
              className="rounded-md shadow-md grayscale h-72 mb-6"
            />
            <p className="font-quicksand text-light leading-relaxed">
              ✨ Je suis une personne{" "}
              <span className="text-bold text-pinkDark">rigoureuse</span>, ce
              qui me permet de mener à bien mes projets et activités confiées de
              A à Z et de bien gérer mon temps de travail. Je fais également
              preuve de créativité et d'imaginativité, ce qui me pousse à
              trouver des{" "}
              <span className="text-bold text-pinkDark">
                solutions innovantes et originales
              </span>{" "}
              pour répondre à vos besoins numériques.
              <br />
              ✨Soucieuse d’améliorer ma pratique dans un monde en constante
              évolution, je sais faire preuve d’
              <span className="text-bold text-pinkDark">adaptabilité</span>,
              comme le prouve ma reconversion professionnelle dans un domaine
              totalement nouveau pour moi.
              <br />✨ Etre{" "}
              <span className="text-bold text-pinkDark">autonome</span> dans ma
              pratique est important pour moi afin d'envisager tous les
              possibles qui s'offrent à moi et repose avant tout sur un{" "}
              <span className="text-bold text-pinkDark">
                climat de confiance
              </span>{" "}
              établi avec le client. Lui être utile apparaît aussi primordial
              pour donner un sens à mon travail.
              <br />✨ Enfin, ma{" "}
              <span className="text-bold text-pinkDark">curiosité</span> me
              donne un goût certain pour l'apprentissage et l'actualisation de
              mes acquis dans un monde en constante évolution.
              <br />
              <br />➕{" "}
              <span className="text-bold text-pinkDark">Mon petit plus ?</span>
              Je suis développeuse, mais aussi psychologue ! Ainsi, tout
              naturellement, je suis attirée par l' UX et l' UI. C'est un
              domaine qui me parle, et qui me tient toujours à cœur. Mon regard
              est un bonus : 100% user first et centrage sur l'accessibilité !
              <br />➕{" "}
              <span className="text-bold text-pinkDark">
                Mon autre petit plus ?
              </span>{" "}
              Je suis no code friendly ! Face à la demande croissante sur des
              outils de solutions en ligne clés en mains, je me suis formée au
              no-code et te propose des solutions pour augmenter ta productivité
              et votre efficacité !
            </p>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les valeurs de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6 font-quicksand">
            Mes objectifs
          </h3>
          <div className="lg:grid grid-cols-2 content-center items-center">
            <p className="font-quicksand text-light p-10 leading-relaxed">
              <span className="text-bold text-2xl text-pinkDark">
                Te proposer une solution numérique sur mesure
              </span>
              <br />
              <br />
              Des services de création de sites web, il y en a plein ! Il y en a
              même des gratuits qui font tout à ta place ! 😵‍💫 Mais cela ne
              remplacera jamais le travail d'un développeur formé à créer des
              <span className="text-bold text-pinkDark">
                sites internet robustes et viables, avec un design à la pointe
                des tendances
              </span>
              . 💅
              <br />
              Avec moi, toi et ton site internet serez chouchoutés et, surtout,
              écoutés ! Car oui, je suis à l'écoute de tes besoins et de tes
              envies numériques pour pouvoir y répondre au mieux et aider ton
              business à décoler sur internet. <br />
              On se détend, pas de stress, je m'occupe de tout et on en discute
              ! T'être utile fait partie de l'essence même de{" "}
              <span className="text-bold text-pinkDark">WenDev</span> !
            </p>
            <p className="font-quicksand text-light p-10 leading-relaxed">
              <span className="text-bold text-2xl text-pinkDark">
                Te proposer des offres adaptées à tes finances
              </span>{" "}
              <br />
              <br />
              Tout le monde n'a pas les moyens d'investir dans la création d'un
              site web du tonnerre, surtout lrosque l'on débute son activité. 😨
              Et ça, je l'ai bien compris (et je suis passée par là aussi ! 😅)
              !
              <br />
              Pas de panique, j'ai une solution adaptée à tes besoins (et sans
              brader mes services certifiés !). Pour chaque type d'offre, je te
              propose une gamme de fonctionnalités et des tarifs évolutifs.{" "}
              <br />
              <span className="text-bold  text-pinkDark">
                Avec tout ça, je suis persuadée que tu trouveras ton bonheur !
              </span>
              🥳
            </p>
            <p className="font-quicksand text-light p-10 leading-relaxed">
              <span className="text-bold text-2xl text-pinkDark">
                Etre une référence en création de sites web pour les auteurs de
                livres
              </span>{" "}
              <br />
              <br />
              Aujourd'hui, les réseaux sociaux ou les boutiques en ligne ne
              suffisent plus aux écrivains pour présenter leurs livres et se
              faire connaître.{" "}
              <span className="text-bold  text-pinkDark">
                Il est primordial de ne plus faire l'impasse sur une vitrine
                virtuelle accessible à tous
              </span>
              , comme peut l'être un site internet ! <br />
              En tant qu'auteure de romans, je suis déjà passée par la création
              de mon site internet et ai fait face à plusieurs difficultés que
              je peux ainsi t'éviter !{" "}
              <span className="text-bold  text-pinkDark">
                Je sais de quoi tu as besoin
              </span>{" "}
              pour mettre tes livres et ton univers littéraire en valeur. 📚
              <br /> Grâce à{" "}
              <span className="text-bold  text-pinkDark">
                mes compétences et à mon réseau
              </span>
              , tu bénéficieras d'une solution numérique optimale pour toucher
              tes lecteurs et, qui sait, peut-être qu'une maison d'édition
              passera par là ! 😉
            </p>
            <div>
              <p className="font-quicksand text-light p-10 leading-relaxed">
                <span className="text-bold text-2xl text-pinkDark">
                  Etre LE média d'information français sur le métier de
                  développeur web
                </span>{" "}
                <br />
                <br />
                Lors de mon auto-formation, j'ai remarqué que beaucoup de médias
                relatifs au développement web sont en anglais. Logique, me
                diras-tu, comme il est important de connaître cette langue dans
                ce métier. <br />
                <span className="text-bold  text-pinkDark">
                  Mais pour ceux qui débutent et qui ne sont pas habitués ? 🥺{" "}
                </span>
                <br />
                C'est pourquoi je compte bien devenir un média de référence pour
                informer les apprentis développeurs web français qui souhaitent
                se lancer dans le code. <br />
                Principalement sur mon{" "}
                <span className="text-bold  text-pinkDark">
                  compte Instagram
                </span>
                , je publie des ressources utiles et partage la culture du web
                pour mieux la faire connaître. Infos sur le diplôme, les écoles,
                des sites gratuits pour s'entraîner, des mêmes ou encore de bons
                tuyaux,
                <span className="text-bold  text-pinkDark">
                  viens me rejoindre pour faire partie de la communauté{" "}
                </span>
                !
              </p>
              <button className="text-white w-64 m-2 p-10 bg-gradient-to-br from-purple to-pinkDark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6">
                <a
                  href="https://wendybaqueauteure.wendev.fr/"
                  alt="Redirection vers le site d'auteure de Wendy Baqué"
                  aria-label="Redirection vers le site d'auteure de Wendy Baqué"
                  rel="noreferrer"
                  target="_blank"
                >
                  Rejoins-moi sur Instagram ! <InstagramIcon />
                </a>
              </button>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <section
          aria-label="Les activités d'auteure de WenDev"
          className="lg:ml-20 lg:mr-20"
        >
          <h3 className="text-pink text-2xl text-center mt-12 mb-6 font-quicksand">
            Mes activités d'auteure de romans
          </h3>
          <div className="lg:grid grid-cols-2  content-center items-center lg:m-10 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776_960_720.jpg"
              alt="Les activités d'auteure de romans de WenDev"
              className="rounded-md shadow-md grayscale h-72 mb-6"
            />
            <div>
              <p className="font-quicksand text-light leading-relaxed">
                Je suis aussi également{" "}
                <span className="text-bold text-pinkDark">
                  auteure de 4 romans contemporains
                </span>{" "}
                sur des thématiques qui me tiennent à coeur : la santé mentale,
                l'acceptation de soi, la discrimination, la quête de sens, la
                pression sociale, la Vie, la musique et la fin de vie.
                <br />
                Cela me permet de développer des compétences organisationnelles,
                de maîtriser les normes rédactionnelles et, surtout, d'être à l'
                avec le{" "}
                <span className="text-bold text-lg text-pinkDark">
                  storytelling
                </span>{" "}
                lorsque j'ai un projet à te présenter !
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
