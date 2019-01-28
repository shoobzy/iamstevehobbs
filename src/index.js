import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import App from "./components/App";

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  try {
      navigator.serviceWorker.register('../serviceWorker.js');
      console.log('Service Worker Registered');
  } catch (error) {
      console.log('Service Worker Register Failed');
  }
}

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);
