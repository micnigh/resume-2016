import { merge } from "lodash";
import { experience as schemaExperience } from "../schema/";
import { Experience } from "../../experiences/index.types";

let { denormalize } = require("denormalizr");

export let denormalizeExperience = (id: string, normalizedEntitities: any) => {
  return denormalize(normalizedEntitities.experiences[id], normalizedEntitities, schemaExperience) as Experience;
};

export default denormalizeExperience;
