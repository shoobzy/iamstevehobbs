import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);

// this way Parcel won't check "service-worker.js"
const sW = "../dist/service-worker.js";
navigator.serviceWorker.register(sW)
