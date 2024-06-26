import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Routes from "./pages/Routes/Routes";
import "prismjs/themes/prism.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./output.css";
// import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
