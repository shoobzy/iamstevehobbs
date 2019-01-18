import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Loader from "./components/Loader";

const App = React.lazy(() => import ("./components/App"));

ReactDOM.render(
    <BrowserRouter>
      <Suspense maxDuration={300} fallback={<Loader/>}>
        <Route path="/" component={App} />
      </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
