import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <h1>Body Works !</h1>
        <Footer />
      </div>
    );
  }
}

export default Body;
