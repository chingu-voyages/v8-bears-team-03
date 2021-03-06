import React from "react";

function NavBar(props) {
  return (
    <nav id="nav-bar">
      <h1>devbev</h1>
      <ul>
        <li id="all" onClick={() => props.addFilter("none")}>
          all
        </li>
        <li id="beer" onClick={() => props.addFilter("Beer")}>
          beer
        </li>
        <li id="tea" onClick={() => props.addFilter("Tea")}>
          tea
        </li>
        <li id="coffee" onClick={() => props.addFilter("Coffee")}>
          coffee
        </li>
        <li id="liquor" onClick={() => props.addFilter("Liquor")}>
          liquor
        </li>
        <li id="add" onClick={() => props.addDrinkForm()}>
          add my drink
        </li>
        {/* <li>
            <a href="https://github.com/login/oauth/authorize?client_id=5391d9587090cbee0c38">
              login
            </a>
          </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
