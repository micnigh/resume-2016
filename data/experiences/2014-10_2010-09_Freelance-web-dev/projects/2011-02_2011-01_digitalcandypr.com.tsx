import moment from "moment";
import marked from "marked";
import { NormalizedProject } from "../../index.types";
import { createProject, createTags } from "../../";

export let title = `digitalcandypr.com`;

export let start = `2011-01`;
export let end = `2011-02`;
export let duration = moment.duration(moment(end).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Expanded on GWT experience to design small business site with a very simple clean look.  Features include Twitter integration and AWS hosting.
`;

export let tags = createTags(duration, [
  `GWT`,
  `Twitter JS API`,
  `Rackspace Cloud`,
  `LAMP`,
  `AWS EC2`,
  `AWS S3`,
  `AWS CloudFront`,
  `HTML`,
  `CSS`,
  `Java`,
]);

export let icons = [
  `Java`,
];

export let portfolio = {
  link: `portfolio/digitalcandypr/`,
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