import * as React from "react";
import * as ReactDOM from "react-dom";

import { browserHistory } from "react-router";
import Root from "./container/root";
let { syncHistoryWithStore, routeReducer } = require("react-router-redux");
import { initStore } from "./store/";
import initialState from "../../../data/";
import { resetEntities } from "./actions/entities";

let store = initStore(initialState);

let history = syncHistoryWithStore(browserHistory, store);

let renderComponent = ReactDOM.render((
  <Root store={store} history={history} />
), document.getElementById("content"));

if (process.env.NODE_ENV === "development") {
  declare let module: any;
  if (module.hot) {
    module.hot.accept("../../../data/", () => {
      let initialState = require("../../../data/").default;
      store.dispatch(resetEntities(initialState));
    });
  }
}

export default renderComponent;
