import React from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";
import ErrorBoundary from "./ErrorBoundary";

const cloudimageConfig = {
  token: (process.env.CLOUDIMAGETOKEN),
  baseUrl: "http://localhost:1234/",
  doNotReplaceURL: true,
  filters: "foil1"
};

function Image(props) {
  return (
    <ErrorBoundary>
      <CloudimageProvider config={cloudimageConfig}>
        <Img
          src={props.src}
          alt={props.alt}
          ratio={props.ratio}
        />
      </CloudimageProvider>
    </ErrorBoundary>
  );
};

export default Image;
