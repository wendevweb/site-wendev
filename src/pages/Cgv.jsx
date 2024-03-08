import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Helmet } from "react-helmet";

const Cgv = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>C.G.V. | WenDev</title>
        <link href="https://www.wendev.fr/Cgv" />
      </Helmet>
      <section aria-label="Bannière de présentation des conditions générales de vente de WenDev.">
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
                  Conditions générales de vente
                  <br />
                  <strong className="text-pinkDark">
                    {" "}
                    En vigueur au 14/02/2023
                  </strong>
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Les présentes conditions générales constituent un contrat de
                  vente à distance, définissant les droits et obligations de
                  WenDev et du Client dans le cadre de la vente des produits
                  référencés sur le site Internet www.wendev.fr ci-après dénommé
                  le « Site ». Pour toute question ou réclamation relative aux
                  produits, à sa commande, à ses données personnelles, au droit
                  de rétraction, à l’application de la garantie des produits le
                  Client peut contacter WenDev :<br />
                  <span className="font-bold"> Wendev – Wendy Baqué 971 Route de Pernay 37340 Ambillou 06 98
                  15 71 13 wendevweb@gmail.com</span>
                  <br />
                  L’ensemble du contenu du Site (illustrations, textes,
                  libellés, marques, images, vidéos…) est la propriété de
                  WenDev. Toute reproduction intégrale ou partielle de ce Site
                  est interdite, sauf si WenDev donne son autorisation expresse
                  et préalable. WenDev n’autorise pas la création de liens
                  hypertextes sauf accord exprès et préalable. WenDev ne saurait
                  être responsable des dommages, temporaires ou permanents,
                  causés au système informatique du Client ni des pertes ou
                  dommages éventuels qui seraient subis notamment suite à
                  l’accès ou la navigation sur son Site, sauf faute de sa part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
        {/* Article 1 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">1. Objet et champ d'application</span>{" "}
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
                  Les présentes conditions générales de vente (CGV) constituent
                  le socle de la négociation commerciale et sont
                  systématiquement adressées ou remises à chaque acheteur pour
                  lui permettre de passer commande. Les conditions générales de
                  vente décrites ci-après détaillent les droits et obligations
                  de WenDev et de son client dans le cadre de la vente des
                  marchandises proposées sur le site www.wendev.fr. Toute
                  acceptation du devis/bon de commande en ce compris la clause{" "}
                  <span className="font-bold">
                    « Je reconnais avoir pris connaissance et j'accepte les
                    conditions générales de vente ci-annexées »
                  </span>{" "}
                  implique l'adhésion sans réserve de l'acheteur aux présentes
                  conditions générales de vente.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 2 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  2. Les produits ou services proposés
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
                  WenDev apporte le plus grand soin à la mise en ligne des
                  informations relatives aux caractéristiques essentielles des
                  produits au moyen notamment de descriptifs techniques émanant
                  de ses partenaires et fournisseurs et de photographies
                  illustrant les produits ou services. <br />A cet égard, WenDev
                  s’engage à répondre à toutes demandes complémentaires de
                  renseignement sur les produits ou services. <br />
                  Les caractéristiques des produits ou services , notices
                  descriptives, clichés photographiques ou dessins portés sur ce
                  Site ne sont pas contractuelles. <br />
                  En tout état de cause, il est rappelé que WenDev n’intervient
                  aucunement dans la mise en œuvre des produits vendus,
                  l’utilisation de ces produits étant de la seule responsabilité
                  du fournisseur manufacturier .
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 3 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">3. Les commande ou adhésion</span>{" "}
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
                  Le Client déclare avoir la capacité de conclure le présent
                  contrat, c'est-à-dire avoir la majorité légale en France et ne
                  pas être sous tutelle, curatelle ou sauvegarde de justice.
                  <br />
                  Le Client passera commande conformément aux indications qui
                  lui sont données sur le Site. Il s’engage à remplir la
                  commande en veillant à donner les informations nécessaires
                  complètes et exactes. En tout état de cause, le Client est
                  responsable des informations saisies lors de la prise de
                  commande. En cas d’erreur dans le libellé du destinataire
                  (nom, adresse, date de naissance, date du Certificat médical,
                  etc.), WenDev ne saurait être tenu pour responsable des
                  retards engendrés dans la livraison des produits ou services.
                  Les frais de réexpédition des produits seront à la charge du
                  Client.
                  <br />
                  La validation de la commande par le Client formalise de
                  manière ferme et définitive le contrat de vente à distance
                  conclu avec WenDev et sera confirmé par email au Client.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 4 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">4. Disponibilité des produits</span>{" "}
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
                  Les produits sont proposés à la vente dans la limite des
                  stocks disponibles et des possibilités d’approvisionnement
                  auprès des fournisseurs de WenDev. La disponibilité des
                  produits sera définitivement validée lors de la confirmation
                  d’expédition de la commande qui sera adressée au Client par
                  courrier électronique.
                  <br />
                  Dans l’hypothèse où l’un des produits commandés ne serait pas
                  disponible lors de la préparation de la commande du Client,
                  WenDev s’engage à contacter le Client par courrier
                  électronique afin de lui indiquer dans quels délais ce produit
                  pourrait le cas échéant lui être livré ou quel autre produit
                  de caractéristiques et prix équivalents pourrait lui être
                  proposé. Le Client s’engage à donner son accord ou non sur ce
                  nouveau délai de livraison ou sur ce remplacement de produit
                  dans un délai de 15 jours. A défaut de réponse dans ce délai,
                  le Client sera réputé avoir accepté ce nouveau délai de
                  livraison ou ce remplacement.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 5 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">5. Prix</span>{" "}
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
                  Les prix de vente des produits mentionnés sur le Site sont
                  indiqués toutes taxes comprises, hors frais de port et
                  d’emballage sur les produits. Leur montant est en tout état de
                  cause indiqué à la fin de la commande en ligne, avant sa
                  validation. Le prix facturé au Client est le prix précisé sur
                  la confirmation de commande comprenant le prix des produits
                  auquel s’ajoute le prix du transport et l’emballage
                  (facultatif).
                  <br />
                  WenDev s'accorde le droit de modifier ses tarifs à tout
                  moment. Toutefois, elle s'engage à facturer les marchandises
                  commandées aux prix indiqués lors de l'enregistrement de la
                  commande.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 6 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">6. Rabais et remise</span>{" "}
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
                  Les tarifs proposés comprennent les rabais et remise que
                  WenDev serait amenée à octroyer compte tenu de ses résultats
                  ou de la prise en charge par l'acheteur de certaines
                  prestations.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 7 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">7. Escompte</span>{" "}
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
                  Aucun escompte ne sera consenti en cas de paiement anticipé.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 8 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">8. Modalités de paiement</span>{" "}
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
                  Le règlement des sommes due peuvent se faire : soit par carte
                  bancaire ; soit par virement bancaire ; le cas échéant,
                  indiquer les autres moyens de paiement acceptés (ex : Stripe).
                  <br />
                  WenDev impose le versement d'un acompte à la signature du
                  devis, correspondant à 30% du montant total. La livraison du
                  produit fini se fera uniquement après réception de la totalité
                  du montant dû.{" "}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 9 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">9. Retard de paiement </span>{" "}
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
                  En cas de défaut de paiement total ou partiel des biens et/ou
                  services à l'échéance, il lui est notifier par une mise en
                  demeure de s'acquitter des sommes due et l'acheteur doit
                  verser à WenDev une pénalité de retard égale à trois fois le
                  taux de l'intérêt légal. Cette pénalité est calculée sur le
                  montant TTC de la somme restant due, et court à compter de la
                  date d'échéance du prix sans qu'aucune mise en demeure
                  préalable ne soit nécessaire.
                  <br />
                  En sus des indemnités de retard, toute somme, y compris
                  l’acompte, non payée à sa date d'exigibilité, produira de
                  plein droit le paiement d’une indemnité forfaitaire de 40
                  euros due au titre des frais de recouvrement. Articles 441-10
                  et D. 441-5 du code de commerce.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 10 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">10. Clause résolutoire</span>{" "}
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
                  Si dans les quinze jours qui suivent la mise en œuvre de la
                  clause "Retard de paiement", l'acheteur ne s'est pas acquitté
                  des sommes restant dues, la vente sera résolue de plein droit
                  et pourra ouvrir droit à l'allocation de dommages et intérêts
                  au profit de WenDev.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 11 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                 11. Clause de réserve de propriété
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
                  WenDev conserve les propriété des biens et services vendus
                  jusqu’au paiement intégral du prix, en principal et en
                  accessoires. À ce titre, si l’acheteur fait l’objet d’un
                  redressement ou d’une liquidation judiciaire, WenDev se
                  réserve le droit de revendiquer, dans le cadre de la procédure
                  collective, les marchandises vendues et restées impayées.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 12 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">12. Livraison</span>{" "}
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
                  La livraison est effectuée :<br />
                  ● soit par la remise directe par e-mail de la marchandise à
                  l'acheteur ;
                  <br />
                  ● soit par le dépôt de la marchandise à l'adresse e-mail
                  indiqués par l'acheteur sur le bon de commande. <br />
                  Le délai de livraison indiqué lors de l'enregistrement de la
                  commande n'est donné qu'à titre indicatif et n'est aucunement
                  garanti. <br />
                  Par voie de conséquence, tout retard raisonnable dans la
                  livraison des produits ne pourra pas donner lieu au profit de
                  l'acheteur à :<br />
                  ● l'allocation de dommages et intérêts ; <br />● l'annulation
                  de la commande.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 13 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">13. Délai de rétractation</span>{" "}
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
                  En application de l’article L221-20 du Code de la Consommation
                  le Client consommateur dispose d’un délai légal de rétraction
                  de 14 jours francs à compter de la date de réception des
                  produits ou services commandés.
                  <br />
                  Pour exercer ce droit de rétractation, le Client doit, dans le
                  délai indiqué ci-avant, adresser à WenDev , un courrier
                  électronique précisant sa volonté d’user de ce droit.
                  <br />
                  Le Client doit retourner les produits, à la même adresse, dans
                  le délai de rétractation, dans leur emballage d’origine, non
                  utilisés et en parfait état, sans aucune trace ni marque, avec
                  tous les accessoires (y compris la notice) et les cadeaux
                  éventuellement offerts. Il doit retourner le produit avec un
                  double de la facture ainsi que le « formulaire de retour »
                  dûment complété. Seuls les frais de retour des produits
                  restent à la charge du Client. Si l’ensemble des conditions
                  exigées pour le retour des produits ne sont pas respectées,
                  WenDev pourra déduire des sommes à rembourser, le cas échéant,
                  une quote-part du prix de vente correspondant au prix de vente
                  des produits manquants, ainsi qu’à la réparation, au
                  remplacement et/ou à la remise en état des produits
                  éventuellement dégradés.
                  <br />
                  WenDev s’engage à rembourser le Client consommateur, par le
                  moyen de paiement utilisé ou par virement bancaire uniquement
                  , dans un délai de 14 jours à compter de la réception de la
                  demande du Client précisant la volonté de rétractation du
                  Client consommateur et retournant les produits. WenDev se
                  réserve le droit de procéder au remboursement dans le délai
                  requis à partir de la confirmation d’envoi du produit par le
                  client ou la confirmation d’annulation du service.
                  <br />
                  Conformément à l’article L 121-20-2 du code de la Consommation
                  le Client consommateur ne bénéficie pas d’un droit de
                  rétractation dès lors que : <br />● Des services sont fournis
                  avec l’accord du Client consommateur avant la fin du délai de
                  14 jours francs. <br />● Les produits commandés ont été
                  confectionnés selon les spécifications du <br />● Client
                  consommateur ou nettement personnalisés. <br />● Les produits
                  commandés ne peuvent du fait de leur nature être réexpédiés.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 14 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">14. Obligations du client</span>{" "}
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
                  L’utilisation des produits sera réalisée sous la
                  responsabilité du Client.
                  <br />
                  WenDev recommande au Client d’utiliser le produit acquis en
                  respectant les consignes de sécurité et les recommandations
                  d’usage précisées sur le descriptif du produit sur le Site
                  et/ou sur l’emballage du produit et sur sa notice explicative
                  le cas échéant.
                  <br />
                  Le Client devra également respecter les normes applicables,
                  accessibles à titre d’information du le Site.
                  <br />
                  Dans ces conditions, le Client est tenu d’assurer le maintien
                  en bon état du produit, de l’utiliser conformément à sa
                  destination, en respectant notamment les prescriptions données
                  par les normes et le fabricant du produit.
                  <br />
                  A cet égard, il est déconseillé au Client d’apporter des
                  modifications au produit, d’installer des accessoires, des
                  pièces annexes ou tous autres dispositifs sur le produit.
                  <br />
                  Le Client s’oblige à stocker et utiliser les produits
                  conformément à la réglementation en vigueur et à respecter
                  l’ensemble de ses obligations légales.
                  <br />
                  WenDev ne peut en aucun cas être responsable des défauts et
                  détériorations des produits livrés consécutifs à des
                  conditions anormales ou non conformes de stockage, de
                  conservation, de pose et d’utilisation postérieures à la
                  livraison de ces produits, sauf manquement de ses obligations
                  légales en sa qualité de vendeur.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 15 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">15. Responsabilité</span>{" "}
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
                  WenDev s’engage à réaliser les obligations définies dans la
                  commande.
                  <br />
                  Conformément aux stipulations de l’article 8 des présentes,
                  toute utilisation non conforme des produits dégage totalement
                  la responsabilité directe ou indirecte de WenDev. Nous
                  déclinons en particulier toute responsabilité pour tout
                  dommage causé aux personnes ou aux biens qui pourrait résulter
                  de l’emploi non conforme, inadapté et/ou dénaturé des produits
                  vendus et notamment en cas de pose des produits commandés dans
                  un endroit inadapté, vétuste ou dangereux.
                  <br />
                  WenDev ne pourra être déclarée responsable en cas de
                  tentatives de réparation par des tiers ou le Client lui-même,
                  des détériorations dues à une mauvaise utilisation ou un
                  entretien défectueux.
                  <br />
                  En tout état de cause, WenDev ne peut en aucun cas être
                  responsable des défauts et détériorations des produits livrés
                  consécutifs à des conditions anormales ou non conformes
                  d’utilisation postérieure à sa délivrance.
                  <br />
                  WenDev ne pourra être responsable du fait notamment :
                  <br />● De l’usure normale de ses produits ou des conditions
                  de cours
                  <br />● Des détériorations ou accidents provenant de
                  négligences, défauts de surveillance ou d’entretien
                  <br />● Des dommages consécutifs aux modifications,
                  incorporations ou réparations des produits ;
                  <br />● Des dommages sur les produits soumis à des sujétions
                  anormales.
                  <br />
                  II appartient au Client de fournir toute justification quant à
                  la réalité des vices ou anomalies constatés. II devra laisser
                  à WenDev toute facilité pour procéder à la constatation de ces
                  vices ou anomalies. En cas de vice ou anomalie dûment reconnus
                  par WenDev, l’obligation de cette dernière sera limitée au
                  remplacement des pièces défectueuses.
                  <br />
                  Lorsque la responsabilité de WenDev est engagée à la suite
                  d’une faute de sa part, la réparation ne s’applique qu’aux
                  seuls dommages directs, personnels et certains que le Client a
                  subi à l’exclusion expresse de la réparation de tous dommages
                  et/ou préjudices indirects et immatériels, tels que les
                  préjudices financiers, atteinte à l’image, …
                  <br />
                  Le montant des dommages et intérêts que WenDev peut être
                  amenée à verser dans les conditions précitées est en tout état
                  de cause limité au montant du prix précisé dans le devis ou le
                  bon de commande.
                  <br />
                  WenDev n’est aucunement responsable de tous préjudices sur la
                  vie, le corps et la santé.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 16 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">16. Garanties</span>{" "}
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
                  Les garanties accordées sur les biens ou services vendus
                  correspondent strictement à celles qui nous ont été consenties
                  pour chaque type de produit par nos propres fournisseurs et
                  consistent seulement dans le remplacement d’un cours. En aucun
                  cas la garantie n’implique la possibilité d’une demande de
                  dommages et intérêts ou d’une indemnité pour quelque cause que
                  ce soit.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 17 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  17. RGPD et traitement des données
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
                  WenDev perçoit, enregistre, change, utilise et transmet des
                  données personnelles des internautes dans le cadre de
                  l’exécution des commandes passées sur le Site, des relations
                  Clients, des conseils et services Clients ainsi que pour la
                  préservation des intérêts commerciaux de WenDev, notamment
                  pour des besoins de préservation de la preuve. Dans la mesure
                  où cela est nécessaire à l’exécution des obligations de
                  WenDev, cette dernière transmet des informations personnelles
                  à des tiers, par exemple le transporteur.
                  <br />
                  Le Client dispose d’un droit d’accès, de modification, de
                  rectification et de suppression des données le concernant
                  conformément à la loi française « Informatique et Liberté »
                  N°78-17 du 6 janvier 1978. Pour exercer ce droit, il lui
                  suffit d’envoyer un courrier à l’adresse suivante :
                  <br />
                  <span className="font-bold">
                    Wendev – Wendy Baqué 971 Route de Pernay 37340 Ambillou 06
                    98 15 711 3 wendevweb@gmail.com
                  </span>
                  <br />
                  En s’inscrivant sur le Site, le Client s’engage à fournir des
                  informations sincères et véritables le concernant. La
                  communication de fausses informations est contraire aux
                  présentes conditions générales ainsi qu’aux conditions
                  d’utilisation figurant sur le Site.
                  <br />
                  Aucune déclaration et inscription à la CNIL n’est obligatoire.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 18 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">18. Force majeure</span>{" "}
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
                  La responsabilité de WenDev ne pourra pas être mise en cause
                  si la non-exécution ou le retard dans l’exécution de l’une des
                  obligations décrites dans les présentes conditions générales
                  de vente découle d’un cas de force majeure. À ce titre, la
                  force majeure s’entend de tout événement extérieur,
                  imprévisible et irrésistible au sens de l’article 1148 du Code
                  Civil.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 19 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">19. Tribunal compétent</span>{" "}
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
                  Le présent contrat est assujetti au droit français. Tout
                  litige qui résulterait de son exécution sera soumis aux
                  tribunaux dont dépend le siège de l’association.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br/>
        {/* Article 20 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  20. Mentions obligatoires à destination des clients consommateurs
                  relatifs à la garantie commerciale
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
                  En application de l’article L.211-15 du Code de la
                  consommation, sont reproduits ci-après les articles L 211-4, L
                  211-5 et L 211-12 du Code de la consommation, ainsi que
                  l’article 1641 et le premier alinéa de l’article 1648 du Code
                  civil, dispositions dont le Client reconnaît expressément
                  avoir pris connaissance préalablement à sa commande.
                  <br />
                  Article L211-4 du Code de la consommation:
                  <br />
                  Le vendeur est tenu de livrer un bien conforme au contrat et
                  répond des défauts de conformité existant lors de la
                  délivrance.
                  <br />
                  Il répond également des défauts de conformité résultant de
                  l’emballage, des instructions de montage ou de l’installation
                  lorsque celle-ci a été mise à sa charge par le contrat ou a
                  été réalisée sous sa responsabilité.
                  <br />
                  Article L211-5 du Code de la consommation:
                  <br />
                  Pour être conforme au contrat, le bien doit :
                  <br />
                  Être propre à l’usage habituellement attendu d’un bien
                  semblable et, le cas échéant :
                  <br />
                  <br />• correspondre à la description donnée par le vendeur et
                  posséder les qualités que celui-ci a présentées à l’acheteur
                  sous forme d’échantillon ou de modèle
                  <br />• présenter les qualités qu’un acheteur peut
                  légitimement attendre eu égard aux déclarations publiques
                  faites par le vendeur, par le producteur ou par son
                  représentant, notamment dans la publicité ou l’étiquetage ;
                  <br />
                  2° Ou présenter les caractéristiques définies d’un commun
                  accord par les parties ou être propre à tout usage spécial
                  recherché par l’acheteur, porté à la connaissance du vendeur
                  et que ce dernier a accepté.
                  <br />
                  Article L211-12 du Code de la consommation:
                  <br />
                  L’action résultant du défaut de conformité se prescrit par
                  deux ans à compter de la délivrance du bien.
                  <br />
                  Article 1641 du Code civil :
                  <br />
                  Le vendeur est tenu de la garantie à raison des défauts cachés
                  de la chose vendue qui la rendent impropre à l’usage auquel on
                  la destine, ou qui diminuent tellement cet usage que
                  l’acheteur ne l’aurait pas acquise, ou n’en aurait donné qu’un
                  moindre prix, s’il les avait connus.
                  <br />
                  Article 1648 du Code civil :
                  <br />
                  L’action résultant des vices rédhibitoires doit être intentée
                  par l’acquéreur dans un délai de deux ans à compter de la
                  découverte du vice.
                  <br />
                  Article L321-4 du Code du Sport au 25 mai 2006
                  <br />
                  Les associations et les fédérations sportives sont tenues
                  d’informer leurs adhérents de l’intérêt que présente la
                  souscription d’un contrat d’assurance de personnes couvrant
                  les dommages corporels auxquels leur pratique sportive peut
                  les exposer.
                  <br />
                  Article 38
                  <br />
                  Modifié par Loi n°2005-1564 du 15 décembre 2005 – art. 15 (V)
                  JORF 16 décembre 2005
                  <br />
                  Abrogé par Ordonnance 2006-596 2006-05-23 art. 7 3° JORF 25
                  mai 2006
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <br />
        <button className="mt-10 mb-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
          <a
            href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:7b75e619-9b96-340e-ba6a-22ba437f9b69"
            alt="Redirection vers la page de téléchargement du document en pdf"
            aria-label="Redirection vers la page de téléchargement du document en pdf"
            rel="noreferrer"
            target="_blank"
          >
            <PictureAsPdfIcon /> Télécharger le document en pdf{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cgv;
