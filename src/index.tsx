import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./app";
import { Store, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { RootReducer, IRootState, RootAction } from "./store";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(RootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./store", () => {
    const newStore = require("./store");
    store.replaceReducer(newStore.RootReducer);
  });
}
