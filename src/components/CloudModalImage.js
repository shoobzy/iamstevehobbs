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
        operation="cdn"
        size={props.size}
        className={props.class}
        filter="webp"
        ratio={1.5}
      />
    </CloudimageProvider>
  );
};

export default ModalImage;
