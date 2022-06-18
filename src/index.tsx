import React from "react";
import ReactDOM from "react-dom/client";

import "./style/index.scss";

import Router from "./components/Router";

import reportWebVitals from "./other/reportWebVitals";
import Background from "./components/background/Background";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Background>
      <Router />
    </Background>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
