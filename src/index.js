import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Loader from "./components/Loader";

const App = React.lazy(() => import("./components/App"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Route
        path="/"
        component={App}
      />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

import "./style.scss";
