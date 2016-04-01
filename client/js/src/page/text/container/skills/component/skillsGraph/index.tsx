import React, { Component } from "react";
import moment from "moment";

import { Tag } from "../../../../../../../../../data/experiences/index.types";

import { tagsToDisplay } from "../../../../../home/container/skills/component/skillsGraph/index";

/** max characters wide */
let textWidth = 24;

export class SkillsGraph extends Component<{ tags: Tag[] }, any> {
  render() {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

    let maxDuration = tags.reduce((a, b) => moment.duration(b.duration).subtract(moment.duration(a.duration)).asMilliseconds() < 0 ? a : b).duration;
    let yearsToRender = moment.duration(maxDuration).asYears();

    return (
      <div>
        <div>
          {[...Array(Math.floor(yearsToRender)).keys()].map(y => y + 1).sort((a, b) => b - a).map(y => {
            let percentageX = Math.floor((y / yearsToRender) * 100);
            let tagsOverYear = tags.filter(t =>
              moment.duration(t.duration).asMilliseconds() > moment.duration({years: y}).asMilliseconds() &&
              moment.duration(t.duration).asMilliseconds() < moment.duration({years: y + 1}).asMilliseconds()
            );
            let bar = [...Array(Math.floor(y / yearsToRender * textWidth))].map(i => "|").join("");
            return tagsOverYear.length === 0 ? null : (
              <div key={y} dangerouslySetInnerHTML={{__html:
`  ${bar} Over ${y} years

    ${tagsOverYear.map(t => `${t.name}`).join("\n    ")}

`}}>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SkillsGraph;
