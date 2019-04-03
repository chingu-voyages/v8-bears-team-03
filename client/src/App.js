import React, { useState } from "react";
import "./App.css";
import BeverageFeed from "./components/BeverageFeed";
import DisplayCase from "./components/DisplayCase";
import NavBar from "./components/NavBar";
import AddMyDrinkForm from "./components/AddMyDrinkForm";

const App = function() {
  const [drinkFilters, setDrinkID] = useState({
    displayCaseID: "5c9426bc0b23805d70e3c536",
    filterType: ""
  });
  const [showInputForm, setShowInputForm] = useState(false);

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

  function showAddDrinkForm() {
    setShowInputForm(!showInputForm);
  }

  return (
    <div id="page-wrapper">
      <NavBar addFilter={addFilter} addDrinkForm={showAddDrinkForm} />
      <main>
        <DisplayCase drinkID={drinkFilters.displayCaseID} />
        <BeverageFeed
          changeDisplayCase={changeDisplayCase}
          filterType={drinkFilters.filterType}
        />
        {showInputForm ? (
          <aside id="add-my-drink-modal">
            <AddMyDrinkForm addDrinkForm={showAddDrinkForm} />
          </aside>
        ) : null}
      </main>
    </div>
  );
};

export default App;
