import React from "react";

const JotformContact = () => {
  return (
      <iframe
        id="JotFormIFrame-230384793454362"
        title="Contact"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/230384793454362"
        frameborder="0"
        style={{
          minWidth: "100%",
          height: "1500px",
          border: "none",
          borderRadius: "10px",
        }}
        scrolling="no"
      >
        {" "}
      </iframe>
  );
};

export default JotformContact;
