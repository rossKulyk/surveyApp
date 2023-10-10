import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware, Middleware } from "redux";

import App from "./App";
import { rootReducer } from "./store/root-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, {}, applyMiddleware());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
