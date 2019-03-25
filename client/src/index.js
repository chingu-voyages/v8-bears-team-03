import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import BeverageFeed from "./components/BeverageFeed";
// import NavBar from "./components/NavBar";
import App from "./App";

// fetch("http://localhost:8000/drinks")
//   .then(results => results.json())
//   .then(data => {
//     ReactDOM.render(
//       <BeverageFeed data={data.drinks} />,
//       document.getElementById("BeverageFeed")
//     );
//   });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
