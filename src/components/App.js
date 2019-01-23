import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

import {
  Preloader,
  Placeholder
} from "react-preloading-screen";

import "../style.css";

import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";

// Figure this out
// Create a core routing file?
import LaBergerieProject from "./Projects/LaBergerie";
import ThreeStreamsProject from "./Projects/ThreeStreams";
import ECommerceProject from "./Projects/ECommerce";
import DetailPageProject from "./Projects/ProductPage";
import BethanyProject from "./Projects/Bethany";
import StwProject from "./Projects/Stw";
import HenryProject from "./Projects/Henry";
import ChaletRentalsProject from "./Projects/ChaletRentals";
import MoonshineProject from "./Projects/Moonshine";
import DinerProject from "./Projects/Diner";
import SolsticeProject from "./Projects/Solstice";
import MilkyWayProject from "./Projects/MilkyWay";

const project_routes = [
  { id: 0, path: "/la-bergerie", component: LaBergerieProject },
  { id: 1, path: "/three-streams", component: ThreeStreamsProject },
  { id: 2, path: "/e-commerce-concept", component: ECommerceProject },
  { id: 3, path: "/product-detail-concept", component: DetailPageProject },
  { id: 4, path: "/bethany", component: BethanyProject },
  { id: 5, path: "/seetheworld", component: StwProject },
  { id: 6, path: "/henry", component: HenryProject },
  { id: 7, path: "/chalet-rentals", component: ChaletRentalsProject },
  { id: 8, path: "/moonshine", component: MoonshineProject },
  { id: 9, path: "/diner", component: DinerProject },
  { id: 10, path: "/solstice", component: SolsticeProject },
  { id: 11, path: "/milkyway", component: MilkyWayProject }
];

function App() {
  return (
    <Preloader>
      <Placeholder>
        <Loader/>
      </Placeholder>
      <div className="o-Page">
        <Header />
        <div className="o-Container">
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={500}
                classNames="fadeInUp"
              >
                <Switch location={location}>
                  <Route exact={true} path="/" component={Home} />
                  <Route exact={true} path="/contact" component={Contact} />
                  {project_routes.map(i => (
                    <Route key={i.id} path={i.path} component={i.component} />
                  ))}
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
        <Footer />
      </div>
    </Preloader>
  );
}

export default App;
