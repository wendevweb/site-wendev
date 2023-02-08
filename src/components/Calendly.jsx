// For help : https://medium.com/swlh/how-to-integrate-calendly-reactjs-frontend-edition-feb7ce923927
// For help : https://stackoverflow.com/questions/53891698/embed-calendly-into-react
import React, { Component } from "react";

class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }
  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }
  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/wendevweb/premier-rendez-vous?primary_color=ff7ecf"
            style={{ minWidth: "320px", height: "1100px" }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
