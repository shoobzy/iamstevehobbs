import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';

import PortfolioItem from './Portfolio/PortfolioItem';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <div className="c-Portfolio o-Grid">
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/la-bergerie.webp"}
          title={"La Bergerie"}
          category={"Web"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/three-streams.webp"}
          title={"Three Streams"}
          category={"Digital"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/ecommerce-landing-page.webp"}
          title={"Three Streams"}
          category={"Web"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/product-detail-concept.webp"}
          title={"Product Detail Page"}
          category={"Web"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/bethany.webp"}
          title={"Bethany"}
          category={"Digital"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/seetheworld.webp"}
          title={"SeeTheWorld"}
          category={"Web"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/henry.webp"}
          title={"Henry"}
          category={"Digital"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/chalet-apartment-rentals.webp"}
          title={"Chalet &amp Apartment Rentals"}
          category={"Web"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/moonshine.webp"}
          title={"Moonshine"}
          category={"Digital"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/open-24-hours.webp"}
          title={"Diner"}
          category={"Digital"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/solstice.webp"}
          title={"Solstice"}
          category={"Photography"}
        />
        <PortfolioItem
          url={"#"}
          img_url={"./images/portfolio/milkyway.webp"}
          title={"Milkyway"}
          category={"Photography"}
        />
      </div>
    );
  }
}

export default Portfolio;
