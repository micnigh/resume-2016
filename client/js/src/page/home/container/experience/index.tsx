import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { find } from "lodash";

import { Experience as ExperienceType, Project as ProjectType } from "../../../../../../../data/experiences/index.types";
import { denormalize as denormalizeExperience } from "../../../../../../../data/normalizr/denormalizr/experience";

import Project from "./component/project";

let sortProject = (a: ProjectType, b: ProjectType) => {
  if (a.end !== `` && b.end !== ``) {
    return moment(b.end).isAfter(moment(a.end)) ? 1 : -1;
  } else {
    if (b.start === `` && b.end === ``) {
      return -1;
    }
    return b.end === `` ? 1 : -1;
  }
};

let mapStateToProps = (state, ownProps) => {
  let experiences = Object
    .keys(state.entities.experiences)
    .map(id => denormalizeExperience(id, state))
    .sort(sortProject);
  return {
    experiences,
  };
};

@connect(mapStateToProps)
export class Experience extends Component<{ experiences: ExperienceType[] }, any> {
  render() {
    let { experiences } = this.props;
    return (
      <div id="experience" className="row page-break-before">
        <h2 className="title">Experience</h2>
        {experiences.map((e, index) => {
          return (
            <div key={index} className="experience">
              <div className="header">
                <h4 className="title">{e.title}</h4>
                <div className="icons">
                  { e.icons.map((i, index) => {
                    return <img key={index} src={find(e.tags, t => t.name === i).icon} className={`${i} icon`} title={i} />;
                  }) }
                </div>
                { e.start === `` && e.end === `` ? null :
                  <h5 className="duration">
                    { e.start !== `` ? moment(e.start).format("YYYY-MM") : "present" }
                    <span> to </span>
                    { e.end !== `` ? moment(e.end).format("YYYY-MM") : "present" }
                  </h5>
                }
              </div>
              <div className="clearfix" />
              <div className="col-xs-offset-1 content" dangerouslySetInnerHTML={{__html: e.summaryHtml}}/>
              { e.projects.length === 0 ? null : (
                <div className={`col-xs-offset-1`}>
                  <h4 className={`title sub-title`}>Projects</h4>
                  { e.projects.sort(sortProject).map((p, index) => <Project key={index} project={p}/>) }
                </div>
              ) }
            </div>
          );
        })}
      </div>
    );
  }
};

export default Experience;
