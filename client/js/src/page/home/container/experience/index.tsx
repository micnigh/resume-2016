import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { find } from "lodash";

import { Experience as ExperienceType, Project as ProjectType } from "../../../../../../../data/experiences/index.types";
import { denormalizeExperience } from "../../../../../../../data/normalizr/denormalizr/experience";

import Project from "./component/project";

export let sortProject = (a: ProjectType, b: ProjectType) => {
  if (a.end !== `` && b.end !== ``) {
    return moment(b.end).isAfter(moment(a.end)) ? 1 : -1;
  } else {
    if (b.start === `` && b.end === ``) {
      return -1;
    }
    return b.end === `` ? 1 : -1;
  }
};

export let mapStateToProps = (state, ownProps) => {
  let experiences = Object
    .keys(state.entities.experiences)
    .map(id => denormalizeExperience(id, state.entities))
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
                { typeof e.portfolio === "undefined" ? null : (
                  <div className={`link hidden-ms hidden-xs hidden-sm hidden-md visible-print`}>
                    <a href={`${e.portfolio.link}`} title={`${e.portfolio.hoverTitle}`} target={`_blank`}>
                      <i className={`fa fa-link`}/>
                    </a>
                  </div>
                )}
                <div className="icons">
                  { typeof e.portfolio === "undefined" ? null : (
                    <div className={`link visible-ms visible-xs visible-sm visible-md hidden-print`}>
                      <a href={`${e.portfolio.link}`} title={`${e.portfolio.hoverTitle}`} target={`_blank`}>
                        <i className={`fa fa-link`}/>
                      </a>
                    </div>
                  )}
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
