import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

const testData = () => {
  return ["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", "e"];
};

const checkKey = (state = [], action) => {
  console.log("checkKey reducer gets", action.payload);
  if (action.type == "CHECK_KEY") {
    switch (action.payload) {
      case "h":
        console.log("correct in Store");
        break;
      case "e":
        console.log("correct");
        break;
      default:
        console.log("Incorrect from Store");
    }
  }
  return state;
};

const store = createStore(
  combineReducers({
    checkKey,
    testData,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
