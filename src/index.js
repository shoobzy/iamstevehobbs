import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const App = React.lazy(() => import ("./components/App"));

ReactDOM.render(
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" component={App} />
      </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
