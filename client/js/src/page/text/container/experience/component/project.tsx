import React, { Component } from "react";
import moment from "moment";
import { find } from "lodash";

import { Project as ProjectType } from "../../../../../../../../data/experiences/index.types";

let wrap = require("word-wrap");

export class Project extends Component<{ project: ProjectType }, any> {
  render() {
    let { project } = this.props;
    let dateRange = `${ project.start !== `` ? moment(project.start).format("YYYY-MM") : "present" } to ${ project.end !== `` ? moment(project.end).format("YYYY-MM") : "present" }`;
    let summary = `${wrap(project.summaryMarkdown.replace(/\n\n/g,"\n").replace(/\[(.*?)\]\(.*?\)/g,"$1"), { indent: "              ", width: 68 })}`;
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: `        ${project.title}`}} />
        { project.start === `` && project.end === `` ? null :
          <div dangerouslySetInnerHTML={{__html: `\n            ${dateRange}` }} />
        }
        { typeof project.portfolio === "undefined" ? null : <div dangerouslySetInnerHTML={{__html: `\n            ${project.portfolio.link}`}} /> }
        <div dangerouslySetInnerHTML={{__html: `\n`}} />
        <div dangerouslySetInnerHTML={{__html: `${summary}` }} />
        { project.icons.length === 0 ? null : <div dangerouslySetInnerHTML={{__html: `\n                ${project.icons.join(" ")}` }}/> }
        <div dangerouslySetInnerHTML={{__html: `\n`}} />
      </div>
    );
  }
};

export default Project;
