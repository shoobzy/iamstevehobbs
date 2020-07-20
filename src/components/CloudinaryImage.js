import React from "react";
import Img from "react-cloudinary-lazy-image";

export default ({src, alt, maxWidth, height}) => (
  <Img
    cloudName="iamstevehobbs-com"
    imageName={src}
    alt={alt}
    fluid={{
      maxWidth: maxWidth,
      height: height
    }}
    className="c-Portfolio--ItemImg h-ResponsiveImg"
    placeholderStyle={{
      filter: "blur(20px)"
    }}
  />
)
