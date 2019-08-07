import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import posed, {
  PoseGroup
} from "react-pose";
import MetaTags from "react-meta-tags";
import ReactGA from "react-ga";

ReactGA.initialize('UA-37329355-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

const Home = React.lazy(() => import("./Home"));

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
const SolsticeProject = React.lazy(() => import("./Projects/Solstice"));
const MilkyWayProject = React.lazy(() => import("./Projects/MilkyWay"));

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
  <div className="o-Container">
    <MetaTags>
      <title>Oops. 404 Page not found</title>
      <meta name="prerender-status-code" content="404" />
    </MetaTags>
    <h2>Page not found</h2>
    <p>Return to <a href="/">homepage</a></p>
  </div>
)

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

function App() {
  return (
    <React.Suspense fallback={<Loader/>}>
      <div className="o-Page">
        <Header />
        <Route render={({location}) => (
          <PoseGroup>
            <RouteContainer
              key={location.pathname}
              initialPose="enter"
              pose="exit"
            >
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
    </React.Suspense>
  );
}

export default App;
