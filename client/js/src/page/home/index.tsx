import React, { Component } from "react";

import Header from "./component/header/";
import Summary from "./component/summary";
import Skills from "./container/skills/";
import Experience from "./container/experience/";
import Education from "./component/education";

export class Home extends Component<any, any> {
  render() {
    return (
      <div className="HomePage">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </div>
    );
  }
};

export default Home;
