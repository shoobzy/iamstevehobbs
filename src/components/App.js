import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import Loader from "./Loader";
import Header from "./Header";

const Home = React.lazy(() => import("./Home"));
const NotFound = React.lazy(() => import("./NotFound"));

// Figure this out
// Create a core routing file?
const LaBergerieProject = React.lazy(() => import("./Projects/LaBergerie"));
const ThreeStreamsProject = React.lazy(() => import("./Projects/ThreeStreams"));
const ECommerceProject = React.lazy(() => import("./Projects/ECommerce"));
const DetailPageProject = React.lazy(() => import("./Projects/ProductPage"));
const BethanyProject = React.lazy(() => import("./Projects/Bethany"));
const StwProject = React.lazy(() => import("./Projects/Stw"));
const HenryProject = React.lazy(() => import("./Projects/Henry"));
const No14Project = React.lazy(() => import("./Projects/No14"));
const MoonshineProject = React.lazy(() => import("./Projects/Moonshine"));
const DinerProject = React.lazy(() => import("./Projects/Diner"));
const MilkyWayProject = React.lazy(() => import("./Projects/MilkyWay"));
const ZunoProject = React.lazy(() => import("./Projects/Zuno"));

const project_routes = [
  { id: 0, path: "/la-bergerie", component: LaBergerieProject },
  { id: 1, path: "/three-streams", component: ThreeStreamsProject },
  { id: 2, path: "/e-commerce-concept", component: ECommerceProject },
  { id: 3, path: "/product-detail-concept", component: DetailPageProject },
  { id: 4, path: "/bethany", component: BethanyProject },
  { id: 5, path: "/zuno", component: ZunoProject },
  { id: 6, path: "/henry", component: HenryProject },
  { id: 7, path: "/no-14", component: No14Project },
  { id: 8, path: "/moonshine", component: MoonshineProject },
  { id: 9, path: "/diner", component: DinerProject },
  { id: 10, path: "/milkyway", component: MilkyWayProject },
  { id: 11, path: "/seetheworld", component: StwProject }
];

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <div className="o-Page">
        <Header />
        <Route render={({location}) => (
          <PoseGroup>
            <RouteContainer
              key={location.pathname}
              initialPose="enter"
              pose="exit"
            >
              <Suspense fallback={<Loader/>}>
                <Switch location={location}>
                  <Route
                    exact path="/"
                    component={Home}
                    key="home"
                  />
                  {project_routes.map(i => (
                    <Route
                      key={i.id}
                      path={i.path}
                      component={i.component}
                    />
                  ))}
                  <Route
                    component={NotFound}
                    key="error"
                  />
                </Switch>
              </Suspense>
            </RouteContainer>
          </PoseGroup>
        )} />
        <div className="o-Footer o-Container">
          <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
