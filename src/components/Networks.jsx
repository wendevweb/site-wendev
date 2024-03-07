import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import YouTubeIcon from "@mui/icons-material/YouTube";

const networks = () => {
  return (
    <section
      aria-label="Réseaux sociaux de WenDev"
      className="bg-gradient-to-r from-purple via-pinkDark to-pink dark:bg-black font-quicksand"
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
      <h3 className="text-white font-bold text-4xl mt-6 mb-6">
        Restons connectés !
      </h3>
      <p className="text-real text-xl mt-6 mb-6">Rejoins-moi sur les réseaux pour encore plus de fun et du contenu exclusif !</p>
      <Fade triggerOnce cascade="true" direction="left" duration={1000}>

      <div className="flex justify-between drop-shadow-lg">
        <Link
          to="https://wendevweb.systeme.io/inscription"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to Newsletter"
          aria-label="Redirect to Newsletter"
        >
          <MarkEmailUnreadIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://www.facebook.com/WenDevWeb"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to Facebook"
          aria-label="Redirect to Facebook"
        >
          <FacebookIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://www.instagram.com/wendevweb/"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to Instagram"
          aria-label="Redirect to Instagram"
        >
          <InstagramIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://www.linkedin.com/services/page/a818a03257a06b8589/"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to LinkedIn"
          aria-label="Redirect to LinkedIn"
        >
          <LinkedInIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://github.com/wendevweb"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to Github"
          aria-label="Redirect to Github"
        >
          <GitHubIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://www.wendybaqueauteure.com/"
          target={"_blank"}
          rel="noreferrer"
          alt="Redirect to le site web de l'auteure Wendy Baqué"
          aria-label="Redirect to le site web de l'auteure Wendy Baqué"
        >
          <AutoStoriesIcon className="text-white hover:text-real mr-2 shadow-lg" />
        </Link>
        <Link
          to="https://www.youtube.com/@wendevweb"
          alt="Redirect to YouTube"
          aria-label="Redirect to YouTube"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-real mr-2 shadow-lg"
        >
          <YouTubeIcon /> YouTube{" "}
        </Link>
      </div>
      </Fade>
      </div>
    </section>
  );
};

export default networks;
