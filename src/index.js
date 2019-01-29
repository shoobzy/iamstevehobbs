import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import App from "./components/App";

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('../dist/__/sw.js');
  });
}

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);
