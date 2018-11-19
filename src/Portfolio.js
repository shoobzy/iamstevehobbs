import React from 'react';

import PortfolioItem from './components/Portfolio/PortfolioItem';

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
            img_url={"images/portfolio/la-bergerie.webp"}
            title={"La Bergerie"}
            category={"Web"}
          />
      </div>
    );
  }
}

export default Portfolio;
