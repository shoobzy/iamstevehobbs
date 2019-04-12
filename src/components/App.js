import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import posed, {
  PoseGroup
} from "react-pose";
import {
  Preloader,
  Placeholder
} from "react-preloading-screen";

import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import asyncComponent from "./AsyncComponent";

import "../style.css";

// Figure this out
// Create a core routing file?
const LaBergerieProject = asyncComponent(() =>
  import("./Projects/LaBergerie").then(module => module.default)
)
const ThreeStreamsProject = asyncComponent(() =>
  import("./Projects/ThreeStreams").then(module => module.default)
)
const ECommerceProject = asyncComponent(() =>
  import("./Projects/ECommerce").then(module => module.default)
)
const DetailPageProject = asyncComponent(() =>
  import("./Projects/ProductPage").then(module => module.default)
)
const BethanyProject = asyncComponent(() =>
  import("./Projects/Bethany").then(module => module.default)
)
const StwProject = asyncComponent(() =>
  import("./Projects/Stw").then(module => module.default)
)
const HenryProject = asyncComponent(() =>
  import("./Projects/Henry").then(module => module.default)
)
const No14Project = asyncComponent(() =>
  import("./Projects/No14").then(module => module.default)
)
const MoonshineProject = asyncComponent(() =>
  import("./Projects/Moonshine").then(module => module.default)
)
const DinerProject = asyncComponent(() =>
  import("./Projects/Diner").then(module => module.default)
)
const SolsticeProject = asyncComponent(() =>
  import("./Projects/Solstice").then(module => module.default)
)
const MilkyWayProject = asyncComponent(() =>
  import("./Projects/MilkyWay").then(module => module.default)
)

const project_routes = [
  { id: 0, path: "/la-bergerie", component: LaBergerieProject },
  { id: 1, path: "/three-streams", component: ThreeStreamsProject },
  { id: 2, path: "/e-commerce-concept", component: ECommerceProject },
  { id: 3, path: "/product-detail-concept", component: DetailPageProject },
  { id: 4, path: "/bethany", component: BethanyProject },
  { id: 5, path: "/seetheworld", component: StwProject },
  { id: 6, path: "/henry", component: HenryProject },
  { id: 7, path: "/no-14", component: No14Project },
  { id: 8, path: "/moonshine", component: MoonshineProject },
  { id: 9, path: "/diner", component: DinerProject },
  { id: 10, path: "/solstice", component: SolsticeProject },
  { id: 11, path: "/milkyway", component: MilkyWayProject }
];

const NotFound = () => (
  <React.Fragment>
    <h2>Page not found</h2>
    <p>Return to <a href="/">homepage</a></p>
  </React.Fragment>
)

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

function App() {
  return (
    <Preloader>
      <div className="o-Page">
        <Header />
        <Route render={({location}) => (
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} key="home" />
                {project_routes.map(i => (
                  <Route
                    key={i.id}
                    path={i.path}
                    component={i.component}
                  />
                ))}
                <Route component={NotFound} key="error" />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        )} />
        <Footer />
      </div>
      <Placeholder>
        <Loader/>
      </Placeholder>
    </Preloader>
  );
}

export default App;
