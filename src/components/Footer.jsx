import React from "react";

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
    <footer
      className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2"
      aria-label="footer"
    >
      <div className="lg:grid grid-cols-3 gap-4 content-evenly bg-white text-black">
        <div className="lg:pr-10">
          <h2 className="mt-10 font-semibold text-black text-lg">À propos</h2>
          <p className="tracking-tight mb-2 pt-6">
            <strong>WenDev </strong> est une micro-entreprise de{" "}
            <strong>développement web</strong>, dirigée par Wendy Baqué, dédiée
            aux <strong>auteurs de livres</strong> et au monde littéraire. Elle
            crée des <strong>sites internet</strong> et divers solutions
            numériques pour promouvoir les livres et assurer une présence en
            ligne aux écrivains.
          </p>
          <h2 className="mb-2 hover:font-bold text-pinkDark font-semibold text-lg">
            <a
              href="https://wendevweb.systeme.io/inscription"
              alt="Redirection vers l'inscription à la newsletter de WenDev"
              aria-label="Redirection vers l'inscription à la newsletter de WenDev"
              target="_blank"
              rel="noreferrer"
            >
              <MarkEmailUnreadIcon /> Inscrivez-vous à la newsletter
            </a>
          </h2>
          <h2 className="hover:font-bold text-pinkDark font-semibold text-lg">
            <a
              href="https://wendevweb.systeme.io/ebook"
              alt="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
              aria-label="Redirection vers le téléchargement du livre blanc pour les auteurs de livres"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon /> Ami.e auteur.e, téléchargez votre livre blanc
              pour vous aider à créer vous-mêmes votre{" "}
              <strong>site internet</strong> !{" "}
            </a>
          </h2>
          <br />
          <ButtonBmc />
        </div>

        <div>
          <h2 className="font-semibold text-black text-lg pt-10">
            Stay tuned !
          </h2>
          <ul className="pt-6">
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
                href="https://www.linkedin.com/services/page/a818a03257a06b8589/"
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
        <div className="text-right">
          <h2 className="pt-10 font-semibold text-black text-lg">
            Mentions légales
          </h2>
          <ul>
            <a href="/Legals">
              <li className="pt-4 text-pinkDark hover:font-bold">C.G.U.</li>
            </a>
            <a href="/Cgv">
              <li className="pt-4 text-pinkDark hover:font-bold">C.G.V.</li>
            </a>
            <li className="pt-4">
              Contactez-moi :{" "}
              <a
                href="mailto:contact@wendev.fr"
                alt="Redirect to write an e-mail"
                aria-label="Redirect to write an e-mail"
                target="_blank"
                rel="noreferrer"
                className="text-pinkDark hover:font-bold"
              >
                contact@wendev.fr
              </a>
            </li>
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
