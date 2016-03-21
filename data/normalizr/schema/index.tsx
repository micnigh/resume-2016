let { Schema, arrayOf } = require("normalizr");

export let experience = new Schema("experiences");
export let project = new Schema("projects");
export let tag = new Schema("tags");

experience.define({
  projects: arrayOf(project),
  tags: arrayOf(tag),
});
