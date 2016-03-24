import moment from "moment";
import marked from "marked";
import { NormalizedExperience, NormalizedProject } from "../index.types";
import { createExperience, createTags } from "../";

export let title = `Web Developer - NPS CED3 - GDIT`;

export let start = `2015-02`;
export let end = ``;
export let duration = ``;

export let summaryMarkdown = `
Build and maintain CED3 web applications to enhance course development and delivery at the Naval Postgraduate School in Monterey.

Responsibilities include managing time between multiple projects, creating automated build systems, handling  server deployments, adding features to existing applications, and general maintenance.

Backends in Java Wicket or NodeJs Express with Docker deployments using the [twelve-factor app](http://12factor.net/) model.

Frontends with Backbone for MVC, gulp for automated builds, and Browserify for modularized code.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Docker`,
  `Less`,
  `JQuery`,
  `Backbone`,
  `Java`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Docker`,
  `Java`,
  `Backbone`,
];

export let projects = ([
  require("./projects/monterey-phoenix").default,
  require("./projects/hurricane-decision-simulator").default,
] as NormalizedProject[]).map(p => p.id);

export let experience: NormalizedExperience = createExperience({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  projects,
  summaryHtml: marked(summaryMarkdown),
  summaryMarkdown,
});

export default experience;