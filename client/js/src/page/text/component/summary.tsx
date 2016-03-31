import React, { Component } from "react";
import marked from "marked";
import { renderer } from "../../../../../../data/experiences/";

import { markdown as summaryMarked } from "../../home/component/summary";

export class Summary extends Component<any, any> {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: content}}/>
    );
  }
};

let content =
`SUMMARY
${summaryMarked
    .replace(/\*\*/g,"")
    .replace(/\n/g, "\n  ")}
`;

export default Summary;
