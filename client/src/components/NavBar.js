import React from "react";
import ReactDOM from "react-dom";
import BeverageFeed from "./BeverageFeed";

function NavBar(props) {

  return (
    <div>
      <h1>devbev</h1>
      <ul>
        <li id="beer" onClick={() => props.addFilter("beer")}>
          beer
        </li>
        <li id="tea" onClick={() => props.addFilter("tea")}>
          tea
        </li>
        <li id="coffee" onClick={() => props.addFilter("coffee")}>
          coffee
        </li>
        <li id="liquor" onClick={() => props.addFilter("liquor")}>
          liquor
        </li>
        <li id="add">add my drink</li>
      </ul>
    </div>
  );
}

export default NavBar;
