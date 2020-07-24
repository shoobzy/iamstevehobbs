import React from "react";
import {Image, Placeholder, Transformation} from "cloudinary-react";

export default ({src, width, height, alt}) => (
  <Image
    dpr="auto"
    responsive
    width="auto"
    height={height}
    responsiveUseBreakpoints="true"
    cloudName="iamstevehobbs-com"
    publicId={src}
    alt={alt}
    loading="lazy"
    className="c-Portfolio--ItemImg h-ResponsiveImg"
    style={{width: width}}>
    <Placeholder type="blur" />
    <Transformation
      quality="auto"
      fetchFormat="auto"
    />
  </Image>
);
