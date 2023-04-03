import React from 'react'
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Entreprise = () => {
  return (
    <div className="h-screen lg:flex flex-col justify-items-center font-quicksand">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Entreprise | WenDev</title>
      <link href="https://wendev.fr/Entreprise" />
    </Helmet>
    <Fade>
        <section className="m-4 p-4">
          <h2 className="text-center font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-pink">
            Un projet ? Une mission ? <br /> Besoin d'un dev freelance ou indépendant ?
          </h2>
        </section>
      </Fade>
    </div>
  )
}

export default Entreprise