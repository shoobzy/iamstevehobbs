import React from "react";
import { hydrate, render } from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import "./style.scss";
import App from "./components/App";

const rootElem = document.getElementById("root");

if (rootElem.hasChildNodes()) {
  hydrate(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  rootElem
  );
} else {
  render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
  rootElem
  );
}
