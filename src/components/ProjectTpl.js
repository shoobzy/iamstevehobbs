import React, { useState, useEffect, Fragment } from "react";
import posed from "react-pose";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import {
  Preloader,
  Placeholder
} from "react-preloading-screen";
import Img from "react-webp-image";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const ProjectContainer = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
})

const ProjectItem = ({ title, category, image_webp, image_non_webp, overview, image_secondary, ext_url, modal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.add("u-Animate","u-DarkMode");

    // Turn this into a little function
    const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
    textElems.forEach(function(textElem) {
      textElem.classList.add("u-Foreground");
    });

    return function cleanup() {
      document.body.classList.remove("u-Animate","u-DarkMode");

      // Turn this into a little function
      const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
      textElems.forEach(function(textElem) {
        textElem.classList.remove("u-Foreground");
      });
    };
  });

  return (
    <ProjectContainer>
      <Preloader>
        <div className="c-Page c-Project">
          <ScrollToTopOnMount />
          <div className="c-Project--Header">
            <div className="c-Intro o-Grid">
              <h1 className="c-Project--Title o-Grid--Item 1/2-TabletPortraitUp-WithGutter">
                {title}
              </h1>
              <p className="c-Project--Category o-Grid--Item 1/2-TabletPortraitUp-WithGutter">
                {category}
              </p>
            </div>
            {image_webp && image_non_webp && (
              <Img
                className="c-Project--ItemImg h-ResponsiveImg"
                webp={image_webp}
                src={image_non_webp}
              />
            )}
            {!image_webp && image_non_webp && (
              <img
                className="c-Project--ItemImg h-ResponsiveImg"
                src={image_non_webp}
              />
            )}
          </div>
          <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
            {overview && (
              <div>
                <h5>Overview</h5>
                <p className="c-Title--Delta c-Project--Overview">
                  {overview}
                </p>
              </div>
            )}
            {ext_url && (
              <p><a className="c-Btn" href={ext_url} target="_blank">Visit</a></p>
            )}
            {modal && (
              <div>
                <p>
                  <a
                    className="c-Btn"
                    onClick={onButtonClick}
                  >
                    View fullsize
                  </a>
                </p>
                {isOpen && <Modal onModalClose={onModalClose}>
                  <Fragment>
                    <img src={modal} className="h-ResponsiveImg" />
                  </Fragment>
                </Modal>}
              </div>
            )}
          </div>
          {image_secondary && (
            <img
              className="c-Project--ItemImg h-ResponsiveImg"
              src={image_secondary}
            />
          )}
        </div>
        <Placeholder>
          <Loader/>
        </Placeholder>
      </Preloader>
    </ProjectContainer>
  )
}

export default ProjectItem;
