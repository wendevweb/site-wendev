import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Rdv = () => {
  return (
    <div>
      <Fade>
        <Link
          to="https://calendly.com/wendevweb/premier-rendez-vous"
          target={"_blank"}
        >
          <button className="text-xl border-solid border-2 border-pinkDark shadow-lg bg-real text-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-real">
            <EventAvailableIcon />
            Prendre rendez-vous
          </button>
        </Link>
      </Fade>
    </div>
  );
};

export default Rdv;
