import moment from "moment";
import marked from "marked";
import { NormalizedExperience } from "../index.types";
import { createExperience, createTags } from "../";

export let title = `duovu.com - Duovu Inc`;

export let start = `2005-01`;
export let end = `2007-01`;
export let duration = moment.duration(moment(end).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Constructed art gallery website using a variety of tools, including GWT, JQuery, and Typeface.  Emphasis on design, compatibility, and performance.  Expanded GWT to allow exact positioning, shadows, custom fonts, and history support.  Worked directly with the client to achieve the exact look and feel they needed.

Maintained and added new content coinciding with launch events for a few years; This included adding new collections, sending out newsletters, and posting to various social media.  Assisted in migration to ecommerce by importing existing products into new Shopify site in 2014.
`;

export let tags = createTags(duration, [
  `PHP`,
  `MYSQL`,
  `LAMP`,
  `Dojo`,
  `Javascript`,
  `JSON`,
  `XML`,
  `Java`,
  `VMWare Workstation`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `java`,
  `javascript`,
  `php`,
  `mysql`,
];

export let projects = [];

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
