import React from "react";
import ReactDOM from "react-dom";
import BeverageFeed from "./BeverageFeed";

function NavBar() {
  function sortDrinks(type) {
    fetch("http://localhost:8000/drinks?type=" + type)
      .then(results => results.json())
      .then(data => {
        ReactDOM.render(
          <BeverageFeed data={data[type]} />,
          document.getElementById("BeverageFeed")
        );
      });
  }

  return (
    <nav>
      <div id="NavBar">
        <h1>devbev</h1>
        <ul>
          <li id="beer" onClick={() => sortDrinks("beer")}>
            beer
          </li>
          <li id="tea" onClick={() => sortDrinks("tea")}>
            tea
          </li>
          <li id="coffee" onClick={() => sortDrinks("coffee")}>
            coffee
          </li>
          <li id="liquor" onClick={() => sortDrinks("liquor")}>
            liquor
          </li>
          <li id="add">add my drink</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
