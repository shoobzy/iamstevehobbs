import React from "react";
import posed from "react-pose";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Image from "./CloudImage";

const Modal = React.lazy(() => import("./Modal/Modal"));

const ProjectContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: {y: 75, opacity: 0 }
});

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });

    document.body.classList.toggle("u-ModalOpen");
  }

  componentDidMount() {
    document.body.classList.add("u-Animate","u-DarkMode");

    // Turn this into a little function
    const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
    textElems.forEach(function(textElem) {
      textElem.classList.add("u-Foreground");
    });
  }

  componentWillUnmount() {
    document.body.classList.remove("u-Animate","u-DarkMode");

    // Turn this into a little function
    const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
    textElems.forEach(function(textElem) {
      textElem.classList.remove("u-Foreground");
    });
  }

  render() {
    const {
      title,
      category,
      image_primary,
      overview,
      image_secondary,
      ext_url,
      modal,
      modal_image_size
    } = this.props

    return (
      <ProjectContainer
        initialPose="exit"
        pose="enter"
      >
        <div className="c-Page fadeInUp c-Project">
          <ScrollToTopOnMount />
          <div className="c-Project--Header">
            <div className="o-Container">
              <div className="c-Intro o-Grid">
                <h1 className="c-Project--Title o-Grid--Item 1/2-TabletPortraitUp-WithGutter fadeInUp">
                  {title}
                </h1>
                <p className="c-Project--Category o-Grid--Item 1/2-TabletPortraitUp-WithGutter fadeInUp">
                  {category}
                </p>
              </div>
            </div>
            <div className="c-Project--ItemImg">
              <Image
                src={image_primary}
                size="1098x618"
                className="h-ResponsiveImg"
              />
            </div>
          </div>
          <div className="o-Container">
            <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
              {overview && (
                <React.Fragment>
                  <h5>Overview</h5>
                  <p className="c-Title--Delta c-Project--Overview">
                    {overview}
                  </p>
                </React.Fragment>
              )}
              {ext_url && (
                <p><a className="c-Btn" href={ext_url} target="_blank" rel="noreferrer">Visit</a></p>
              )}
              {modal && (
                <React.Fragment>
                  <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="c-Modal"
                  >
                    <React.Fragment>
                      <Image
                        src={modal}
                        size={modal_image_size}
                        className="h-ResponsiveImg"
                      />
                    </React.Fragment>
                  </Modal>
                  <p><a className="c-Btn" onClick={this.toggleModal}>View fullsize</a></p>
                </React.Fragment>
              )}
            </div>
          </div>
          {image_secondary && (
            <div className="c-Project--ItemImg">
              <Image
                src={image_secondary}
                size="1098x618"
                className="h-ResponsiveImg"
              />
            </div>
          )}
        </div>
      </ProjectContainer>
    )
  }
}

export default PortfolioItem;
