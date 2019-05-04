import React, { useState, useEffect } from "react";
import SearchDrinks from "./components/SearchDrinks";
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
    console.log(`${process.env.REACT_APP_DEV_API_URL}`);
    fetch(`${process.env.REACT_APP_DEV_API_URL}/drinks/`)
      .then(resp => resp.json())
      .then(resp => {
        setAllDrinks(resp.drinks);
        changeDisplayCase(resp.drinks[resp.drinks.length - 1]["_id"]); //passes first drink to the display case;
        setDisplayedDrinks(resp.drinks);
      });
  }, []);

  function refreshAllDrinks() {
    fetch(`${process.env.REACT_APP_DEV_API_URL}/drinks/`)
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
    fetch(`${process.env.REACT_APP_DEV_API_URL}/drinks/${drinkID}`)
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

  function noResults() {
    document
      .querySelector("#searchBox")
      .setAttribute("placeholder", "NO MATCHES!");
  }

  //search drinks and sends results to beverage feed comp.
  function searchDrinks(query) {
    if (query && query.length !== 0) {
      fetch(`${process.env.REACT_APP_DEV_API_URL}/drinks?name=${query}`)
        .then(resp => resp.json())
        .then(resp => {
          setDisplayedDrinks(resp.drinks);
          console.log(resp.drinks.length);
          if (resp.drinks.length < 1) {
            noResults();
          } else {
            document
              .querySelector("#searchBox")
              .setAttribute("placeholder", "Get a drink...");
          }
        });
    } else {
      setDisplayedDrinks(allDrinks);
      document
        .querySelector("#searchBox")
        .setAttribute("placeholder", "Get a drink...");
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
      <SearchDrinks searchDrinks={searchDrinks} />
    </div>
  );
};

export default App;
