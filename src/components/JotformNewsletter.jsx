import React from 'react'

const JotformNewsletter = () => {
  return (
    <div>
                      <iframe
                id="JotFormIFrame-230383592520352"
                title="Inscription à la newsletter de WenDev"
                onload="window.parent.scrollTo(0,0)"
                allowtransparency="true"
                allowfullscreen="true"
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/230383592520352"
                frameborder="0"
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: "539px",
                  border: "none",
                  borderRadius: "10px",
                  position:"sticky"
                }}
                scrolling="no"
              >
                {" "}
              </iframe>
    </div>
  )
}

export default JotformNewsletter