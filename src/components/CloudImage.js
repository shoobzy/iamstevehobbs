import React from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageConfig = {
    token: "akksjsapen",
    baseUrl: "https://pose-integration.iamstevehobbs.com/"
};

function Image(props) {
  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Img
        src={props.src}
        alt={props.alt}
        ratio={1.5}
        operation="width"
        size={props.size}
        className={props.class}
      />
    </CloudimageProvider>
  );
};

export default Image
