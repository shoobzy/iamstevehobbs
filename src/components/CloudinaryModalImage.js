import React, { Suspense } from "react";
import { Image, Placeholder, Transformation } from "cloudinary-react";
import Loader from "./Loader";

export default ({src, alt, height}) => (
  <Suspense fallback={<Loader/>}>
    <Image
      dpr="auto"
      responsive
      width="auto"
      height={height}
      crop="scale"
      responsiveUseBreakpoints="true"
      cloudName="iamstevehobbs-com"
      publicId={src}
      alt={alt}
      loading="lazy"
      className="c-Portfolio--ItemImg h-ResponsiveImg"
      style={{width: 1098}}>
      <Placeholder type="blur" />
      <Transformation quality="auto" />
    </Image>
  </Suspense>
);
