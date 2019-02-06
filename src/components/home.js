import React, { Component } from "react";
import Albums from "./albums";
import Header from "./header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Albums />
      </div>
    );
  }
}

export default Home;
