import React from "react";
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

import LaBergerie from "../images/portfolio/la-bergerie.webp";
import ThreeStreams from "../images/portfolio/three-streams.webp";
import ECommerce from "../images/portfolio/ecommerce-landing-page.webp";
import ProductPage from "../images/portfolio/product-detail-concept.webp";
import Bethany from "../images/portfolio/bethany.webp";
import SeeTheWorld from "../images/portfolio/seetheworld.webp";
import Henry from "../images/portfolio/henry.webp";
import ChaletRentals from "../images/portfolio/chalet-apartment-rentals.webp";
import Moonshine from "../images/portfolio/moonshine.webp";
import Diner from "../images/portfolio/open-24-hours.webp";
import Solstice from "../images/portfolio/solstice.webp";
import Milkyway from "../images/portfolio/milkyway.webp";

import LaBergerieProject from "./Projects/LaBergerie";

class Portfolio extends React.Component {
  render() {
    const Projects = [
      { id: 0, url: "/la-bergerie", img_url: LaBergerie, title: "La Bergerie", category: "Web", component: LaBergerieProject },
      { id: 1, url: "/three-streams", img_url: ThreeStreams, title: "Three Streams", category: "Digital", component: null },
      { id: 3, url: "/e-commerce-concept", img_url: ECommerce, title: "Ecommerce concept", category: "Digital", component: null },
      { id: 4, url: "/product-detail-concept", img_url: ProductPage, title: "Product page concept", category: "Digital", component: null },
      { id: 5, url: "/bethany", img_url: Bethany, title: "Bethany", category: "Print", component: null },
      { id: 6, url: "/seetheworld", img_url: SeeTheWorld, title: "SeeTheWorld", category: "Web", component: null },
      { id: 7, url: "/henry", img_url: Henry, title: "Henry", category: "Print", component: null },
      { id: 8, url: "/chalet-rentals", img_url: ChaletRentals, title: "Chalet Rentals", category: "Web", component: null },
      { id: 9, url: "/moonshine", img_url: Moonshine, title: "Moonshine", category: "Digital", component: null },
      { id: 10, url: "/diner", img_url: Diner, title: "Diner wrap", category: "Print", component: null },
      { id: 11, url: "/solstice", img_url: Solstice, title: "Solstice", category: "Photography", component: null },
      { id: 12, url: "/milkyway", img_url: Milkyway, title: "Milkyway", category: "Photography", component: null }
    ];

    return (
      <div className="o-Grid">
        {Projects.map(i => (
          <div
            key={i.id}
            className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp"
          >
            <Link to={i.url}>
              <img className="c-Portfolio--ItemImg" src={i.img_url}/>
                <div className="c-Portfolio--Content">
                  <div className="c-Portfolio--Text">
                    <h5 className="c-Portfolio--Title">{i.title}</h5>
                    <p className="c-Portfolio--Category">{i.category}</p>
                  </div>
                </div>
                <div className="c-Portfolio--Background"></div>
            </Link>

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fadeInUp"
                >
                  <Switch location={location}>
                    <Route path={i.url} component={i.component} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
