import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    const {
      url,
      img_url,
      title,
      category
    } = this.props;

    return (
      <Router>
        <div className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp">
          <Link to={url}
            onMouseEnter={this.onMouseEnter()}
            onMouseLeave={this.onMouseLeave()}
          >
            <img className="c-Portfolio--ItemImg" src={img_url}/>
            <div className="c-Portfolio--Content">
              <div className="c-Portfolio--Text">
                <h5 className="c-Portfolio--Title">{title}</h5>
                <p className="c-Portfolio--Category">{category}</p>
              </div>
            </div>
            <div className="c-Portfolio--Background"></div>
          </Link>
        </div>
      </Router>
    )
  }

  onMouseEnter() {
    return () => {
      this.setState({hover: true});
    }
  }

  onMouseLeave() {
    return () => {
      this.setState({hover: false});
    }
  }
}

export default PortfolioItem;
