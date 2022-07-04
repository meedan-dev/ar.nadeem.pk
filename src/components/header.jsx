import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Button from "react-bootstrap/Button";

function Socialbtn(props) {
  return (
    <Button
      href={props.link}
      target="_blank"
      size="lg"
      className="m-2"
      variant="secondary"
    >
      <i className={"fa fa-" + props.icon} />
    </Button>
  );
}
function Socialbtns(props) {
  return (
    <div>
      <Socialbtn link="https://github.com/ar-nadeem/" icon="github" />
      <Socialbtn
        link="https://www.linkedin.com/in/abdulrahman-nadeem-0744b718a/"
        icon="linkedin"
      />
      <Socialbtn
        link="https://www.instagram.com/the.ar.nadeem/"
        icon="instagram"
      />
    </div>
  );
}

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <h1>AbdulRahman Nadeem</h1>
        </div>

        <Socialbtns />
      </div>
    );
  }
}

export default Header;
