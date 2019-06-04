import React from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageConfig = {
    token: "akksjsapen",
    baseUrl: "https://pose-integration.iamstevehobbs.com/",
    lazyLoading: false
};

function Image(props) {
  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Img
        src={props.src}
        alt={props.alt}
        operation="cdn"
        size={props.size}
        className={props.class}
        f="webp"
      />
    </CloudimageProvider>
  );
};

export default Image;
