import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Legals = () => {
  return (
    <div>
      <h2> Conditions générales d'utilisation</h2>
      <p>En vigueur au 14/02/2023</p>
      <p>
        Les présentes conditions générales d'utilisation (dites « CGU ») ont
        pour objet l'encadrement juridique des modalités de mise à disposition
        du site et des services par WenDev et de définir les conditions d’accès
        et d’utilisation des services par « l'Utilisateur ». Les présentes CGU
        sont accessibles sur le site à la rubrique «CGU».
      </p>
      <div className="font-poppins p-10 lg:grid grid-cols-1 gap-4">
        {/* Article 1 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  ARTICLE 1 : Les mentions légales
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
                  L’édition et la direction de la publication du site
                  https://wendev.fr est assurée par Wendy Baqué, domicilié 971
                  route de Pernay, Les tonnelles. Numéro de téléphone est
                  0698157113 Adresse e-mail wendevweb@gmail.com.
                  <br />
                  L'hébergeur du site https://wendev.fr est la société
                  Hostinger, dont le siège social est situé au 61 Lordou Vironos
                  st. 6023 Larnaca, the Republic of Cyprus.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 2 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">ARTICLE 2 : Accès au site</span>{" "}
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
                  Le site https://wendev.fr permet à l'Utilisateur un accès
                  gratuit aux services suivants : Le site internet propose les
                  services suivants : Création de sites internet Création de
                  bases de données Création de maquettes pour le web Création
                  d'applications mobiles Créations de solutions numériques en
                  no-code Création de pages d'authentification Le site est
                  accessible gratuitement en tout lieu à tout Utilisateur ayant
                  un accès à Internet. <br />
                  Tous les frais supportés par l'Utilisateur pour accéder au
                  service (matériel informatique, logiciels, connexion Internet,
                  etc.) sont à sa charge.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 3 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  ARTICLE 3 : Collecte des données
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
                  Le site est exempté de déclaration à la Commission Nationale
                  Informatique et Libertés (CNIL) dans la mesure où il ne
                  collecte aucune donnée concernant les Utilisateurs.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 4 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  ARTICLE 4 : Propriété intellectuelle
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
                  Les marques, logos, signes ainsi que tous les contenus du site
                  (textes, images, son…) font l'objet d'une protection par le
                  Code de la propriété intellectuelle et plus particulièrement
                  par le droit d'auteur.
                  <br />
                  La marque WenDev est une marque déposée par Wendy Baqué.Toute
                  représentation et/ou reproduction et/ou exploitation partielle
                  ou totale de cette marque, de quelque nature que ce soit, est
                  totalement prohibée.
                  <br />
                  L'Utilisateur doit solliciter l'autorisation préalable du site
                  pour toute reproduction, publication, copie des différents
                  contenus. Il s'engage à une utilisation des contenus du site
                  dans un cadre strictement privé, toute utilisation à des fins
                  commerciales et publicitaires est strictement interdite. Toute
                  représentation totale ou partielle de ce site par quelque
                  procédé que ce soit, sans l’autorisation expresse de
                  l’exploitant du site Internet constituerait une contrefaçon
                  sanctionnée par l’article L 335-2 et suivants du Code de la
                  propriété intellectuelle. Il est rappelé conformément à
                  l’article L122-5 du Code de propriété intellectuelle que
                  l’Utilisateur qui reproduit, copie ou publie le contenu
                  protégé doit citer l’auteur et sa source.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 5 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">ARTICLE 5 : Responsabilité </span>{" "}
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
                  Les sources des informations diffusées sur le site
                  https://wendev.fr sont réputées fiables mais le site ne
                  garantit pas qu’il soit exempt de défauts, d’erreurs ou
                  d’omissions. Les informations communiquées sont présentées à
                  titre indicatif et général sans valeur contractuelle. Malgré
                  des mises à jour régulières, le site https://wendev.fr ne peut
                  être tenu responsable de la modification des dispositions
                  administratives et juridiques survenant après la publication.
                  De même, le site ne peut être tenue responsable de
                  l’utilisation et de l’interprétation de l’information contenue
                  dans ce site. Le site https://wendev.fr ne peut être tenu pour
                  responsable d’éventuels virus qui pourraient infecter
                  l’ordinateur ou tout matériel informatique de l’Internaute,
                  suite à une utilisation, à l’accès, ou au téléchargement
                  provenant de ce site. La responsabilité du site ne peut être
                  engagée en cas de force majeure ou du fait imprévisible et
                  insurmontable d'un tiers.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 6 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">ARTICLE 6 : Liens hypertextes</span>{" "}
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
                  Des liens hypertextes peuvent être présents sur le site.
                  L’Utilisateur est informé qu’en cliquant sur ces liens, il
                  sortira du site https://wendev.fr. Ce dernier n’a pas de
                  contrôle sur les pages web sur lesquelles aboutissent ces
                  liens et ne saurait, en aucun cas, être responsable de leur
                  contenu.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 7 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">ARTICLE 7 : Cookies</span>{" "}
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
                  L’Utilisateur est informé que lors de ses visites sur le site,
                  un cookie peut s’installer automatiquement sur son logiciel de
                  navigation. Les cookies sont de petits fichiers stockés
                  temporairement sur le disque dur de l’ordinateur de
                  l’Utilisateur par votre navigateur et qui sont nécessaires à
                  l’utilisation du site https://wendev.fr. Les cookies ne
                  contiennent pas d’information personnelle et ne peuvent pas
                  être utilisés pour identifier quelqu’un. Un cookie contient un
                  identifiant unique, généré aléatoirement et donc anonyme.
                  Certains cookies expirent à la fin de la visite de
                  l’Utilisateur, d’autres restent. L’information contenue dans
                  les cookies est utilisée pour améliorer le site
                  https://wendev.fr. En naviguant sur le site, L’Utilisateur les
                  accepte.
                  <br />
                  L’Utilisateur pourra désactiver ces cookies par
                  l’intermédiaire des paramètres figurant au sein de son
                  logiciel de navigation.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {/* Article 8 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold p-2">
                <span className="font-bold">
                  ARTICLE 8 : Droit applicable et juridiction compétente
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
                  La législation française s'applique au présent contrat. En cas
                  d'absence de résolution amiable d'un litige né entre les
                  parties, les tribunaux français seront seuls compétents pour
                  en connaître. Pour toute question relative à l’application des
                  présentes CGU, vous pouvez joindre l’éditeur aux coordonnées
                  inscrites à l’ARTICLE 1.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <p className="hover:text-secondaryLight">
          <a
            href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:303c99ab-f8f9-384e-92b7-07fdf19ee33b"
            alt="Redirect to pdf download"
            aria-label="Redirect to pdf download"
            rel="noreferrer"
            target="_blank"
          >
            <PictureAsPdfIcon /> Télécharger le document en pdf{" "}
          </a>
        </p>
        <p>
          CGU réalisées sur{" "}
          <a
            href="http://legalplace.fr/"
            alt="Redirection sur le site de LegalPlace"
            aria-label="Redirection sur le site de LegalPlace"
            rel="noreferrer"
            target="_blank"
          >
            http://legalplace.fr/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Legals;
