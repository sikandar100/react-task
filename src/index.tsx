import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "stores";

import App from "components/App";
import dayjs from "dayjs";

import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
