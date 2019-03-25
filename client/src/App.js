import React, { useState } from "react";
import "./App.css";
import BeverageFeed from "./components/BeverageFeed";
import DisplayCase from "./components/DisplayCase";
import NavBar from "./components/NavBar";

const App = function() {
  const [drinkFilters, setDrinkID] = useState({
    displayCaseID: "5c9426bc0b23805d70e3c536",
    filterType: ""
  });

  function changeDisplayCase(id) {
    setDrinkID({
      displayCaseID: id,
      filterType: drinkFilters.filterType
    });
  }

  function addFilter(type) {
    setDrinkID({
      displayCaseID: drinkFilters.displayCaseID,
      filterType: "?type=" + type
    });
  }

  return (
    <div id="page-wrapper">
      <NavBar addFilter={addFilter} />
      <main>
        <DisplayCase drinkID={drinkFilters.displayCaseID} />
        <BeverageFeed
          changeDisplayCase={changeDisplayCase}
          filterType={drinkFilters.filterType}
        />
      </main>
    </div>
  );
};

export default App;
