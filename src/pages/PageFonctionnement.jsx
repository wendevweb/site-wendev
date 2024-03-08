import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Disclosure, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import wendev1 from "../assets/wendev-1.webp";
import wendev2 from "../assets/wendev-2.webp";
import Rdv from "../components/Rdv";

const PageFonctionnement = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fonctionnement | WenDev</title>
        <link href="https://www.wendev.fr/Fonctionnement" />
      </Helmet>
      <section aria-label="Bannière de présentation du déroulement d'un projet avec WenDev.">
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
                  Comment se déroule un projet client de A à Z
                  <br />
                  <strong className="text-pinkDark"> avec WenDev</strong>
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Vous avez envie de me confier la création de votre projet
                  numérique ? <br/> Découvrez vite comment nous allons travailler
                  ensemble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
            <img src={wendev1} alt="" className="h-fit" />
            <ol className="tracking-tight list-decimal text-xl">
              <li className="list-decimal">
                Vous avez un projet web et vous êtes intéressé.e par un ou plusieurs de
                mes services. C'est trop cool ! 🤩
              </li>
              <br />
              <li>
                Nous prenons rendez-vous avec{" "}
                <a
                  href="https://calendly.com/wendevweb/premier-rendez-vous"
                  alt="Redirection vers le portfolio de Wendy Baqué"
                  aria-label="Redirection vers la prise de rendez-vous"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="font-bold text-pinkDark">Calendly</span>
                </a>{" "}
                à la date et à l'heure de votrechoix (réunion en visio via Google
                Meet, d'1/2h en général, possibilité par téléphone également) pour discuter de votre projet et voir
                comment je peux le mettre en valeur avec une solution numérique
                sur mesure.
              </li>
              <br />

              <li>
                Je vous fais un devis gratuitement, via PandaDoc (une application
                d'envoi et de signature de documents 100% en ligne et sécurisé).
              </li>
              <br />

              <li>
                J'attends votre retour et vos envies de modifications. Si besoin,
                nous reprenons rendez-vous pour en discuter.😉
              </li>
              <br />

              <li>Si tout est ok, un acompte de 30% est à payer.</li>
              <br />

              <li>
                Je vous demande des informations supplémentaires qui me
                seront nécessaires pour le contenu de votre site (les couvertures des livres, leurs résumés, les liens d'achat, les avis de vos lecteurs, les liens de vos réseaux sociaux, vos prochains événements littéraires, etc.).
              </li>
              <br />

              <li>
                Une fois l'acompte reçu, je commence à travailler sur votre super
                projet !
              </li>
              <br />

              <li>
                Je vous envoie une version démo de votre solution numérique en
                fonction de l'offre ou des offres que vous avez choisies. C'est le
                moment de me dire si cela convient à vos envies !
                Si besoin, nous pouvons reprendre rendez-vous pour en discuter.
              </li>
              <br />

              <li>Si tout est ok, le solde restant est à payer.</li>
              <br />

              <li>
                Dès que j'ai reçu l'intégralité de la somme due, je finalise la mise en ligne et vous envoie ta
                solution numérique clé en main et vous n'aurez plus qu'à
                l'utiliser comme bon vous semble ! 🥳
              </li>
              <br />
              <li className="pb-10">
                <span className="font-bold text-pinkDark">Bonus !</span> Si le
                service que vous avez choisi le prévoit, je mets en avant votre projet
                et votre profil sur mes réseaux sociaux.
              </li>
              < Rdv />
            </ol>
          </section>
        </div>
      </Fade>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
            <h2 className="font-quicksand text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-pinkDark">
              Foire aux questions
            </h2>
          </section>
          <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
            <div className="tracking-tight text-xl lg:p-10 lg:grid grid-cols-1 gap-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>Comment contacter WenDev ?</span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Pour toute question ou demande, tu peux me contacter par
                        e-mail à cette adresse :{" "}
                        <span className=" text-pinkDark">
                          wendevweb@gmail.com
                        </span>
                        .
                        <br />
                        Tu peux aussi prendre rendez-vous pour discuter de ton
                        projet{" "}
                        <a
                          href="https://calendly.com/wendevweb/premier-rendez-vous"
                          alt="Redirection vers le portfolio de Wendy Baqué"
                          aria-label="Redirection vers la prise de rendez-vous"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="hover:font-bold text-pinkDark">
                            par ici
                          </span>
                        </a>
                        . <br /> Enfin, tu peux me contacter via{" "}
                        <Link to="/Contact">
                          {" "}
                          <span className="hover:font-bold text-pinkDark">
                            le formulaire de contact du site
                          </span>
                        </Link>
                        .
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>
                        Avec quelles technologies travaille WenDev ? Est-ce
                        fiable ?{" "}
                      </span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Je développe mes sites internet à l'aide d'une librairie
                        Javascript : React.js, une référence pour les
                        applications et les sites web dynamiques en quelques
                        pages, comme ce que je te propose ! C'est une
                        technologie récente, bien documentée et sécurisée. Pour
                        le style et le design, il est réalisé à l'aide de
                        Tailwindcss, qui permet de créer des visuels en phase
                        avec les tendances actuelles. <br /> Pour les offres en
                        no-code et celles réservées aux auteurs de livres, je
                        réalise mes solutions numériques avec le Website Builder
                        de Hostinger, mon hébergeur chouchou. Il permet de
                        réaliser des sites web sécurisées, au top du modernisme,
                        avec une optimisation des paramètres SEO.
                        <br /> De manière générale, je réalise une veille
                        documentaire hebdomadaire pour te proposer des solutions
                        numériques actualisées et sécurisées.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>Pourquoi dois-je payer un accompte de 30% ?</span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Un acompte est un paiement partiel que tu verses avant
                        que je commence à travailler sur ton projet, donc d'y
                        engager mon temps et mon énergie. Il nous permet de nous
                        engager tous les deux de manière sécure et pérenne, en
                        toute légalité !<br /> Bon à savoir : Une fois l'acompte
                        versé, si tu ne souhiates plus travailler avec moi, tu
                        perds la totalité de ton acompte versé et je serai en
                        mesure de te réclamer des dommages et intérêts.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>
                        Que se passe-t-il si ma solution numérique ne fonctionne
                        plus après quelques temps ?
                      </span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Dans le monde du web, les techniques et technologies
                        évoluent sans cesse, alors il se peut qu'une solution
                        numérique devienne obsolète. Je te rassure, c'est très
                        rare... mais possible ! Pas de panique.😉 Il te suffit
                        de me le signaler (si je ne l'ai pas vu avant toi) et je
                        mettrais ton projet au goût du jour dans les plus brefs
                        délais.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>
                        J'ai un besoin numérique spécifique qui ne figure pas
                        dans les offres proposées par WenDev. Que faire ?
                      </span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Avec WenDev, tout est possible ! Je serai ravie de
                        travailler sur ton projet s'il sort des sentiers battus
                        et de ce que je propose comme services. Tu peux me
                        contacter directement via la page Contact de ce site ou
                        m'envoyer un mail à l'adresse suivante :{" "}
                        <span className=" text-pinkDark">
                          wendevweb@gmail.com
                        </span>{" "}
                        pour me parler de ton projet numérique. Je suis sûre que
                        nous pourrons trouver une solution ensemble et je
                        pourrais te faire un devis totalement personnalisé.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>
                        Que se passe-t-il si je souhaite faire évoluer (ajouter
                        des fonctionnalités, changer le design, etc.) de ma
                        solution numérique une fois terminée ?
                      </span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Tu as envie de remettre ta solution numérique au goût du
                        jour ou de rajouter des fonctionnalités que nous
                        n'avions pas prévues au départ ou ton activité évolue,
                        alors que ton projet est déjà terminé depuis quelques
                        temps ? C'est super ! 🤩
                        <br /> Tu n'as qu'à me contacter par e-mail à cette
                        adresse :{" "}
                        <span className=" text-pinkDark">
                          wendevweb@gmail.com
                        </span>{" "}
                        ou reprendre rendez-vous via la page de Contact pour que
                        je puisse te faire une offre sur mesure en fonction de
                        ce que tu veux ajouter. 😉
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-2">
                      <span>
                        Que se passe-t-il si je me rends compte que j'ai besoin
                        d'une fonctionnalité en plus de ce qui a été décidé dans
                        le devis de départ ?
                      </span>{" "}
                      <ChevronRightIcon
                        className={
                          open
                            ? "m-2 rotate-90 transform rounded-full bg-pinkDark text-white"
                            : "rounded-full bg-pinkDark text-white m-2"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-real rounded-md shadow-lg p-4">
                        Oups ! 😱 Un oubli ou quelque chose que nous n'avions
                        pas anticipé, cela arrive ! 😉 Tu peux me contacter par
                        e-mail à cette adresse :{" "}
                        <span className=" text-pinkDark">
                          wendevweb@gmail.com
                        </span>{" "}
                        ou via le formulaire de Contact du site. Nous trouverons
                        un accord pour que ton projet soit tip top avant son
                        lancement et cela donnera lieu à un nouveau devis et une
                        nouvelle facture.{" "}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <br />
            </div>
            <img src={wendev2} alt="" className="h-fit" />
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default PageFonctionnement;
