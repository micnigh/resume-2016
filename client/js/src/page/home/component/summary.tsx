import React, { Component } from "react";
import marked from "marked";
import { renderer } from "../../../../../../data/experiences/";

export class Summary extends Component<any, any> {
  render() {
    return (
      <div id="summary" className="row">
        <h2 className="title">Summary</h2>
        <div className="col-xs-offset-1" dangerouslySetInnerHTML={{__html: markdown}}>
        </div>
      </div>
    );
  }
};

let markdown = marked(`
Strong **front** and **backend** web developer seeking to join a solid team.

Interested in tools that **get the job done** while boosting **productivity**.

Believe good code is **easy to maintain**, **well tested**, and **easily extended**.

**Big on OSS** - I like knowing how the tools I use work.
`, renderer);

export default Summary;
