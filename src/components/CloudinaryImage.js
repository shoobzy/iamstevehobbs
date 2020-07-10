import React from "react";
import Img from "react-cloudinary-lazy-image"

function CloudinaryImage(props) {
  return (
    <Img
      cloudName="iamstevehobbs-com"
      imageName={props.src}
      alt={props.alt}
      fluid={{
        maxWidth: props.maxWidth,
        height: props.height
      }}
      className="c-Portfolio--ItemImg h-ResponsiveImg"
      placeholderStyle={{
        filter: "blur(20px)"
      }}
    />
  );
};

export default CloudinaryImage;
