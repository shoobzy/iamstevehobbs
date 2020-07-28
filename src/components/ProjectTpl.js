import React, { Suspense } from "react";
import Loader from "./Loader";
import posed from "react-pose";
import CloudinaryImage from "./CloudinaryImage";
import ModalImage from "./CloudinaryModalImage";

const Modal = React.lazy(() => import("./Modal/Modal"));
const ColourPalette = React.lazy(() => import("./ColourPalette"));
const ScrollToTopOnMount = React.lazy (() => import("./ScrollToTopOnMount"));

const ProjectContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: { y: 75, opacity: 0 }
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
    document.body.classList.remove("u-Animate","u-DarkMode","u-ModalOpen");

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
      modal_height,
      colour_palette
    } = this.props

    let swatches = [
      { id: 0, swatchName: "Pantone-276C", pantone: "PANTONE 276 C", rgb: "34 28 53", hex: "221C35", cmyk: "94 93 0 79" },
      { id: 1, swatchName: "Pantone-7404C", pantone: "PANTONE 7404 C", rgb: "244 218 64", hex: "F4DA40", cmyk: "1 3 80 0" },
      { id: 2, swatchName: "Pantone-Rubine_Red_C", pantone: "PANTONE Rubine Red C", rgb: "206 0 88", hex: "CE0058", cmyk: "0 100 24 4" }
    ];

    return (
      <ProjectContainer>
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
              <CloudinaryImage
                src={"Projects/" + image_primary}
                alt={title}
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
                <Suspense fallback={<Loader/>}>
                  <React.Fragment>
                    <Modal
                      show={this.state.showModal}
                      closeCallback={this.toggleModal}
                      customClass="c-Modal"
                    >
                      <React.Fragment>
                        <ModalImage
                          src={"Projects/" + modal}
                          alt={title}
                          height={modal_height}
                        />
                      </React.Fragment>
                    </Modal>
                    <p><a className="c-Btn" onClick={this.toggleModal}>View fullsize</a></p>
                  </React.Fragment>
                </Suspense>
              )}
            </div>
          </div>

          {image_secondary && (
            <div className="c-Project--ItemImg">
              <CloudinaryImage
                src={"Projects/" + image_secondary}
                alt={title}
              />
            </div>
          )}

          {colour_palette && (
            swatches = (
              <div className="o-Container">
                <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
                  {swatches.map(i => (
                    <ColourPalette
                      key={i.id}
                      swatchName={i.swatchName}
                      pantone={i.pantone}
                      hex={i.hex}
                      rgb={i.rgb}
                      cmyk={i.cmyk}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </ProjectContainer>
    )
  }
}

export default PortfolioItem;
