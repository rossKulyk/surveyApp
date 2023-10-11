import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import { rootReducer } from "./store/root-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
