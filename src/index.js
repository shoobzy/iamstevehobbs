import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import App from "./components/App";

import "./style.scss";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);

import ReactGA from "react-ga";

ReactGA.initialize('UA-37329355-1');
ReactGA.pageview(window.location.pathname + window.location.search);
