import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import logonoir from "../assets/removenoir.png";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigation = [
  { name: "Accueil", href: "/", current: true },
  { name: "	À propos", href: "/About", current: false },
  { name: "Fonctionnement", href: "/Fonctionnement", current: false },
  // { name: "Missions en entreprise", href: "/Entreprise", current: false },
  // { name: "Formation", href: "/Formation", current: false },
  { name: "Témoignages", href: "/Temoignages", current: false },
  { name: "Partenaires", href: "/Partenaires", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-lg	sticky top-0 z-50 font-quicksand border-b border-pinkDark">
      {({ open }) => (
        <>
          <div className="font-quicksand mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-pinkDark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logonoir}
                    alt="WenDev"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={logonoir}
                    alt="WenDev"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "background-radial-gradient-navbar text-black hover:text-pinkDark"
                            : "text-lg text-black  hover:text-pinkDark",
                          "px-3 py-2 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Services dropdown */}
                <Menu as="div" className="relative ml-3 font-quicksand">
                  <div>
                    <Menu.Button className="flex justify-center p-2 text-black  hover:text-pinkDark">
                      <span className="sr-only">Ouvrir le menu mobile</span>
                      <p className="text-lg font-medium">Prestations</p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreSite"
                            className={classNames(
                              active ? "bg-pinkDark hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Création et refonte de sites web
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreAudit"
                            className={classNames(
                              active ? "bg-pinkDark hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Audit de sites web
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/Offreauteurs"
                            className={classNames(
                              active ? "bg-pinkDark hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Offre spéciale auteurs
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffrePortfolio"
                            className={classNames(
                              active ? "bg-pinkDark hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Création de portfolio
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreMaquette"
                            className={classNames(
                              active ? "bg-pinkDark hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Prototype et maquette web
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreFirebase"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Authentification Firebase
                          </Link>
                        )}
                      </Menu.Item> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreGlide"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Application mobile
                          </Link>
                        )}
                      </Menu.Item> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/OffreChat"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-black"
                            )}
                          >
                            Application de chat et chatbot
                          </Link>
                        )}
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900"
                      : "text-gray-300 hover:bg-black hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
