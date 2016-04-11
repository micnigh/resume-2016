import React from "react";
import { Route, IndexRoute } from "react-router";

import Base from "../page/base";
import Home from "../page/home/";
import Text from "../page/text/";

export let routes = (
  <span>
    <Route path="/" component={Base}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="/download/Michael-Nigh.txt" component={Text}/>
  </span>
);

export default routes;
