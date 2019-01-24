import React, { lazy, Suspense } from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import Loader from "../Loader";

const Modal = (
  lazy(() => (
    import("../Modal/Modal")
  ))
)

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
  }

  componentWillUnmount() {
    document.body.classList.remove("u-Animate","u-DarkMode");
  }

  render() {
    const {
      title,
      category,
      image_primary,
      overview,
      image_secondary,
      ext_url,
      modal
    } = this.props

    return (
      <Suspense maxDuration={300} fallback={<Loader/>}>
        <div className="c-Page fadeInUp c-Project">
          <ScrollToTopOnMount />
          <div className="c-Project--Header">
            <div className="c-Intro o-Grid">
              <h1 className="c-Project--Title o-Grid--Item 1/2-TabletPortraitUp-WithGutter fadeInUp">
                {title}
              </h1>
              <p className="c-Project--Category o-Grid--Item 1/2-TabletPortraitUp-WithGutter fadeInUp">
                {category}
              </p>
            </div>
            <img
              className="c-Project--ItemImg h-ResponsiveImg"
              src={image_primary}
            />
          </div>
          <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
            <h5>Overview</h5>
            <p className="c-Overview c-Project--Overview">
              {overview}
            </p>
            {ext_url && (
              <p><a className="c-Btn" href={ext_url} target="_blank">Visit</a></p>
            )}
            {modal && (
              <Suspense maxDuration={300} fallback={<Loader/>}>
                <div>
                  <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="c-Modal"
                  >
                    <React.Fragment>
                      <img src={modal} className="h-ResponsiveImg" />
                    </React.Fragment>
                  </Modal>
                  <p><a className="c-Btn" onClick={this.toggleModal}>View fullsize</a></p>
                </div>
              </Suspense>
            )}
          </div>
          {image_secondary && (
            <img
              className="c-Project--ItemImg h-ResponsiveImg"
              src={image_secondary}
            />
          )}
        </div>
      </Suspense>
    )
  }
}

export default PortfolioItem;
