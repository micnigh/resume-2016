import moment from "moment";
import { NormalizedExperience, NormalizedProject } from "../index.types";
import { createExperience, createTags } from "../";

export let title = `Hobbies`;

export let start = ``;
export let end = ``;
export let duration = moment.duration().toJSON();

export let summaryMarkdown = `
Interesting projects outside of work.
`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export let projects = ([
  require("./projects/2012-01_2011-11_Web-App-Generator").default,
  require("./projects/2012-09_2012-08_resume.mnigh.com").default,
  require("./projects/2013-09_2013-04_LXC-Deployment").default,
  require("./projects/2014-02_2014-01_Backbone-Financial-App").default,
  require("./projects/2014-08_2014-07_Docker-Migration").default,
  require("./projects/2014-11_2014-09_NodeJs-Migration").default,
  require("./projects/2014-11_2014-11_www.mnigh.com").default,
  require("./projects/2014-12_2014-10_resume.mnigh.com").default,
  require("./projects/2015-05_2014-04_android-app").default,
  require("./projects/2015-07_2015-07_resume.mnigh.com").default,
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
