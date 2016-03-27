import moment from "moment";
import { NormalizedExperience, NormalizedProject } from "../index.types";
import { createExperience, createTags } from "../";

export let title = `Freelance Web Developer`;

export let start = `2010-09`;
export let end = `2014-10`;
export let duration = moment.duration(moment(end).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Building highly customized personal and small businesses websites.

See projects for details.
`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export let projects: string[] = ([
  require("./projects/2011-01_2010-09_parveztaj.com").default,
  require("./projects/2011-02_2011-01_digitalcandypr.com").default,
  require("./projects/2011-08_2011-07_jenleearts.com").default,
  require("./projects/2012-01_2011-12_jamesdewulf.com").default,
  require("./projects/2012-06_2012-05_teresajanela.com").default,
  require("./projects/2012-09_2012-08_mnigh.com").default,
  require("./projects/2013-04_2013-02_drbacal.com").default,
  require("./projects/2013-07_2013-06_noahsarkretreat.com").default,
] as NormalizedProject[]).map(p => p.id);

export let experience: NormalizedExperience = createExperience({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  projects,
  summaryMarkdown,
});

export default experience;
