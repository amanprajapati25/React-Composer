import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <div>Error in React MFE: {err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
export default Root;

// import React from "react";
// import ReactDOM from "react-dom";
// import singleSpaReact from "single-spa-react";
// import Root from "./root.component";

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: Root,
//   errorBoundary(err, info, props) {
//     return <div>Error in React MFE: {err.message}</div>;
//   },
// });

// export const { bootstrap, mount, unmount } = lifecycles;
// export default Root;
