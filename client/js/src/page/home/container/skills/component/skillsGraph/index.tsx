import React, { Component } from "react";
import moment from "moment";
import { find } from "lodash";

import { Tag } from "../../../../../../../../../data/experiences/index.types";

let tagsToDisplay = [
  "Docker",
  "NodeJS",
  "Javascript",
  "Backbone",
  "Coffeescript",
  "Sass",
  "Rails",
  "Ruby",
  "Java",
  "PHP",
  "Wordpress",
  "Git",
];

export class SkillsGraph extends Component<{ tags: Tag[] }, any> {
  render() {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

    let maxDuration = tags.reduce((a, b) => moment.duration(b.duration).subtract(moment.duration(a.duration)).asMilliseconds() < 0 ? a : b).duration;
    let yearsToRender = moment.duration(maxDuration).asYears();

    return (
      <div id="skill-graph" className={`skill-graph`}>
        <div className={`skill-graph-guidelines`}>
          {[...Array(Math.floor(yearsToRender)).keys()].map(y => y + 1).map(y => {
            let percentageX = Math.floor((y / yearsToRender) * 100);
            return (
              <div className={`skill-graph-guideline`} style={{ left: `${percentageX}%`}} key={y}>
                { y === 1 ?
                  <div className={`skill-graph-guideline-label top single`}>{`${y} year`}</div> :
                  <div className={`skill-graph-guideline-label top plural`}>{`${y} years`}</div>
                }
                <div className={`skill-graph-guideline-line`}/>
                { y === 1 ?
                  <div className={`skill-graph-guideline-label bottom single`}>{`${y} year`}</div> :
                  <div className={`skill-graph-guideline-label bottom plural`}>{`${y} years`}</div>
                }
              </div>
            );
          })}
        </div>
        <div className={`skill-graph-bars`}>
          {tags.map((t, index) => {
            let normalizedDuration = moment.duration(t.duration).asMilliseconds() / moment.duration(maxDuration).asMilliseconds();
            let percentageWidth = Math.floor(normalizedDuration * 100);
            let shorthand = false;
            if (process.env.JS_ENV === "browser") {
              let pixelWidth = Math.floor(percentageWidth * (window.innerWidth || document.body.clientWidth));
              shorthand = pixelWidth < 100;
            }
            return (
              <div className={`skill-graph-bar`} key={index} style={{ width: `${percentageWidth}%` }}>
                <span className={`skill-graph-bar-title`}>{ percentageWidth > 10 ? t.name : t.shorthand }</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SkillsGraph;