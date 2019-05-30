import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import Image from "./CloudImage";

// Review these imports
import LaBergerie from "../images/portfolio/la-bergerie.jpg";
import ThreeStreams from "../images/portfolio/three-streams.jpg";
import ECommerce from "../images/portfolio/ecommerce-landing-page.jpg";
import ProductPage from "../images/portfolio/product-detail-concept.jpg";
import Bethany from "../images/portfolio/bethany.jpg";
import SeeTheWorld from "../images/portfolio/seetheworld.jpg";
import Henry from "../images/portfolio/henry.jpg";
import No14 from "../images/portfolio/no-14.jpg";
import Moonshine from "../images/portfolio/moonshine.jpg";
import Diner from "../images/portfolio/open-24-hours.jpg";
import Solstice from "../images/portfolio/solstice.jpg";
import Milkyway from "../images/portfolio/milkyway.jpg";

const Portfolio = posed.div({
  enter: { staggerChildren: 60, delay: 150 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const PortfolioItem = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: {y: 75, opacity: 0 }
});

const projects = [
  { id: 0, path: "/la-bergerie", img_url: LaBergerie, img_alt: "La Bergerie web project", title: "La Bergerie", category: "Web" },
  { id: 1, path: "/three-streams", img_url: ThreeStreams, img_alt: "Three Streams logo design concept", title: "Three Streams", category: "Digital"},
  { id: 2, path: "/e-commerce-concept", img_url: ECommerce, img_alt: "eCommerce landing page design concept", title: "Ecommerce concept", category: "Digital" },
  { id: 3, path: "/product-detail-concept", img_url: ProductPage, img_alt: "Product detail page design concept", title: "Product page concept", category: "Digital" },
  { id: 4, path: "/bethany", img_url: Bethany, img_alt: "A2 Printed poster", title: "Bethany", category: "Print" },
  { id: 5, path: "/seetheworld", img_url: SeeTheWorld, img_alt: "SeeTheWorld - web project", title: "SeeTheWorld", category: "Web" },
  { id: 6, path: "/henry", img_url: Henry, img_alt: "A2 Printed poster", title: "Henry", category: "Print" },
  { id: 7, path: "/no-14", img_url: No14, img_alt: "No.14 - web project", title: "No.14 Verbier", category: "Web" },
  { id: 8, path: "/moonshine", img_url: Moonshine, img_alt: "Illustration for large format print", title: "Moonshine", category: "Digital" },
  { id: 9, path: "/diner", img_url: Diner, img_alt: "Vinyl wrap designs", title: "Diner wrap", category: "Print" },
  { id: 10, path: "/solstice", img_url: Solstice, img_alt: "Summer solstice - Photography", title: "Solstice", category: "Photography" },
  { id: 11, path: "/milkyway", img_url: Milkyway, img_alt: "Milkyway - Photography", title: "Milkyway", category: "Photography" }
];

export default () => (
  <div className="o-Container">
    <Portfolio className="o-Grid c-Portfolio">
      {projects.map(i => (
        <PortfolioItem
          key={i.id}
          className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp"
        >
          <Link to={i.path}>
            <Image
              src={i.img_url}
              alt={i.img_alt}
              className="c-Portfolio--ItemImg h-ResponsiveImg"
            />
            <div className="c-Portfolio--Content">
              <div className="c-Portfolio--Text">
                <h5 className="c-Portfolio--Title">{i.title}</h5>
                <p className="c-Portfolio--Category">{i.category}</p>
              </div>
            </div>
            <div className="c-Portfolio--Background"></div>
          </Link>
        </PortfolioItem>
      ))}
    </Portfolio>
  </div>
);
