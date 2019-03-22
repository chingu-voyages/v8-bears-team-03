import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import BeverageFeed from "./components/BeverageFeed";
import DisplayCase from "./components/DisplayCase";
import NavBar from "./components/NavBar";

fetch("http://localhost:8000/drinks")
  .then(results => results.json())
  .then(data => {
    ReactDOM.render(
      <BeverageFeed data={data.drink} />,
      document.getElementById("BeverageFeed")
    );
  });
//   .then(data => {
//     ReactDOM.render(
//       <DisplayCase data={data.drink[0]} />,
//       document.getElementById("BeverageFeed")
//     );
//   })

// ReactDOM.render(<BeverageFeed />, document.getElementById("BeverageFeed"));
ReactDOM.render(<NavBar />, document.getElementById("NavBar"));

// document.querySelector("#beer").addEventListener("click", sortDrinks(beer));
// document.querySelector("#coffe").addEventListener("click", sortDrinks(coffee));
// document.querySelector("#tea").addEventListener("click", sortDrinks(tea));
// document.querySelector("#liquor").addEventListener("click", sortDrinks(liquor));

// function sortDrinks(type) {
//   fetch("http://localhost:8000/drinks?type=" + type)
//     .then(results => results.json())
//     .then(data => {
//       ReactDOM.render(
//         <BeverageFeed data={data.type} />,
//         document.getElementById("BeverageFeed")
//       );
//     });
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
