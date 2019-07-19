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

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    // register service worker
    navigator.serviceWorker.register(sW).then(
      () => {
        console.log('SW registration succesful 😍');
      },
      err => {
        console.error('SW registration failed 😠', err)
      });
    } else {
      // Not supported 😥
    }
  });
