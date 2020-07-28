import React from "react";
import { Image, Placeholder } from "cloudinary-react";

export default ({src, alt}) => (
  <div>
    <Image
      style={{
        maxWidth: "100%",
        maxHeight: "100%"
      }}
      cloudName="iamstevehobbs-com"
      publicId={src}
      loading="lazy"
      crop="scale"
      width="auto"
      responsive
      alt={alt}
    >
      <Placeholder />
    </Image>
  </div>
);
