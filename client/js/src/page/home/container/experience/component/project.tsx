import React, { Component } from "react";
import moment from "moment";
import { find } from "lodash";

import { Project as ProjectType } from "../../../../../../../../data/experiences/index.types";

export class Project extends Component<{ project: ProjectType }, any> {
  render() {
    let { project } = this.props;
    return (
      <div id="project" className="experience sub-experience">
        <div className="header">
          <h5 className="title sub-title">{project.title}</h5>
          { typeof project.portfolio === "undefined" ? null : (
            <div className={`link visible-sm visible-md visible-lg visible-print`}>
              <a href={`${project.portfolio.link}`} title={`${project.portfolio.hoverTitle}`} target={`_blank`}>
                <i className={`fa fa-link`}/>
              </a>
            </div>
          )}
          <div className="icons">
            { project.icons.map((i, index) => {
              return <img key={index} src={find(project.tags, t => t.name === i).icon} className={`${i} icon`} title={i} />;
            }) }
          </div>
          { project.start === `` && project.end === `` ? null :
            <h5 className="duration">
              { project.start !== `` ? moment(project.start).format("YYYY-MM") : "present" }
              <span> to </span>
              { project.end !== `` ? moment(project.end).format("YYYY-MM") : "present" }
            </h5>
          }
        </div>
        <div className="clearfix" />
        <div className="col-xs-offset-1 content" dangerouslySetInnerHTML={{__html: project.summaryHtml}}/>
      </div>
    );
  }
};

export default Project;
