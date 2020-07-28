import React, { Suspense } from "react";
import { Image, Placeholder, Transformation } from "cloudinary-react";
import Loader from "./Loader";

export default ({src, alt, height}) => (
  <Suspense fallback={<Loader/>}>
    <Image
      style={{
        maxWidth: 1098,
        width: "100%",
        height: "auto"
      }}
      cloudName="iamstevehobbs-com"
      publicId={src}
      loading="lazy"
      crop="fit"
      width="auto"
      height={height}
      responsive
      alt={alt}
    >
      <Placeholder />
      <Transformation fetchFormat="auto" />
    </Image>
  </Suspense>
);
