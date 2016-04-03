import React, { Component } from "react";
import moment from "moment";
import { throttle } from "lodash";

import { enableTooltip, disableTooltip } from "../../../../../../misc/tooltip";
import { Tag } from "../../../../../../../../../data/experiences/index.types";

export let tagsToDisplay = [
  "Docker",
  "NodeJS",
  "Backbone",
  "React",
  "Redux",
  "Sass",
  "Rails",
  "Java",
  "PHP",
  "Typescript",
];

export class SkillsGraph extends Component<{ tags: Tag[] }, any> {

  enquirePrintHandlers: { match: Function, unmatch: Function };
  handleResizeDebounce: {(e)};

  state = {};

  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleResizeDebounce = throttle(this.handleResize, 250);
    this.enquirePrintHandlers = {
      match: this.handleResize,
      unmatch: this.handleResize,
    };
  }

  handleResize(e) {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

    this.setState({ windowWidth: window.innerWidth || document.body.clientWidth });

    let fullTagWidth = this.state.fullTagWidth || {};
    if (typeof this.state.fullTagWidth === "undefined") {
      tags.forEach(t => {
        let nodeTitle = this.refs[`${t.name}Title`] as HTMLElement;
        fullTagWidth[t.name] = nodeTitle.offsetWidth;
      });
      this.setState({ fullTagWidth });
    }

    let isTagShorthand = {};
    tags.forEach(t => {
      let nodeBar = this.refs[`${t.name}Bar`] as HTMLElement;
      isTagShorthand[t.name] = nodeBar.offsetWidth < fullTagWidth[t.name] ? true : false;
    });
    this.setState({ isTagShorthand });
  }

  componentWillMount() {
    if (process.env.JS_ENV === "browser") {
      window.addEventListener("resize", this.handleResizeDebounce);
      require("enquire.js").register("print", this.enquirePrintHandlers);
    }
  }

  componentDidMount(nextProps) {
    if (process.env.JS_ENV === "browser") {
      this.handleResize(undefined);
    }
  }

  componentWillUnmount() {
    if (process.env.JS_ENV === "browser") {
      window.removeEventListener("resize", this.handleResizeDebounce);
      require("enquire.js").unregister("print", this.enquirePrintHandlers);
    }
  }

  componentDidUpdate() {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));
    tags.forEach(t => {
      let nodeBar = this.refs[`${t.name}Bar`] as HTMLElement;
      let isShorthand = this.state.isTagShorthand && this.state.isTagShorthand[`${t.name}`];
      if (isShorthand) {
        enableTooltip(nodeBar);
      } else {
        disableTooltip(nodeBar);
      }
    });
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
              shorthand = this.state.isTagShorthand && this.state.isTagShorthand[`${t.name}`];
            }
            return (
              <div className={`skill-graph-bar`} key={index} style={{ width: `${percentageWidth}%` }} ref={`${t.name}Bar`}>
                { shorthand ?
                  <span className={`skill-graph-bar-title`} ref={`${t.name}Title`} data-tooltip-placement={`right`} title={`${t.name}`}>{ t.shorthand }</span> :
                  <span className={`skill-graph-bar-title`} ref={`${t.name}Title`}>{ t.name }</span>
                }
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SkillsGraph;
