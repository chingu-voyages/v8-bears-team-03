import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
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
    <div className="page-wrapper">
      <NavBar addFilter={addFilter} />
      <DisplayCase drinkID={drinkFilters.displayCaseID} />
      <BeverageFeed
        changeDisplayCase={changeDisplayCase}
        filterType={drinkFilters.filterType}
      />
    </div>
  );
};

export default App;
