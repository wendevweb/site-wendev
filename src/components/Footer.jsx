import React from "react";
import logonoir from "../assets/removenoir.png";

// Imports MUI icons, based on : https://mui.com/material-ui/material-icons/
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="font-quicksand" aria-label="footer">
      <div className="lg:grid grid-cols-4 gap-4 lg:p-4 bg-white text-black">
        <div className="lg:m-6">
          <img
            src={logonoir}
            alt="Nelixair"
            aria-label="Nelixair"
            className="w-32 pt-10 lg:ml-64"
          />
        </div>
        <div className="m-6">
          <h2 className="font-semibold text-purpleDark text-lg text-left">
            A propos
          </h2>
          <p className="text-left pt-6 font-light">
            WenDev est une micro-entreprise de développement web et web mobile, dirigée par Wendy Baqué. Elle propose des services numériques avec plusieurs offres adaptés aux besoins de ses clients. 
          </p>
        </div>

        <div className="m-6">
          <h2 className="font-semibold text-purpleDark text-lg text-left">
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
                className="hover:text-pinkDark"
              >
                <InstagramIcon/> Instagram
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://www.facebook.com/WenDevWeb"
                alt="Redirect to Facebook"
                aria-label="Redirect to Facebook"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pinkDark"
              >
                {" "}
                <FacebookIcon /> Facebook{" "}
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://discord.com/"
                alt="Redirect to Discord"
                aria-label="Redirect to Discord"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pinkDark"
              >
                <GitHubIcon /> Github
              </a>
            </li>
            <li className="pt-4 font-light">
              {" "}
              <a
                href="https://www.linkedin.com/company/92696774/admin/"
                alt="Redirect to LinkedIn"
                aria-label="Redirect to LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pinkDark"
              >
                <LinkedInIcon /> LinkedIn{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="m-6">
          <h2 className="font-semibold text-purpleDark text-lg text-left">
            Mentions légales
          </h2>
          <ul className="text-left">
            <a href="/Legals">
              <li className="pt-4 font-light hover:text-pinkDark">
                C.G.U.
              </li>
            </a>
            <a href="/Cgv">
              <li className="pt-4 font-light hover:text-pinkDark">
                C.G.V.
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bg-white text-black font-light p-4">
        <p>
          Made with ❤ by{" "}
          <a
            href="https://linktr.ee/wendybaque"
            alt="redirection vers le site de Wendy Baqué"
            aria-label="redirection vers le site de Wendy Baqué"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pinkDark"
          >
            Wendy Baqué
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
