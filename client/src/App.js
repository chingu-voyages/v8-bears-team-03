import React, { useState, useEffect } from "react";
// import "./App.css";
import BeverageFeed from "./components/BeverageFeed";
import DisplayCase from "./components/DisplayCase";
import NavBar from "./components/NavBar";
import AddMyDrinkForm from "./components/AddMyDrinkForm";

const App = function() {
  //Stores all drinks retrieved from API;
  const [allDrinks, setAllDrinks] = useState([]);

  //Stores only drinks being sent to the beverage feed component
  const [displayedDrinks, setDisplayedDrinks] = useState([]);

  //Initial State of the 'add my drink' Form
  const [showInputForm, setShowInputForm] = useState(false);

  //Initial State of the Display Case
  const [displayCaseBeverage, setDisplayCaseBeverage] = useState({});

  //API Call to Retrieve All Beverages
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DEV_API_URL}`)
      .then(resp => resp.json())
      .then(resp => {
        setAllDrinks(resp.drinks);
        changeDisplayCase(resp.drinks[resp.drinks.length - 1]["_id"]); //passes first drink to the display case;
        setDisplayedDrinks(resp.drinks);
      });
  }, []);

  function refreshAllDrinks() {
    fetch(`${process.env.REACT_APP_DEV_API_URL}`)
      .then(resp => resp.json())
      .then(resp => {
        setAllDrinks(resp.drinks);
        changeDisplayCase(resp.drinks[resp.drinks.length - 1]["_id"]); //passes first drink to the display case;
        setDisplayedDrinks(resp.drinks);
        console.log("Drink List Refreshed");
      });
  }

  //allows display case drink to change; is passed into the beverage feed component
  function changeDisplayCase(drinkID) {
    fetch(`${process.env.REACT_APP_DEV_API_URL}${drinkID}`)
      .then(resp => resp.json())
      .then(resp => {
        setDisplayCaseBeverage(resp.drink);
      });
  }

  //filters drinks and sends to beverage feed comp.
  function addFilter(type) {
    let returnDrinks = [];
    if (type !== "none") {
      allDrinks.forEach(drink => {
        if (drink.drinkType === type) {
          returnDrinks.push(drink);
        }
      });
      setDisplayedDrinks(returnDrinks);
    } else {
      setDisplayedDrinks(allDrinks);
    }
  }

  //controls visibility of the add my drink form
  function showAddDrinkForm() {
    setShowInputForm(!showInputForm);
  }

  return (
    <div id="page-wrapper">
      <NavBar addFilter={addFilter} addDrinkForm={showAddDrinkForm} />
      <main>
        <DisplayCase displayCaseBeverage={displayCaseBeverage} />
        <BeverageFeed
          changeDisplayCase={changeDisplayCase}
          drinks={displayedDrinks}
        />
        {showInputForm ? (
          <aside id="add-my-drink-modal">
            <AddMyDrinkForm
              addDrinkForm={showAddDrinkForm}
              refreshAllDrinks={refreshAllDrinks}
            />
          </aside>
        ) : null}
      </main>
    </div>
  );
};

export default App;
