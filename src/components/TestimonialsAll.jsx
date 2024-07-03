import React from "react";

const Testimonials = () => {
  const avis = [
    {
      id: 1,
      client: "Farah, auteure",
      avis: "Très heureuse de ma collaboration avec Wendy. Elle a été gentille, attentive, qui sait de quoi elle parle. Elle arrive à retranscrire nos envies et nos besoin. Au top !! Je recommande les yeux fermés.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=438,fit=crop/mv0LN7ebOPipRqNq/20230817_130945-m6LrwqQ697ULRoZr.jpg",
    },

    {
      id: 2,
      client: "CINOS Consulting",
      avis: " La création de notre site internet s'est très bien passée grâce à Wendy. Elle nous a donné de bons conseils, nous a fourni un site à notre image et est à l'écoute de nos besoins. Elle propose des offres et des tarifs adaptés à tous et est très professionnelle.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=256,fit=crop,q=95/AR0lLk5KMqsBZEgG/15-AVLD7kD1qRhoj5lx.png",
    },

    {
      id: 3,
      client: "Alexandra, auteure",
      avis: "Un super site réalisé en une semaine. Du très bon travail et Wendy est réactive et l'écoute de son client.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=449,h=675,fit=crop/AoPEN2pLJpukJVMJ/photo-a-propos-YKbo6XKe3RUDN72w.jpg",
    },

    {
      id: 4,
      client: "Elisa, auteure",
      avis: "Un grand MERCI à Wendy qui a travaillé sur mon projet de site internet pour mon activité d'autrice ! Merci pour ta patience et bravo pour ta créativité et ta réactivité. Tu as su répondre à ma demande et être de bons conseils et disponible au besoin. Je recommande si vous souhaitez réaliser votre site !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=992,fit=crop/meP5GXQMoZHKanEx/photo_elisa-YKb1ELe42xigle5e.jpg",
    },

    {
      id: 5,
      client: "Elisabet, auteure",
      avis: "Excellents échanges. Professionnelle rapide, efficace, patiente. Le résultat va au-delà de mes attentes.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=606,fit=crop/YrD1MeGzKXhb8OB9/elisabet-guillot-2-mv0lEGPEEnURLZMe.webp",
    },

    {
      id: 6,
      client: "Kay, auteure",
      avis: "Wendy a créé le site web idéal pour moi, abordant aussi bien mon travail d'autrice que d'illustratrice. Elle a été très à l'écoute, réactive et efficace. De plus, elle s'est facilement adaptée à mes besoins, puisque je l'ai contactée avec une idée bien précise en tête. Je recommande !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=503,fit=crop/mk38be03x9ikbkQL/photokaynorde-min-Y4L820RrGBHyVqnR.png",
    },

    {
      id: 7,
      client: "Léa, auteure",
      avis: "Je recommande les yeux fermés, Wendy ! Elle est sérieuse et professionnelle. Je lui ai donné carte blanche car malheureusement je n'avais pas trop d'idées, et elle a su m'épater en me rendant un site vraiment bien construit. Les couleurs choisies sont tops ! Merci encore.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=504,fit=crop/YNqpLVDw6JtlPaw6/photo-lea-taille-normal-YD0Dr6VwrRH3l5zv.webp",
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
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=424,fit=crop/AR07O73aVWFGrMg0/p1190999-meP1D5nM9ZsPDazY.webp",
    },

    {
      id: 10,
      client: "Les Gardiennes du Souvenir",
      avis: "Wendy nous a réalisé un site web très professionnel et répondant exactement à nos attentes, en un temps record. Nous recommandons vivement ses services et son écoute bienveillante auprès de ses clients !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=136,h=136,fit=crop/AGB3XwRQJ0HQoNp1/logo_lgds-removebg-preview-m2WlV7QOrVce5oe7.png",
    },

    {
      id: 11,
      client: "Virginie Roger",
      avis: "Un super boulot d'une efficacité remarquable ! Un site est indispensable pour les auteurs, mais c'est tellement dur quand on n'y connait rien… Alors Wendy est là pour vous et elle le fait très bien. Patiente, bienveillante, attentive, efficace : je recommande à 100% ! Foncez, vous serez aussi convaincus que moi ! Encore merci Wendy pour cette superbe collaboration !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1006,fit=crop/mnl5QxKqZxUgbbJ0/portrait-virginie-roger-A3QrRkW6zviDM6po.webp",
    },

    {
      id: 12,
      client: "Nicolas Pellolio",
      avis: "Super travail et super créatrice ! Wendy m'a fignolé un site parfait pour mon activité d'auteur ! Beau, facile de navigation et techniquement parfait. Je recommande ses services !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=1814,fit=crop/dJoJxjOnzRHqoa4N/portrait2-reduit-YbNaxxk3aeC79p6W.webp",
    },
    {
      id: 13,
      client: "Sissy Batzy",
      avis: "WenDev m'a créé un site web à mon image, tout ce que j'attendais et très simple d'utilisation. Elle a géré toute l partie mentions obligatoires et autres joyeusetés. Un super design en résultat, je la recommande à 1000%.",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=297,fit=crop/m2W4pk8RR2f9zJqo/logo_sissy_batzy-removebg-preview-AMqneG38XpFlzDly.webp",
    },
    {
      id: 14,
      client: "Rose-Marie Waltzer",
      avis: "J'ai confié la création de mon site web à Wendy et j'en suis ravie! (domaine de la traduction, site web de 4 pages en 3 langues). Elle a su faire preuve de beaucoup de réactivité, mais aussi de patience devant mes nombreuses corrections et demandes de modifications. De plus, Wendy est honnête, organisée et très sympathique - moi qui suis très exigeante, je la recommande à 100% !",
      avatar:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=617,fit=crop/YZ92DG9Mz5u846Q4/waltzer_rosemarie_photo-removebg-preview-YleMN1ZbvVCgppoW.webp",
    },
  ];
  return (
    <section
      className="font-quicksand max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1"
      aria-label="Avis des clients de Wendev"
      id="testimonials"
    >
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
    </section>
  );
};

export default Testimonials;
