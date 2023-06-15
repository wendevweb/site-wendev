import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Disclosure, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import wendev1 from "../assets/wendev-1.webp";
import wendev2 from "../assets/wendev-2.webp";

const PageFonctionnement = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fonctionnement | WenDev</title>
        <link href="https://www.wendev.fr/Fonctionnement" />
      </Helmet>
      <section className="m-4 p-4">
        <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
          Comment se passe la création <br />
          d'un projet de A à Z avec WenDev ?{" "}
        </h2>
      </section>
      <Fade>
        <section className="m-4 p-4 lg:flex">
          <img src={wendev1} alt="" className="h-fit" />
          <ol className="list-decimal font-quicksand text-light text-xl lg:p-10 leading-relaxed">
            <li className="list-decimal">
              Tu as un projet web et tu es intéressé.e par un ou plusieurs de
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
              à la date et à l'heure de ton choix (réunion en visio via Google
              Meet, d'1/2h en général) pour discuter de ton projet et voir
              comment je peux le mettre en valeur avec une solution numérique
              sur mesure.
            </li>
            <br />

            <li>
              Je te fais un devis gratuitement, via PandaDoc (une application
              d'envoi et de signature de documents 100% en ligne et sécurisé).
            </li>
            <br />

            <li>
              J'attends ton retour et tes envies de modifications. Si besoin,
              nous reprenons rendez-vous pour en discuter.😉
            </li>
            <br />

            <li>Si tout est ok, un acompte de 30% est à payer.</li>
            <br />

            <li>
              Je peux te demander des informations supplémentaires qui me seront
              nécessaires pour le contenu de ton site (les couvertures de tes
              livres, tes liens vers les réseaux sociaux, ta biographie, etc.).
            </li>
            <br />

            <li>
              Une fois l'acompte reçu, je commence à travailler sur ton super
              projet !
            </li>
            <br />

            <li>
              Je t'envoie une version démo de ta solution numérique en fonction
              de l'offre ou des offres que tu as choisies. C'est le moment de me
              dire si cela convient à tes besoins et tes envies ! Si besoin,
              nous pouvons reprendre rendez-vous pour en discuter.
            </li>
            <br />

            <li>Si tout est ok, le solde restant est à payer.</li>
            <br />

            <li>
              Dès que j'ai reçu l'intégralité de la somme due, je t'envoie ta
              solution numérique clé en main et tu n'auras plus qu'à l'utiliser
              comme bon te semble ! 🥳
            </li>
            <br />
            <li>
              <span className="font-bold text-pinkDark">Bonus !</span> Si le
              service que tu as choisi le prévoit, je mets en avant ton projet
              et ton profil sur mes réseaux sociaux.
            </li>
          </ol>
        </section>
      </Fade>
      <Fade>
        <section className="m-4 p-4">
          <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
            Foire aux questions
          </h2>
        </section>
        <section className="m-4 p-4 lg:flex">
          <div className="font-poppins lg:p-10 lg:grid grid-cols-1 gap-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
                      Comment contacter WenDev ?
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
                      Pour toute question ou demande, tu peux me contacter par
                      e-mail à cette adresse :{" "}
                      <span className="font-bold text-pinkDark">
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
                        <span className="font-bold text-pinkDark">par ici</span>
                      </a>
                      . <br /> Enfin, tu peux me contacter via{" "}
                      <Link to="/Contact">
                        {" "}
                        <span className="font-bold text-pinkDark">
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
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
                      Avec quelles technologies travaille WenDev ? Est-ce fiable
                      ?{" "}
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
                      Javascript : React.js, une référence pour les applications
                      et les sites web dynamiques en quelques pages, comme ce
                      que je te propose ! C'est une technologie récente, bien
                      documentée et sécurisée. Pour le style et le design, il
                      est réalisé à l'aide de Tailwindcss, qui permet de créer
                      des visuels en phase avec les tendances actuelles. <br />{" "}
                      Pour les offres en no-code et celles réservées aux auteurs
                      de livres, je réalise mes solutions numériques avec le
                      Website Builder de Hostinger, mon hébergeur chouchou. Il
                      permet de réaliser des sites web sécurisées, au top du
                      modernisme, avec une optimisation des paramètres SEO.
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
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
                      Pourquoi dois-je payer un accompte de 30% ?
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
                      Un acompte est un paiement partiel que tu verses avant que
                      je commence à travailler sur ton projet, donc d'y engager
                      mon temps et mon énergie. Il nous permet de nous engager
                      tous les deux de manière sécure et pérenne, en toute
                      légalité !<br /> Bon à savoir : Une fois l'acompte versé,
                      si tu ne souhiates plus travailler avec moi, tu perds la
                      totalité de ton acompte versé et je serai en mesure de te
                      réclamer des dommages et intérêts.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
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
                      rare... mais possible ! Pas de panique.😉 Il te suffit de
                      me le signaler (si je ne l'ai pas vu avant toi) et je
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
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
                      J'ai un besoin numérique spécifique qui ne figure pas dans
                      les offres proposées par WenDev. Que faire ?
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
                      travailler sur ton projet s'il sort des sentiers battus et
                      de ce que je propose comme services. Tu peux me contacter
                      directement via la page Contact de ce site ou m'envoyer un
                      mail à l'adresse suivante : wendevweb@gmail.com pour me
                      parler de ton projet numérique. Je suis sûre que nous
                      pourrons trouver une solution ensemble et je pourrais te
                      faire un devis totalement personnalisé.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
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
                      jour ou de rajouter des fonctionnalités que nous n'avions
                      pas prévues au départ ou ton activité évolue, alors que
                      ton projet est déjà terminé depuis quelques temps ? C'est
                      super ! 🤩
                      <br /> Tu n'as qu'à me contacter par e-mail à cette
                      adresse : wendevweb@gmail ou reprendre rendez-vous via la
                      page de Contact pour que je puisse te faire une offre sur
                      mesure en fonction de ce que tu veux ajouter. 😉
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="font-bold p-2">
                    <span className="font-bold">
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
                      Oups ! 😱 Un oubli ou quelque chose que nous n'avions pas
                      anticipé, cela arrive ! 😉 Tu peux me contacter par e-mail
                      à cette adresse : wendevweb@gmail.com ou via le formulaire
                      de Contact du site. Nous trouverons un accord pour que ton
                      projet soit tip top avant son lancement et cela donnera
                      lieu à un nouveau devis et une nouvelle facture.{" "}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <br />
          </div>
          <img src={wendev2} alt="" className="h-fit" />
        </section>
      </Fade>
    </div>
  );
};

export default PageFonctionnement;
