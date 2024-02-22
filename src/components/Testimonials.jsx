import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";


const Testimonials = () => {
  const avis = [
    {
      id: 1,
      client: "Farah, auteure",
      avis: "Très heureuse de ma collaboration avec Wendy. Elle a été gentille, attentive, qui sait de quoi elle parle. Elle arrive à retranscrire nos envies et nos besoin. Au top !! Je recommande les yeux fermés.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=327,fit=crop/mv0LN7ebOPipRqNq/capture-daa-c-cran-2023-05-05-110947-YZ9My14GE9UoBpwg.png",
    },

    {
      id: 2,
      client: "CINOS Consulting",
      avis: " La création de notre site internet s'est très bien passée grâce à Wendy. Elle nous a donné de bons conseils, nous a fourni un site à notre image et est à l'écoute de nos besoins. Elle propose des offres et des tarifs adaptés à tous et est très professionnelle.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=256,fit=crop,q=95/AR0lLk5KMqsBZEgG/15-AVLD7kD1qRhoj5lx.png",
    },

    {
      id: 3,
      client: "Alexandra, auteure",
      avis: "Un super site réalisé en une semaine. Du très bon travail et Wendy est réactive et l'écoute de son client.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=449,h=675,fit=crop/AoPEN2pLJpukJVMJ/photo-a-propos-YKbo6XKe3RUDN72w.jpg",
    },

    {
      id: 4,
      client: "Elisa, auteure",
      avis: "Un grand MERCI à Wendy qui a travaillé sur mon projet de site internet pour mon activité d'autrice ! Merci pour ta patience et bravo pour ta créativité et ta réactivité. Tu as su répondre à ma demande et être de bons conseils et disponible au besoin. Je recommande si vous souhaitez réaliser votre site !",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=992,fit=crop/meP5GXQMoZHKanEx/photo_elisa-YKb1ELe42xigle5e.jpg",
    },

    {
      id: 5,
      client: "Elisabet, auteure",
      avis: "Excellents échanges. Professionnelle rapide, efficace, patiente. Le résultat va au-delà de mes attentes.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=606,fit=crop/YrD1MeGzKXhb8OB9/elisabet-guillot-2-YNqORDJ88et8eNnw.png",
    },

    {
      id: 6,
      client: "Kay Norde, auteure",
      avis: "Wendy a créé le site web idéal pour moi, abordant aussi bien mon travail d'autrice que d'illustratrice. Elle a été très à l'écoute, réactive et efficace. De plus, elle s'est facilement adaptée à mes besoins, puisque je l'ai contactée avec une idée bien précise en tête. Je recommande !",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=503,fit=crop/mk38be03x9ikbkQL/photokaynorde-min-Y4L820RrGBHyVqnR.png",
    },

    {
      id: 7,
      client: "Léa, auteure",
      avis: "Je recommande les yeux fermés, Wendy ! Elle est sérieuse et professionnelle. Je lui ai donné carte blanche car malheureusement je n'avais pas trop d'idées, et elle a su m'épater en me rendant un site vraiment bien construit. Les couleurs choisies sont tops ! Merci encore.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=504,fit=crop/YNqpLVDw6JtlPaw6/photo-lea-taille-normal-YD0Dr6VwrRH3l5zv.webp",
    },

    {
      id: 8,
      client: "Babeth, gérante de gîtes",
      avis: "Au top ! Disponibilité, réactivité, patience et professionnalisme sont au rdv avec Wendev. Je recommande vivement pour tout ce qui concerne créations et refonte de sites internet.",
      avatar: "https://i.goopics.net/s2oa0a.png",
    },

    {
      id: 9,
      client: "Elsa, auteure",
      avis: "Wendy a su créer le site web qui correspondait à mes besoins d'auteure et à mes désirs. Elle a été à l'écoute de mes demandes et s'est montrée très réactive tout au long de nos échanges. Le travail effectué est de grande qualité. Je recommande vivement ses services.",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=424,fit=crop/AR07O73aVWFGrMg0/p1190999-meP1D5nM9ZsPDazY.webp",
    },

    {
      id: 10,
      client: "Les Gardiennes du Souvenir",
      avis: "Wendy nous a réalisé un site web très professionnel et répondant exactement à nos attentes, en un temps record. Nous recommandons vivement ses services et son écoute bienveillante auprès de ses clients !",
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=136,h=136,fit=crop/AGB3XwRQJ0HQoNp1/logo_lgds-removebg-preview-m2WlV7QOrVce5oe7.png",
    },
    
  ];
  return (
    <div>
      <section aria-label="Avis des clients sur l'offre aux auteurs">
        <h3 className="mt-6 text-pink text-2xl text-center">
          Vous en parlez !
        </h3>
        <div className="lg:m-10 p-6 bg-bg">
          <div className="lg:grid grid-cols-5 gap-4 p-4">
          {avis.map((avi) => (
            <div key={avi.id} className="mt-6 flex flex-col w-full max-w-sm rounded-lg shadow-lg bg-real  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden">
              <div className=" flex flex-col content-center justify-center justify-items-center pb-6">
                <figure className="max-w-screen-md mx-auto text-center">
                  <blockquote>
                    <p className="text-l font-quicksand tracking-tight p-4">
                     {avi.avis}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={avi.avatar}
                      alt="avatar"
                      aria-label="avatar"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <cite className="pr-3 font-medium text-gray-900">
                        {avi.client}
                      </cite>
                    </div>
                  </figcaption>
                  <div className="mt-6 flex content-center justify-center justify-items-centermt-2.5 mb-5">
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
                </figure>
              </div>
            </div>
          ))}
          </div>
          </div>
      </section>
 
      <section className="flex justify-center">
        <a
          href="https://g.page/r/CYWv0F3b4eiiEBI/review"
          alt="Redirection les avis Google de WenDev"
          aria-label="Redirection les avis Google de WenDev"
          target="_blank"
          rel="noreferrer"
        >
          <button className="m-6 shadow-lg bg-real font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
            <StarBorderIcon /> Mettre un avis sur Google <StarBorderIcon />
          </button>
        </a>
      </section>
    </div>
    
  );
};

export default Testimonials;
