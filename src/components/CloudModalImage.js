import React from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageModalConfig = {
    token: "akksjsapen",
    baseUrl: "https://pose-integration.iamstevehobbs.com/",
    lazyLoading: false
};

function ModalImage(props) {
  return (
    <CloudimageProvider config={cloudimageModalConfig}>
      <Img
        src={props.src}
        alt={props.alt}
        ratio={props.ratio}
        q="80"
      />
    </CloudimageProvider>
  );
};

export default ModalImage;
