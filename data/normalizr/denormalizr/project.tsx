import { merge } from "lodash";
import denormalizr from "./";
import { project as schemaProject } from "../schema/";
import { Project } from "../../experiences/index.types";

let { denormalize } = require("denormalizr");

export let denormalizeProject = (id: string, normalizedEntitities: any) => {
  return denormalize(normalizedEntitities.projects[id], normalizedEntitities, schemaProject) as Project;
};

export default denormalizeProject;
