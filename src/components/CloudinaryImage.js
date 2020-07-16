import React, { Suspense } from "react";
import Loader from "./Loader";

const Img = React.lazy(() => import("react-cloudinary-lazy-image"));

export default function CloudinaryImage(props) {
  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
};
