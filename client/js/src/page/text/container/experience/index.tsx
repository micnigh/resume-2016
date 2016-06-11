import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { find } from "lodash";

import { Experience as ExperienceType, Project as ProjectType } from "../../../../../../../data/experiences/index.types";

import Project from "./component/project";

import { sortProject, mapStateToProps } from "../../../home/container/experience/index";

let wrap = require("word-wrap");

@connect(mapStateToProps)
export class Experience extends Component<{ experiences?: ExperienceType[] }, any> {
  render() {
    let { experiences } = this.props;
    console.log(experiences);
    return (
      <div id="experience">
        <div dangerouslySetInnerHTML={{__html: `EXPERIENCES

`}}/>
        {experiences.map((e, index) => {
          return (
            <div key={index}>
              <div dangerouslySetInnerHTML={{__html: `  ${e.title}`}} />
              { typeof e.portfolio === "undefined" ? null : <div dangerouslySetInnerHTML={{__html: `${e.portfolio.link}`}} /> }
              { e.start === `` && e.end === `` ? null :
                <div dangerouslySetInnerHTML={{__html: `\n    ${ e.start !== `` ? moment(e.start).format("YYYY-MM") : "present" } to ${ e.end !== `` ? moment(e.end).format("YYYY-MM") : "present" }` }} />
              }
              <div dangerouslySetInnerHTML={{__html: `\n`}} />
              <div dangerouslySetInnerHTML={{__html: `${wrap(e.summaryMarkdown.replace(/\n\n/g,"\n").replace(/\[(.*?)\]\(.*?\)/g,"$1"), { indent: "      ", width: 68 })}` }} />
              { e.icons.length === 0 ? null : <div dangerouslySetInnerHTML={{__html: `\n        ${e.icons.join(" ")}` }}/> }
              <div dangerouslySetInnerHTML={{__html: `\n`}} />
              { e.projects.length === 0 ? null : (
                <div>
                <div dangerouslySetInnerHTML={{__html: `      PROJECTS\n\n`}}/>
                { e.projects.sort(sortProject).map((p, index) => <Project key={index} project={p}/>) }
                </div>
              ) }
            </div>
        );})}
      </div>
    );
  }
};

export default Experience;
