import React from "react";
import logonoir from "../assets/removenoir.png";

// Imports MUI icons, based on : https://mui.com/material-ui/material-icons/
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ButtonBmc from "./ButtonBmc";

const Footer = () => {
  return (
    <footer className="font-quicksand" aria-label="footer">
      <div className="lg:grid grid-cols-4 gap-4 lg:p-4 bg-white text-black">
        <div className="lg:m-6">
          <img
            src={logonoir}
            alt="WenDev"
            aria-label="WenDev"
            className="w-32 pt-10"
          />
        </div>
        <div className="m-6">
          <h2 className="font-semibold text-black text-lg text-left">
            À propos
          </h2>
          <p className="tracking-tight mb-2 text-left pt-6">
            WenDev est une micro-entreprise de développement web et web mobile,
            dirigée par Wendy Baqué. Elle propose des services numériques avec
            plusieurs offres adaptés aux besoins de ses clients.
          </p>
          <h2 className="mb-2 hover:font-bold text-pinkDark font-semibold text-lg text-left">
            <a
              href="https://wendevweb.systeme.io/inscription"
              alt="Redirection vers l'inscription à la newsletter de WenDev"
              aria-label="Redirection vers l'inscription à la newsletter de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              <MarkEmailUnreadIcon /> Inscris-toi à la newsletter
            </a>
          </h2>
          <h2 className="hover:font-bold text-pinkDark font-semibold text-lg text-left">
            <a
              href="https://wendevweb.systeme.io/ebook"
              alt="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
              aria-label="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon /> Ami.e auteur.e, télécharge ton livre blanc pour
              t'aider à créer toi-même ton site internet !{" "}
            </a>
          </h2>
          <br />
          <ButtonBmc />
        </div>

        <div className="m-6">
          <h2 className="font-semibold text-black text-lg text-left">
            Stay tuned !
          </h2>
          <ul className="text-left pt-6">
            <li>
              {" "}
              <a
                href="https://www.instagram.com/wendevweb/"
                alt="Redirect to Instagram"
                aria-label="Redirect to Instagram"
                target="_blank"
                rel="noreferrer"
                className="hover:text-bold text-pinkDark"
              >
                <InstagramIcon /> Instagram
              </a>
            </li>
            <li className="pt-4">
              {" "}
              <a
                href="https://www.facebook.com/WenDevWeb"
                alt="Redirect to Facebook"
                aria-label="Redirect to Facebook"
                target="_blank"
                rel="noreferrer"
                className="hover:text-bold text-pinkDark"
              >
                {" "}
                <FacebookIcon /> Facebook{" "}
              </a>
            </li>
            <li className="pt-4">
              {" "}
              <a
                href="https://github.com/wendybaque"
                alt="Redirect to Github"
                aria-label="Redirect to Github"
                target="_blank"
                rel="noreferrer"
                className="hover:text-bold text-pinkDark"
              >
                <GitHubIcon /> Github
              </a>
            </li>
            <li className="pt-4">
              {" "}
              <a
                href="https://www.linkedin.com/company/wendev/"
                alt="Redirect to LinkedIn"
                aria-label="Redirect to LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-bold text-pinkDark"
              >
                <LinkedInIcon /> LinkedIn{" "}
              </a>
            </li>

            <li className="pt-4">
              {" "}
              <a
                href="https://www.youtube.com/@wendevweb"
                alt="Redirect to YouTube"
                aria-label="Redirect to YouTube"
                target="_blank"
                rel="noreferrer"
                className="hover:text-bold text-pinkDark"
              >
                <YouTubeIcon /> YouTube{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="m-6">
          <h2 className="font-semibold text-black text-lg text-left">
            Mentions légales
          </h2>
          <ul className="text-left">
            <a href="/Legals">
              <li className="pt-4 text-pinkDark hover:font-bold">C.G.U.</li>
            </a>
            <a href="/Cgv">
              <li className="pt-4 text-pinkDark hover:font-bold">C.G.V.</li>
            </a>
            <li className="pt-4">SIRET : 95400298600014</li>
            <li className="pt-4">
              © 2022-2024 Made with ❤ by{" "}
              <a
                href="https://www.wendybaqueauteure.com/"
                alt="redirection vers le site de Wendy Baqué"
                aria-label="redirection vers le site de Wendy Baqué"
                target="_blank"
                rel="noreferrer"
                className="text-pinkDark hover:font-bold"
              >
                Wendy Baqué
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
