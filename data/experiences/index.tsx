import { NormalizedExperience, NormalizedProject, Tag } from "./index.types";
import { merge } from "lodash";
import moment from "moment";
import uuid from "node-uuid";
import tagIconMap from "./tags/icons";
import tagShorthandMap from "./tags/shorthand";

let formatTime = (time) => {
  return time === `` ? time : moment(time).format();
};

export let createExperience = (options: NormalizedExperience): NormalizedExperience => {
  let experience = merge({
    id: uuid.v4(),
  }, options, {
    start: formatTime(options.start),
    end: formatTime(options.end),
  });
  if (typeof experience.portfolio !== "undefined") {
    experience.portfolio = merge({
      hoverTitle: `View snapshot of ${experience.title}`
    }, experience.portfolio);
  }
  return experience;
};

let projectsById = {};
export let createProject = (options: NormalizedProject): NormalizedProject => {
  let project = merge({
    id: uuid.v4(),
  }, options, {
    start: formatTime(options.start),
    end: formatTime(options.end),
  });
  projectsById[project.id] = project;
  if (typeof project.portfolio !== "undefined") {
    project.portfolio = merge({
      hoverTitle: `View snapshot of ${project.title}`
    }, project.portfolio);
  }
  return project;
};

let tagCacheByName = {};
let tagsById = {};
export let createTags = (duration: string, tags: string[]): string[] => {
  return tags.map(t => {
    let tag = tagCacheByName[t] as Tag;
    if (typeof tag !== "undefined") {
      tag = merge(tag, {
        duration: moment.duration(tag.duration).add(moment.duration(duration)).toJSON(),
      });
      return tag;
    } else {
      return createTag({ name: t, duration, icon: tagIconMap[t], shorthand: tagShorthandMap[t] });
    }
  }).map(t => t.id);
};
let createTag = (options: Tag): Tag => {
  let tag = merge({
    id: uuid.v4(),
  }, options);
  tagCacheByName[options.name] = tag;
  tagsById[tag.id] = tag;
  return tag;
};

let experiencesAsArray: NormalizedExperience[] = [
  require("./2007-01_2005-01_duovu.com_Duovu-Inc/").default,
  require("./2012-03_2011-12_Mobile-Game-Dev_Xtracool/").default,
  require("./2012-08_2012-04_Technical-Lead_Sutisoft/").default,
  require("./2014-10_2010-09_Freelance-web-dev/").default,
  require("./2015-02_Web-Developer-GDIT/").default,
  require("./hobbies/").default,
];

let experiencesById = {};
experiencesAsArray.forEach(e => experiencesById[e.id] = e);

export let experiences = experiencesById;

export let projects = projectsById;

export let tags = tagsById;

export default {
  entities: {
    experiences,
    projects,
    tags,
  },
};
