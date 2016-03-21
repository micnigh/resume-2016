import moment from "moment";
import marked from "marked";
import { NormalizedProject } from "../../index.types";
import { createProject, createTags } from "../../";

export let title = `Monterey Phoenix`;

export let start = ``;
export let end = ``;

export let duration = moment.duration({ months: 3 }).toJSON();

export let summaryMarkdown = `
Code editor for the [Monterey Phoenix language](https://wiki.nps.edu/display/MP/Monterey+Phoenix+Home) with graph visualizations and automated layouts.  Used to examine process flow in a variety of disciplines to clarify and find problems in the execution of asynchronous events.
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
]);

export let icons = [
  `gulp`,
  `nodejs`,
  `Docker`,
  `backbone`,
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
