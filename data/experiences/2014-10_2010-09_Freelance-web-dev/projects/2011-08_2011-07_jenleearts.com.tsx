import moment from "moment";
import { NormalizedProject } from "../../index.types";
import { createProject, createTags } from "../../";

export let title = `jenleearts.com`;

export let start = `2011-07`;
export let end = `2011-08`;
export let duration = moment.duration(moment(end).endOf(`month`).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Extended parveztaj.com GWT template to another site.  Setup domain, hosting, and CDN.
`;

export let tags = createTags(duration, [
  `GWT`,
  `JQuery`,
  `Typeface`,
  `Java`,
  `Javascript`,
  `Rackspace CloudFiles`,
  `Rackspace Cloud`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Java`,
];

export let portfolio = {
  link: `https://micnigh.github.io/jenleearts.com/`,
};

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
  portfolio,
});

export default project;
