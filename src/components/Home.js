import React from "react";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

const Intro = React.lazy(() => import ("./Intro"));
const Portfolio = React.lazy(() => import ("./Portfolio"));

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.remove("u-DarkMode");
  }

  render() {
    return (
      <div className="c-Page">
        <ScrollToTopOnMount />
        <Intro />
        <Portfolio />
      </div>
    )
  }
}

export default Home;
