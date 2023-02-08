import React from "react";

const JotformContact = () => {
  return (
    <div className="lg:ml-12 mt-32 lg:mb-24">
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
          height: "539px",
          border: "none",
          borderRadius: "10px",
        }}
        scrolling="no"
      >
        {" "}
      </iframe>
    </div>
  );
};

export default JotformContact;
