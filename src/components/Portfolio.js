import React from "react";

import PortfolioItem from "./Portfolio/PortfolioItem";

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

const Portfolio = () => {
  return (
    <div className="c-Portfolio o-Grid" id="portfolio">
      <PortfolioItem
        url={"#"}
        img_url={LaBergerie}
        title={"La Bergerie"}
        category={"Web"}
      />
      <PortfolioItem
        url={"#"}
        img_url={ThreeStreams}
        title={"Three Streams"}
        category={"Digital"}
      />
      <PortfolioItem
        url={"#"}
        img_url={ECommerce}
        title={"eCommerce landing page"}
        category={"Web"}
      />
      <PortfolioItem
        url={"#"}
        img_url={ProductPage}
        title={"Product Detail Page"}
        category={"Web"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Bethany}
        title={"Bethany"}
        category={"Digital"}
      />
      <PortfolioItem
        url={"#"}
        img_url={SeeTheWorld}
        title={"SeeTheWorld"}
        category={"Web"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Henry}
        title={"Henry"}
        category={"Digital"}
      />
      <PortfolioItem
        url={"#"}
        img_url={ChaletRentals}
        title={"Chalet & Apartment Rentals"}
        category={"Web"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Moonshine}
        title={"Moonshine"}
        category={"Digital"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Diner}
        title={"Diner"}
        category={"Digital"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Solstice}
        title={"Solstice"}
        category={"Photography"}
      />
      <PortfolioItem
        url={"#"}
        img_url={Milkyway}
        title={"Milkyway"}
        category={"Photography"}
      />
    </div>
  );
}

export default Portfolio;
