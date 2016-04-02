import { merge } from "lodash";
import { RESET_ENTITIES } from "./types/entities";

export let resetEntities = (options: {
  entities: any;
}) => {
  return merge({
    type: RESET_ENTITIES,
  }, options);
};
