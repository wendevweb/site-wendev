import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <header className="mb-40 background-radial-gradient overflow-hidden">
      <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
        <div className="container mx-auto xl:px-32 text-black">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0" style={{ zIndex: "10" }}>
              <h1 className="text-pink font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                WenDev <br />
                <span className="text-white">Pour créer ton site internet</span>
                <br />
                <span className="text-purple">ur mesure !</span>
              </h1>
              <p className="font-quicksand text-xl text-white opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="mb-12 lg:mb-0 relative">
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              ></div>
              <div id="radius-shape-2" className="absolute shadow-lg"></div>
              <div className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                      <input
                        type="text"
                        className="shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 text-base font-quicksand text-black bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                        placeholder="Ton joli prénom"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 text-base font-quicksand text-black bg-white bg-clip-padding  rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                        placeholder="Ton super nom de famille"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="shadow-md focus:shadow-lg form-control block w-full px-3 py-1.5 mb-6 text-base font-quicksand text-black bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-purpleDark focus:bg-white focus:border-purple focus:outline-none"
                    placeholder="Ton e-mail de la mort qui tue !"
                  />
                  <div className="form-check flex justify-center mb-6">
                    <input
                      className="font-quicksand form-check-input appearance-none h-4 w-4 rounded-sm bg-white checked:bg-pink checked:border-pink focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label
                      className="form-check-label inline-block text-black font-quicksand"
                      for="flexCheckChecked"
                    >
                      Je m'inscris à la newsletter
                    </label>
                  </div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="font-quicksand inline-block px-6 py-2.5 mb-6 w-full bg-pink text-white font-medium text-lg leading-tight uppercase rounded shadow-md focus:shadow-lg hover:bg-pinkDark hover:shadow-lg focus:bg-pink  focus:outline-none focus:ring-0 active:bg-pink active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ENVOYER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
