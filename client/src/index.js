import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import BeverageFeed from "./components/BeverageFeed";
import NavBar from "./components/NavBar";

ReactDOM.render(<BeverageFeed />, document.getElementById("BeverageFeed"));
ReactDOM.render(<NavBar />, document.getElementById("NavBar"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
