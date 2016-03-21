import { merge } from "lodash";
import denormalizr from "./";
import { experience } from "../schema/";

export let denormalize = (id: string, normalizedData: any) => {
  return denormalizr(merge({}, normalizedData, {
    result: id,
  }), experience);
};

export default denormalize;
