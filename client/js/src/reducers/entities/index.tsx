import { combineReducers } from "redux";
import { merge } from "lodash";
import { RESET_ENTITIES } from "../../actions/types/entities";

let Entities = (state = {}, action) => {
  if (process.env.NODE_ENV === "development") {
    if (action.type === RESET_ENTITIES) {
      let nextState = merge({}, action.entities);
      delete nextState.type;
      return nextState;
    }
  }
  return state;
};

export default Entities;
