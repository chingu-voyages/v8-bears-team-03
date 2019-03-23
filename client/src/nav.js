import React from "react";
import ReactDOM from "react-dom";
import BeverageFeed from "./components/BeverageFeed";

function addNavListeners() {
  console.log("hello from nav.js");

  document.querySelector("#beer").addEventListener("click", sortDrinks(beer));
  document
    .querySelector("#coffe")
    .addEventListener("click", sortDrinks(coffee));
  document.querySelector("#tea").addEventListener("click", sortDrinks(tea));
  document
    .querySelector("#liquor")
    .addEventListener("click", sortDrinks(liquor));
}

function sortDrinks(type) {
  fetch("http://localhost:8000/drinks?type=" + type)
    .then(results => results.json())
    .then(data => {
      ReactDOM.render(
        <BeverageFeed data={data.type} />,
        document.getElementById("BeverageFeed")
      );
    });
}

export { addEventListener, sortDrinks };
