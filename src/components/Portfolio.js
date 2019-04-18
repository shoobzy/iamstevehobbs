import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import Img from "react-webp-image";

// Review these imports
import LaBergerie from "../images/portfolio/la-bergerie.webp";
import ThreeStreams from "../images/portfolio/three-streams.webp";
import ECommerce from "../images/portfolio/ecommerce-landing-page.webp";
import ProductPage from "../images/portfolio/product-detail-concept.webp";
import Bethany from "../images/portfolio/bethany.webp";
import SeeTheWorld from "../images/portfolio/seetheworld.webp";
import Henry from "../images/portfolio/henry.webp";
import No14 from "../images/portfolio/no-14.webp";
import Moonshine from "../images/portfolio/moonshine.webp";
import Diner from "../images/portfolio/open-24-hours.webp";
import Solstice from "../images/portfolio/solstice.webp";
import Milkyway from "../images/portfolio/milkyway.webp";

import LaBergerieFallback from "../images/portfolio/la-bergerie.jpg";
import ThreeStreamsFallback from "../images/portfolio/three-streams.jpg";
import ECommerceFallback from "../images/portfolio/ecommerce-landing-page.jpg";
import ProductPageFallback from "../images/portfolio/product-detail-concept.jpg";
import BethanyFallback from "../images/portfolio/bethany.jpg";
import SeeTheWorldFallback from "../images/portfolio/seetheworld.jpg";
import HenryFallback from "../images/portfolio/henry.jpg";
import No14Fallback from "../images/portfolio/no-14.jpg";
import MoonshineFallback from "../images/portfolio/moonshine.jpg";
import DinerFallback from "../images/portfolio/open-24-hours.jpg";
import SolsticeFallback from "../images/portfolio/solstice.jpg";
import MilkywayFallback from "../images/portfolio/milkyway.jpg";

const Portfolio = posed.div({
  enter: { staggerChildren: 60, delay: 150 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const PortfolioItem = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: {y: 75, opacity: 0 }
});

const projects = [
  { id: 0, path: "/la-bergerie", img_url: LaBergerie, img_url_fallback: LaBergerieFallback, img_alt: "La Bergerie web project", title: "La Bergerie", category: "Web" },
  { id: 1, path: "/three-streams", img_url: ThreeStreams, img_url_fallback: ThreeStreamsFallback, img_alt: "Three Streams logo design concept", title: "Three Streams", category: "Digital"},
  { id: 2, path: "/e-commerce-concept", img_url: ECommerce, img_url_fallback: ECommerceFallback, img_alt: "eCommerce landing page design concept", title: "Ecommerce concept", category: "Digital" },
  { id: 3, path: "/product-detail-concept", img_url: ProductPage, img_url_fallback: ProductPageFallback, img_alt: "Product detail page design concept", title: "Product page concept", category: "Digital" },
  { id: 4, path: "/bethany", img_url: Bethany, img_url_fallback: BethanyFallback, img_alt: "A2 Printed poster", title: "Bethany", category: "Print" },
  { id: 5, path: "/seetheworld", img_url: SeeTheWorld, img_url_fallback: SeeTheWorldFallback, img_alt: "SeeTheWorld - web project", title: "SeeTheWorld", category: "Web" },
  { id: 6, path: "/henry", img_url: Henry, img_url_fallback: HenryFallback, img_alt: "A2 Printed poster", title: "Henry", category: "Print" },
  { id: 7, path: "/no-14", img_url: No14, img_url_fallback: No14Fallback, img_alt: "No.14 - web project", title: "No.14 Verbier", category: "Web" },
  { id: 8, path: "/moonshine", img_url: Moonshine, img_url_fallback: MoonshineFallback, img_alt: "Illustration for large format print", title: "Moonshine", category: "Digital" },
  { id: 9, path: "/diner", img_url: Diner, img_url_fallback: DinerFallback, img_alt: "Vinyl wrap designs", title: "Diner wrap", category: "Print" },
  { id: 10, path: "/solstice", img_url: Solstice, img_url_fallback: SolsticeFallback, img_alt: "Summer solstice - Photography", title: "Solstice", category: "Photography" },
  { id: 11, path: "/milkyway", img_url: Milkyway, img_url_fallback: MilkywayFallback, img_alt: "Milkyway - Photography", title: "Milkyway", category: "Photography" }
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
            <Img
              className="c-Portfolio--ItemImg h-ResponsiveImg"
              webp={i.img_url}
              src={i.img_url_fallback}
              alt={i.img_alt}
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
