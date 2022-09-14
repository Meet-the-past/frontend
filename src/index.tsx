/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/configStore";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore(store);
const PGate = PersistGate as any;

ReactDOM.render(
  <Provider store={store}>
    <PGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
