import { merge } from "lodash";
import denormalizr from "./";
import { experience } from "../schema/";
import { Experience } from "../../experiences/index.types";

export let denormalize = (id: string, normalizedData: any) => {
  return denormalizr(merge({}, normalizedData, {
    result: id,
  }), experience) as Experience;
};

export default denormalize;
