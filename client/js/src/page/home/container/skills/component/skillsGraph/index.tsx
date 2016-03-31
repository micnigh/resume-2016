import React, { Component } from "react";
import moment from "moment";
import { debounce } from "lodash";

import { Tag } from "../../../../../../../../../data/experiences/index.types";

export let tagsToDisplay = [
  "Docker",
  "NodeJS",
  "Backbone",
  "Sass",
  "Rails",
  "Java",
  "PHP",
  // "Git",
];

export class SkillsGraph extends Component<{ tags: Tag[] }, any> {

  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleResize = debounce(this.handleResize, 250);
  }

  handleResize(e) {
    this.setState({ windowWidth: window.innerWidth || document.body.clientWidth });
  }

  componentWillMount() {
    if (process.env.JS_ENV === "browser") {
      this.setState({ windowWidth: window.innerWidth || document.body.clientWidth });
      window.addEventListener("resize", this.handleResize);
    }
  }

  componentWillUnmount() {
    if (process.env.JS_ENV === "browser") {
      window.removeEventListener("resize", this.handleResize);
    }
  }

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
              let pixelWidth = Math.floor(normalizedDuration * this.state.windowWidth);
              shorthand = pixelWidth < 120;
            }
            return (
              <div className={`skill-graph-bar`} key={index} style={{ width: `${percentageWidth}%` }}>
                <span className={`skill-graph-bar-title`}>{  shorthand ? t.shorthand : t.name }</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SkillsGraph;
