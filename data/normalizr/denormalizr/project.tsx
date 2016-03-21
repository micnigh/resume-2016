import { merge } from "lodash";
import denormalizr from "./";
import { project } from "../schema/";

export let denormalize = (id: string, normalizedData: any) => {
  return denormalizr(merge({}, normalizedData, {
    result: id,
  }), project);
};

export default denormalize;
