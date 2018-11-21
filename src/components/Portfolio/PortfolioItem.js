import React from "react"
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

class PortfolioItem extends React.Component {
  render() {
    const {
      url,
      img_url,
      title,
      category,
      component
    } = this.props;

    return (
      <div className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp">
        <div>
          <Link to={url}>
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

        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fadeInUp"
            >
              <Switch location={location}>
                <Route path={url} component={component} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    )
  }
}

export default PortfolioItem;
