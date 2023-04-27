import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import wendev1 from "../assets/wendev-1.webp";
import wendev2 from "../assets/wendev-2.webp";

const PageFonctionnement = () => {
  return (
    <div className="lg:flex flex-col justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fonctionnement | WenDev</title>
        <link href="https://wendev.fr/Fonctionnement" />
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
              mes services.
            </li>
            <br />
            <li>
              Nous prenons rendez-vous via Calendly à la date et à l'heure de
              ton choix.
            </li>
            <br />

            <li>Je te fais un devis gratuitement.</li>
            <br />

            <li>
              J'attends ton retour et tes envies de modifications. Si besoin,
              nous reprenons rendez-vous pour en discuter.
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
              comme bon te semble !
            </li>
            <br />
            <li>
              <span className="text-bold text-pinkDark">Bonus !</span> Si le
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      blablabla
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
                      Pourquoi dois-je payer la TVA ?
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      Blablabla
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      Blablabla parce que ça arrive comme les technologies et
                      logiciels évoluent
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      Blablabla
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      Blablabla
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
                    <Disclosure.Panel className="bg-real rounded-md shadow-md p-4">
                      Blablabla
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <br />
          </div>
          <img src={wendev2} alt="" className="h-fit"/>
        </section>
      </Fade>
    </div>
  );
};

export default PageFonctionnement;
