import React from "react";
import { Route, IndexRoute } from "react-router";

import Base from "../page/base";
import Home from "../page/home/";
import Text from "../page/text/";

let baseUrl = typeof window !== "undefined" && (window as any).baseUrl ? (window as any).baseUrl : "/";

export let routes = (
  <span>
    <Route path={`${baseUrl}`} component={Base}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path={`${baseUrl}download/Michael-Nigh.txt`} component={Text}/>
  </span>
);

export default routes;
