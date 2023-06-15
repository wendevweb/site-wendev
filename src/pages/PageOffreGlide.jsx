import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import ButtonFonctionnement from "../components/ButtonFonctionnement";
import building from "../assets/building.png";
import glide from "../assets/glide.webp";
import wendev6 from "../assets/wendev-6.webp";

const PageOffreGlide = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre Glide app | WenDev</title>
        <link href="https://www.wendev.fr/OffreGlide" />
      </Helmet>
      <section aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2015/07/03/17/23/iphone-830480_960_720.jpg')",
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
                  Création d'
                  <br />
                  <span className="text-pink">application mobile</span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Une application mobile est le must have pour ton entreprise ou
                  pour ta marque. Et tout cela, sans base de données à
                  construire !
                  <br /> Je transforme ton tableur Google Sheet ou Airtable en
                  application pour mobile !<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section
          aria-label="A quoi sert une maquette ?"
          className="lg:m-10 p-10"
        >
          <h3 className="text-pink text-2xl text-center mb-6">
            C'est quoi, Glide ?
          </h3>
          <div className="flex justify-center">
            {" "}
            <img
              src={glide}
              alt="Firebase"
              aria-label="Firebase"
              className="w-52 p-4"
            />
          </div>
          <div className="lg:flex">
            <p className="text-light leading-relaxed pb-6 text-xl">
              <span className="font-bold text-pinkDark">GlideApps</span> est une
              plateforme en ligne qui permet de transformer instantanément les
              données issues de feuilles de calcul (Google Sheet, Excel) en
              applications mobiles qui s'adaptent sur iOS, Android, les
              téléphones et les tablettes.
              <br />
              L'interface propose des thèmes modernes, totalement
              personnalisables à ton image, la synchronisation avec ta feuille
              de calculs, le lien possible avec de nombreuses autres
              applications no-code (ex : Zapier, Stripe...), des actions
              personnalisées et la gestion de profils de tes utilisateurs.
              <br />
              C'est la solution idéale pour gérer ton CMS d'entreprise, ton
              journal d'activités, ton portfolio ou encore une application de
              cours personnalisés ou de quiz.
              <br />
              Je te livre une solution fonctionnelle et te donne les clés pour
              la faire évoluer toi-même par la suite.
            </p>
            <img src={wendev6} alt="" className="h-fit" />
          </div>
        </section>
      </Fade>
      <div className="grid justify-items-center ">
        <h3 className="text-pink text-2xl text-center mb-6">
          Page en construction... Contenu à venir !
        </h3>
        <img
          src={building}
          alt="Page en construction"
          aria-label="page en construction>"
        />
      </div>
      <Fade>
        <section>
          <h3 className="text-pink text-2xl text-center">Tarifs</h3>
          <p className="text-center p-6">A venir... Stay tuned !😎</p>
        </section>
      </Fade>
      <ButtonFonctionnement />
      <Fade>
        <section>
          <div className="lg:grid grid-cols-1">
            <h3 className="text-pink text-2xl text-center mb-4">
              Un petit mot sur mes tarifs...{" "}
            </h3>
            <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
              En tant que développeuse web indépendante/freelance, je détermine
              le prix de mes prestations en fonction du coût de mon travail, le
              temps passé à sa réalisation, je m’adapte à des demandes
              différentes et je me place face à la concurrence. C’est un travail
              de création ! Et tout travail mérite salaire, non ? 😉
            </p>
            <p className="text-light leading-relaxed lg:pr-64 lg:pl-64 m-4">
              En choisissant de travailler avec un développeur web, tu accèdes à
              un service personnalisé d’une flexibilité et d’une liberté qui
              n’ont rien à voir avec celles proposées par une agence ou une
              embauche d’un salarié.
            </p>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default PageOffreGlide;
