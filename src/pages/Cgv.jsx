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
      <section
        id="cgv"
        aria-label="Bannière de présentation des conditions générales de vente de WenDev."
      >
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url('https://i.goopics.net/ay4x9z.png')",
            height: "600px",
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
                  Le contrat conclu entre WenDev et le CLIENT sera régi par les
                  conditions générales qui suivent et qui concernent les
                  prestations de services informatiques effectuées par WenDev
                  pour le CLIENT.
                  <br /> Ces conditions générales, afin d’être validées, doivent
                  être signées par les deux parties. Une fois signées, elles
                  font partie intégrante du contrat et sont donc opposables aux
                  2 parties.
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
                <span className="font-bold">1. Objet</span>{" "}
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
                  Le présent contrat a pour objet la fourniture de services
                  Internet conformes aux exigences du CLIENT et proposés par
                  WENDEV. Il s’agit notamment de la création et de la gestion
                  d’un site Internet réalisé par WENDEV. Le CLIENT ne sera donc
                  éventuellement auteur que du contenu qu’il apportera à son
                  site (sous réserve des créations appartenant à des tiers), la
                  mise en forme de ce dernier étant prédéterminée suite à
                  l’entretien intitulé « Premier rendez-vous » avec les deux
                  parties.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 2 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">2. Obligations du prestataire</span>{" "}
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
                  WENDEV s’engage à mettre tout en œuvre pour assurer la
                  permanence, la continuité et la qualité des services fournis
                  au CLIENT et souscrit à ce titre à une obligation de moyens.
                  WENDEV s’engage envers son CLIENT aux prestations précisées
                  sur le devis qui lui sera fourni. Concernant les données
                  apportées par le CLIENT lui-même, WENDEV s’engage à procéder à
                  leur sauvegarde mensuelle. Elle s’engage également à les
                  détruire dans un délai immédiat, à compter de la prise d’effet
                  de la résiliation, leur restitution étant techniquement
                  impossible. Par ailleurs, WENDEV s’engage à assurer le bon
                  fonctionnement du site. Toutefois, le CLIENT devra sauvegarder
                  l’ensemble des textes et documents qu’il apportera à son site
                  et ce, grâce à un logiciel de traitement de texte ou grâce à
                  un autre moyen s’il le désire, WENDEV ne pouvant être tenue
                  pour seule responsable en cas de perte de ces derniers. WENDEV
                  ne s’engageant en effet qu’à procéder à la sauvegarde
                  mensuelle des données du CLIENT, un dysfonctionnement
                  survenant juste avant une sauvegarde pourrait entraîner la
                  perte des textes et documents insérés. Aucune responsabilité
                  de WENDEV ne pourra enfin être retenue en cas de perte des
                  dites données ou en cas de mauvais fonctionnement lorsque
                  cette perte ou ce dysfonctionnement aura été occasionné par un
                  usage non conforme du logiciel ou par un cas de force majeure.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 3 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">3. Obligations du client</span>{" "}
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
                  Un projet de création de site Internet nécessite une
                  participation active et constructive du CLIENT. Le CLIENT
                  devra collaborer avec le PRESTATAIRE à la réalisation du site
                  en mettant à sa disposition tout document ou information qui
                  pourrait être demandé par le PRESTATAIRE pour la réalisation
                  de la prestation. Le CLIENT devra répondre dans un délai
                  suffisamment court aux demandes d'informations
                  complémentaires, en cas contraire le non-respect des délais de
                  livraison ne saurait être imputable au PRESTATAIRE. Ce prix
                  devra être réglé par virement bancaire, en accord avec le
                  CLIENT. Un acompte correspondant à 30% du prix total est à
                  régler avant le début des prestations. Tout rejet de
                  prélèvement fera l'objet de la facturation d'une pénalité
                  forfaitaire de 40 euros HT pour frais d'impayés et de la
                  suspension du site 15 jours après le rejet du prélèvement en
                  cas de non règlement de la facture. Le CLIENT s’engage en
                  outre à utiliser son site Internet dans le respect des règles
                  suivantes : la conformité du contenu du site diffusé aux
                  bonnes mœurs et à l’ordre public, le CLIENT est entièrement
                  responsable du contenu de son site Internet. Dans le cas
                  contraire, le PRESTATAIRE se réserve le droit, après une mise
                  en demeure restée infructueuse, de suspendre le compte en
                  question jusqu’à la mise en conformité de ce dernier. Cette
                  mise en conformité sera appréciée par le PRESTATAIRE et devra
                  intervenir dans un délai de 24 heures à compter de la mise en
                  demeure. Dans l’hypothèse où le CLIENT aura violé plus de 2
                  fois les règles susvisées, le PRESTATAIRE pourra suspendre
                  définitivement, et sans notification préalable, la diffusion
                  du site concerné, la violation répétée entraînant résiliation
                  de plein droit du présent contrat. Ni la suspension
                  définitive, ni la suspension provisoire ne s’accompagneront
                  d’un remboursement du CLIENT, ces dernières lui étant
                  imputables. Le PRESTATAIRE pourra même demander des
                  dommages-intérêts en cas de préjudice éventuel à son endroit.
                  Il est enfin précisé que le PRESTATAIRE s’engage à être en
                  conformité avec les règles de déclarations à la CNIL. Le site
                  web inclus une page spécifique à la gestion des RGPD (nommée «
                  mentions légales »). Le CLIENT autorise le PRESTATAIRE à
                  mentionner en bas du site Internet du CLIENT la mention "Made
                  with love by WenDev ".
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 4 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">4. Titularité des droits</span>{" "}
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
                  Le présent contrat n’opère aucune cession des droits de
                  propriété intellectuelle au profit du CLIENT. La forme du site
                  lui-même étant entièrement assurée par le PRESTATAIRE, le
                  CLIENT ne pourra se prétendre auteur du site qu’il mettra
                  ainsi en ligne. Néanmoins, le CLIENT restera propriétaire des
                  différents contenus qu’il apportera à son site et notamment
                  des textes, images et documents. Il s’assurera par ailleurs de
                  la titularité des contenus qu’il mettra en ligne et devra
                  obtenir l’autorisation de diffusion voire la cession des
                  droits relatifs aux contenus dont il ne serait pas
                  propriétaire. Il sera seul responsable d’une mise en ligne de
                  contenus sans autorisation et le PRESTATAIRE ne pourra pas
                  alors être poursuivi en contrefaçon.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 5 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  5. Référencement et publicité du site
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
                  Les moteurs de recherches permettent aux internautes de
                  découvrir l'adresse d'un site qui les intéresse. La tâche du
                  PRESTATAIRE consiste en une déclaration manuelle après des
                  principaux moteurs de recherches (Google, Bing, Yahoo, etc.…)
                  ainsi qu'éventuellement auprès d'autres d'annuaires. Il ne
                  peut être tenu responsable des réactions de ces sociétés. Les
                  offres de référencement correspondent à la mise en place dans
                  le code source des pages d'un certain nombre de mots clés
                  permettant aux moteurs de recherche d'indexer le site. Il
                  s'agit ici pour le PRESTATAIRE d'une obligation de moyens et
                  non de résultats. Le PRESTATAIRE ne saurait garantir la
                  présence effective du site du CLIENT dans les moteurs et
                  annuaires. Le PRESTATAIRE peut avoir recours à des liens
                  sponsorisés auprès de sociétés spécialisées afin d'optimiser
                  le référencement pour son CLIENT. Bon à savoir : votre site
                  n'apparaîtra pas immédiatement dans les résultats de recherche
                  dès sa mise en ligne, il faut lui laisser quelques mois pour
                  que les robots de Google le repèrent et passent dessus pour
                  référencer ses mots clés.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 6 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">6. Durée et résiliation</span>{" "}
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
                  Le présent contrat est conclu pour une durée de 1 an et ce à
                  compter de la date d’acceptation de l’offre de service par le
                  CLIENT. Le CLIENT dispose à compter de cette date d’un droit
                  de rétractation durant 15 jours qui lui permettra de remettre
                  en cause la formation du présent contrat et sera remboursé à
                  95 % (5% retenu pour la mise en place). Le contrat est
                  renouvelable par tacite reconduction. Chacune des parties
                  pourra le dénoncer par lettre recommandée avec avis de
                  réception sous réserve du respect d’un préavis de 30 jours au
                  moins avant la fin du contrat. Aucune dénonciation ne pourra
                  donc devenir effective durant les 12 premiers mois. Toute
                  dénonciation qui interviendrait avant ce délai serait sans
                  effet et le PRESTATAIRE serait en droit de conserver le prix
                  payé par le CLIENT dans sa totalité. Toutefois, le CLIENT
                  pourrait obtenir la suspension de son site et la destruction
                  des données mises en ligne par lui. prestations.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 7 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">7. Responsabilités</span>{" "}
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
                  Tout manquement du PRESTATAIRE dans l’exécution de ses
                  obligations est susceptible d’engager sa responsabilité. Le
                  CLIENT pourra demander au PRESTATAIRE de corriger ses erreurs
                  ou ses manquements dans les plus brefs délais. Néanmoins, la
                  responsabilité du PRESTATAIRE ne pourra pas être retenue en
                  cas de dysfonctionnements majeurs (panne serveur, panne
                  software, panne matérielle notamment...) quand ceux-ci
                  n’auront pas occasionné d’interruption de mise en ligne
                  supérieure à 96 heures pour un mois de diffusion. Le
                  PRESTATAIRE s’engage dans une telle hypothèse à mettre en
                  œuvre tous les moyens dont il dispose afin de rétablir la
                  diffusion des sites concernés. Dans le cas contraire,
                  c’est-à-dire s’il n’arrivait pas à rétablir un fonctionnement
                  normal du site dans un délai de 96 heures, le CLIENT serait
                  dédommagé du préjudice subi par une prorogation de la durée de
                  son contrat correspondant à la durée pendant laquelle son site
                  serait resté hors ligne. Il va de soi enfin que le PRESTATAIRE
                  ne peut être tenue responsable du caractère fallacieux des
                  données communiquées par le CLIENT ou du non-respect par
                  ce-dernier des droits de propriété intellectuelle appartenant
                  à des tiers. Le PRESTATAIRE ne s’engage en effet qu’à
                  suspendre le site du CLIENT pour le cas où celui-ci porterait
                  notamment atteinte aux bonnes mœurs, à l’ordre public ou aux
                  règles d’utilisation définies par lui-même.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 8 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">8. Modifications</span>{" "}
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
                  Le PRESTATAIRE pourra apporter des modifications aux
                  différents moyens mis à la disposition du CLIENT dans le but
                  notamment d’améliorer la prestation offerte à ce dernier. Si
                  ces modifications entraînent des perturbations dans le
                  fonctionnement du site du CLIENT, celui-ci en sera informé au
                  préalable par le PRESTATAIRE qui s’engage à mettre en place
                  lesdits perfectionnements dans les plus brefs délais.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 9 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">9. Renouvellement </span>{" "}
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
                  Comme déjà précisé plus haut, le présent contrat peut être
                  renouvelé par tacite reconduction. Toutefois, lors des
                  renouvellements, le PRESTATAIRE pourra proposer à ses Clients
                  les nouveaux tarifs applicables, étant précisé que les tarifs
                  en vigueur au jour de la formation du contrat le restent
                  jusqu’au terme de ce dernier. En cas de refus de ces nouveaux
                  tarifs, le CLIENT pourra résilier le contrat par lettre
                  recommandée avec avis de réception envoyée au siège social du
                  PRESTATAIRE (c’est-à-dire à l’adresse susmentionnée : Wendy
                  Baqué, 971 Route de Pernay, 37340 Ambillou). Dans cette
                  hypothèse résiduelle, le CLIENT n’aura pas à respecter de
                  préavis. Les données relatives à son site seront immédiatement
                  détruites, leur restitution étant techniquement impossible.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 10 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">10. Garantie</span>{" "}
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
                  Le PRESTATAIRE garantit au CLIENT un fonctionnement normal de
                  son site, dans des conditions d’utilisation normales et
                  conformes aux dispositions du présent contrat. En cas de
                  problème(s), le CLIENT pourra contacter le PRESTATAIRE à
                  l’adresse suivante : wendevweb@gmail.com
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 11 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">11. Maintenance et support</span>{" "}
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
                  Le CLIENT peut obtenir une assistance si celui-ci rencontre
                  des difficultés techniques liées à l'utilisation des logiciels
                  en ligne fournis conjointement aux services en envoyant un
                  courrier électronique à wendevweb@gmail.com Le PRESTATAIRE se
                  réserve le droit d'imposer des restrictions sur la portée du
                  support et les horaires auxquels il est disponible.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 12 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">12. Nom de domaine</span>{" "}
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
                  Le PRESTATAIRE a choisi Hostinger.com pour fournir des
                  services d'enregistrement de nom de domaine. Le CLIENT
                  autorise le PRESTATAIRE à acquérir le nom de domaine choisi
                  ensemble, sous réserve de disponibilité lors de la
                  réservation. et accepte les conditions de l’hébergeur
                  mentionné ci-dessus. Le nom de domaine est valable 1 an et
                  sera facturé au client à la date de reconduction. Si celui-ci
                  s’y oppose, le nom de domaine ne sera pas renouvelé et il en
                  perdra tous les bénéfices. Le CLIENT sera informé par e-mail
                  par le PRESTATAIRE 1 mois avant la fin de la validité de son
                  nom de domaine, afin qu’il puisse effectuer les rémunérations
                  nécessaires pour reconduire son nom de domaine. Le CLIENT
                  apparaîtra en tant que demandeur d'enregistrement et contact
                  administratif, le PRESTATAIRE en tant que contact de
                  facturation, contact technique et redirections associées au
                  nom de domaine. Le CLIENT autorise le PRESTATAIRE à prendre
                  toute mesure que le PRESTATAIRE jugera appropriées au titre de
                  ces fonctions. Une fois le(s) nom(s) de domaine(s) résilié(s),
                  le PRESTATAIRE ne sera pas tenu de faire suivre au CLIENT une
                  note, courrier électronique ni aucune autre forme de
                  correspondance, et ne sera pas non plus tenu d'effectuer
                  quelque autre action en rapport avec le nom de domaine. Le
                  CLIENT seul sera tenu de régler les frais en cours et de
                  cesser de faire paraître le PRESTATAIRE comme contact de
                  facturation, contact technique et serveur de nom associé au
                  nom de domaine, sauf indication contraire du PRESTATAIRE. Si
                  le CLIENT a enregistré son/ses nom(s) de domaine(s) auprès
                  d'un autre fournisseur, le PRESTATAIRE demandera le transfert
                  du/des nom(s) de domaine(s) auprès de l’hébergeur initial, aux
                  mêmes conditions mentionnées ci-dessus. Le CLIENT accepte
                  qu'en cas de contestation par un tiers de l’utilisation des
                  services d'enregistrement du/des nom(s) de domaine(s) proposés
                  par LE PRESTATAIRE ou d'un litige relatif à ces services, les
                  dispositions spécifiées dans l'accord conclu avec l’hébergeur
                  initial en vigueur au moment du litige s'appliqueront de plein
                  droit. <br /> Dans le cas où le CLIENT possède déjà son propre
                  nom de domaine, il a été décidé, avec l’accord des 2 parties,
                  que la gestion du nom de domaine est à réaliser par le CLIENT,
                  via le nom de domaine hébergé. Le PRESTATAIRE n’est alors pas
                  en charge du renouvellement de ce dernier, ni de la gestion de
                  l’espace client de l’hébergeur. Toute option relative à
                  l’hébergement a été retirée de l’offre faite au CLIENT. Pour
                  le bon déroulement de la prestation, le CLIENT devra fournir
                  au PRESTATAIRE les accès au nom de domaine afin de procéder au
                  paramétrage de redirection du site vers le nom de domaine
                  réservé.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 13 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  13. Attribution de compétence et loi applicable
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
                  Le présent contrat et l’ensemble des dispositions qui le
                  composent seront soumis au droit français. Les parties
                  s'efforceront de régler à l'amiable toute contestation portant
                  sur l'interprétation ou l'exécution du contrat. Dans le cas où
                  un accord n'aurait pu être trouvé dans le délai de quinze (15)
                  jours à compter du jour où les parties se seront réunies ou
                  auront tenté de se réunir par convocation dûment notifiée par
                  lettre recommandée pour régler à l'amiable leur différents, ce
                  dernier sera porté devant les tribunaux compétents. Par
                  ailleurs, le Tribunal de commerce de Tours sera seul compétent
                  pour juger des litiges qui pourraient naître lors de son
                  exécution, sauf compétence ratione materie d’une autre
                  juridiction.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 14 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  14. Droit d'accès et de rectification des fichiers
                  informatisés
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
                  Conformément à l’art.27 de la loi « Informatique et Liberté »
                  du 06.01.1978, le CLIENT dispose auprès du PRESTATAIRE d’un
                  droit d’accès et de rectification aux données le concernant.
                  Dans l’hypothèse où le PRESTATAIRE serait amené à utiliser les
                  données de ses Clients, il procéderait à l’avertissement
                  préalable de ces derniers qui pourraient valablement faire
                  valoir leur opposition par lettre simple adressée au siège
                  social du PRESTATAIRE (c’est-à-dire à l’adresse susmentionnée
                  : Wendy Baqué, 971 Route de Pernay, 37340 Amibllou).
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        {/* Article 15 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  15. Litige - Médiation à la consommation
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
                  Le PRESTATAIRE est membre d’une société de médiation à la
                  consommation professionnelle. En cas de litige entre le Client
                  et l’entreprise, ceux-ci s’efforceront de le résoudre à
                  l’amiable (le Client adressera une réclamation écrite auprès
                  du professionnel ou, le cas échéant, auprès du Service
                  Relations Clientèle du professionnel). A défaut d’accord
                  amiable ou en l’absence de réponse du professionnel dans un
                  délai raisonnable d’un (1) mois, le Client consommateur au
                  sens de l’article L.133-4 du code de la consommation a la
                  possibilité de saisir gratuitement, si un désaccord subsiste,
                  le médiateur compétent inscrit sur la liste des médiateurs
                  établie par la Commission d’évaluation et de contrôle de la
                  médiation de la consommation en application de l’article
                  L.615-1 du code de la consommation, à savoir : La Société
                  Médiation Professionnelle www.mediateur-consommation-smp.fr 24
                  rue Albert de Mun - 33000 Bordeaux
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <br />
        <button className="mt-10 mb-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:effc750c-ff80-428e-a739-c8962d398631"
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
