import React from "react";

const Testimonials = () => {
  const avis = [
    {
      id: 1,
      client: "Virginie, auteure",
      avis: "Un super boulot d'une efficacité remarquable ! Un site est indispensable pour les auteurs, mais c'est tellement dur quand on n'y connait rien… Alors Wendy est là pour vous et elle le fait très bien. Patiente, bienveillante, attentive, efficace : je recommande à 100% ! Foncez, vous serez aussi convaincus que moi ! Encore merci Wendy pour cette superbe collaboration !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1006,fit=crop/mnl5QxKqZxUgbbJ0/portrait-virginie-roger-A3QrRkW6zviDM6po.webp",
    },

    {
      id: 2,
      client: "Kay Norde, auteure",
      avis: "Wendy a créé le site web idéal pour moi, abordant aussi bien mon travail d'autrice que d'illustratrice. Elle a été très à l'écoute, réactive et efficace. De plus, elle s'est facilement adaptée à mes besoins, puisque je l'ai contactée avec une idée bien précise en tête. Je recommande !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=503,fit=crop/mk38be03x9ikbkQL/photokaynorde-min-Y4L820RrGBHyVqnR.png",
    },

    {
      id: 3,
      client: "Babeth, gérante de gîtes",
      avis: "Au top ! Disponibilité, réactivité, patience et professionnalisme sont au rdv avec Wendev. Je recommande vivement pour tout ce qui concerne créations et refonte de sites internet.",
      avatar: "https://i.goopics.net/s2oa0a.png",
    },

    {
      id: 4,
      client: "Nicolas, auteur",
      avis: "Super travail et super créatrice ! Wendy m'a fignolé un site parfait pour mon activité d'auteur ! Beau, facile de navigation et techniquement parfait. Je recommande ses services !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=1814,fit=crop/dJoJxjOnzRHqoa4N/portrait2-reduit-YbNaxxk3aeC79p6W.webp",
    },

    {
      id: 5,
      client: "Rose-Marie, traductrice",
      avis: "J'ai confié la création de mon site web à Wendy et j'en suis ravie ! Elle a su faire preuve de beaucoup de réactivité, mais aussi de patience devant mes nombreuses corrections et demandes de modifications. De plus, Wendy est honnête, organisée et très sympathique - moi qui suis très exigeante, je la recommande à 100% !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=617,fit=crop/YZ92DG9Mz5u846Q4/waltzer_rosemarie_photo-removebg-preview-YleMN1ZbvVCgppoW.webp",
    },

  ];
  return (
    <section
      className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
      aria-label="Avis des clients sur l'offre aux auteurs"
      id="testimonials"
    >
      <h3 className="text-pinkDark font-bold text-4xl mt-6 mb-6">
        Vos avis sur mes prestations
      </h3>
      <div className=" tracking-tight grid grid-rows-1 grid-flow-rows gap-10">
        {avis.map((avi) => (
          <div
            key={avi.id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden text-black bg-real rounded-lg shadow-lg"
          >
            <figure className="lg:grid grid-rows-1 grid-flow-col gap-4">
              <p className="text-xl tracking-tight p-4 grid content-center">
                {avi.avis}
              </p>
              <figcaption className="flex mt-6 space-x-3 p-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={avi.avatar}
                  alt="avatar"
                  aria-label="avatar"
                />
                <cite className="grid content-center">{avi.client}</cite>
                <div className="p-4 mt-6 flex mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-stars"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-stars"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-stars"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-stars"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-stars"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                    5.0
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      <button
        className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
        alt="Redirection vers la page de témoignages"
        target="_blank"
        rel="noreferrer"
      >
        <a href="/Temoignages">Consultez les autres témoignages de clients satisfaits ! </a>
      </button>
    </section>
  );
};

export default Testimonials;
