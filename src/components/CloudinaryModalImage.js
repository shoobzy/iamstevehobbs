import React, { Suspense } from "react";
import { Image, Placeholder } from "cloudinary-react";
import Loader from "./Loader";

export default ({src, alt, height}) => (
  <Suspense fallback={<Loader/>}>
    <Image
      style={{
        width: 1098,
        maxWidth: "100%",
        maxHeight: "100%"
      }}
      cloudName="iamstevehobbs-com"
      publicId={src}
      loading="lazy"
      crop="scale"
      width="auto"
      height={height}
      responsive
      alt={alt}
    >
      <Placeholder />
    </Image>
  </Suspense>
);
