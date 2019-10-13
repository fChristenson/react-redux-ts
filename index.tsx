import React from "react";
import ReactDom from "react-dom";
import { App } from "./src/container";
import { Provider } from "react-redux";
import { store } from "./src/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
