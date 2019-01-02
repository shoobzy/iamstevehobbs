import React from "react";
import {
  Link,
} from "react-router-dom";

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

class Portfolio extends React.Component {
  render() {
    const projects = [
      { id: 0, path: "/la-bergerie", img_url: LaBergerie, title: "La Bergerie", category: "Web" },
      { id: 1, path: "/three-streams", img_url: ThreeStreams, title: "Three Streams", category: "Digital"},
      { id: 2, path: "/e-commerce-concept", img_url: ECommerce, title: "Ecommerce concept", category: "Digital" },
      { id: 3, path: "/product-detail-concept", img_url: ProductPage, title: "Product page concept", category: "Digital" },
      { id: 4, path: "/bethany", img_url: Bethany, title: "Bethany", category: "Print" },
      { id: 5, path: "/seetheworld", img_url: SeeTheWorld, title: "SeeTheWorld", category: "Web" },
      { id: 6, path: "/henry", img_url: Henry, title: "Henry", category: "Print" },
      { id: 7, path: "/chalet-rentals", img_url: ChaletRentals, title: "Chalet Rentals", category: "Web" },
      { id: 8, path: "/moonshine", img_url: Moonshine, title: "Moonshine", category: "Digital" },
      { id: 9, path: "/diner", img_url: Diner, title: "Diner wrap", category: "Print" },
      { id: 10, path: "/solstice", img_url: Solstice, title: "Solstice", category: "Photography" },
      { id: 11, path: "/milkyway", img_url: Milkyway, title: "Milkyway", category: "Photography" }
    ];

    return (
      <div className="o-Grid c-Portfolio">
        {projects.map(i => (
          <div
            key={i.id}
            className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp"
          >
            <Link to={i.path}>
              <img className="c-Portfolio--ItemImg h-ResponsiveImg" src={i.img_url}/>
                <div className="c-Portfolio--Content">
                  <div className="c-Portfolio--Text">
                    <h5 className="c-Portfolio--Title">{i.title}</h5>
                    <p className="c-Portfolio--Category">{i.category}</p>
                  </div>
                </div>
                <div className="c-Portfolio--Background"></div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
