import moment from "moment";
import marked from "marked";
import { NormalizedProject } from "../../index.types";
import { createProject, createTags } from "../../";

export let title = `Hurricane Decision Simulator`;

export let start = ``;
export let end = ``;
export let duration = moment.duration({ months: 3 }).toJSON();

export let summaryMarkdown = `
Simulation of decisions that occur as a result of a hurricane heading towards a major city and how to handle its evacuation.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Docker`,
  `Less`,
  `JQuery`,
  `Backbone`,
  `HTML`,
  `CSS`,
  `socket.io`,
  `Java`,
  `matlab`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Docker`,
  `Backbone`,
  `Java`,
];

export let portfolio = {
  link: `http://firebird.nps.edu/`,
  hoverTitle: `View public website`,
};

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryHtml: marked(summaryMarkdown),
  summaryMarkdown,
  portfolio,
});

export default project;
