import React, { Component } from "react";

import Header from "./component/header/"
import Summary from "./component/summary";
import Skills from "./container/skills/";
import Experience from "./container/experience/";
import Education from "./component/education";

export class Text extends Component<any, any> {
  render() {
    return (
      <div className={`text page`} >
        <div className={`content`}>
          <Header/>
          <Summary/>
          <Skills/>
          <Experience/>
          <Education/>
        </div>
      </div>
    );
  }
};

export default Text;
