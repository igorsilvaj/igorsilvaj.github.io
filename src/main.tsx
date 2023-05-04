import React from "react";
import ReactDOM from "react-dom/client";
import RenderHashRouter from "./RenderHashRouter";
import GlobalStyle from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RenderHashRouter />
  </React.StrictMode>
);
