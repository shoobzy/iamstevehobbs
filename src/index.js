import React from "react";
import { hydrate, render } from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import "./style.scss";
import App from "./components/App";

const rootElem = document.getElementById("root");

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
    });
  }
}

if (rootElem.hasChildNodes()) {
  hydrate(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  rootElem,
  registerServiceWorker()
  );
} else {
  render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
  rootElem
  );
}
