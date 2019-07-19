import React from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageModalConfig = {
    token: "akksjsapen",
    baseUrl: "https://pose-integration.iamstevehobbs.com/",
    filters: "foil1",
    lazyLoading: false
};

function ModalImage(props) {
  return (
    <CloudimageProvider config={cloudimageModalConfig}>
      <Img
        src={props.src}
        alt={props.alt}
        ratio={props.ratio}
      />
    </CloudimageProvider>
  );
};

export default ModalImage;
