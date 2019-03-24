import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import DisplayCase from "./components/DisplayCase";
import BeverageFeed from "./components/BeverageFeed";
import "./App.css";

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drinks")
      .then(results => results.json())
      .then(data => {
        setDrinks(data.drinks);
      });
  }, []);

  const [drink, setDrink] = useState({});

  function setDrinkWrapper(drink) {
    setDrink(drink);
  }

  return (
    <div className="app-container">
      <NavBar />
      <main>
        <section id="display-case">
          <div id="DisplayCase">
            {drink.name ? <DisplayCase data={drink} /> : null}
          </div>
        </section>

        <section id="beverage-feed">
          <div id="BeverageFeed">
            {drinks.length > 0 ? (
              <BeverageFeed data={drinks} setter={setDrinkWrapper} />
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
