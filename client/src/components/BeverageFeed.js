import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import RatingStars from "./RatingStars";
import DisplayCase from "./DisplayCase";

function BeverageFeed(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drinks")
      .then(results => results.json())
      .then(data => {
        setDrinks(data.drinks);
      });
  }, []);

  const [drink, setDrink] = useState({});

  if (drink.name) {
    ReactDOM.render(
      <DisplayCase data={drink} />,
      document.getElementById("DisplayCase")
    );
  }

  return (
    <div className="feed-box">
      <div className="feed-scroll">
        {drinks.map(entry => (
          <div className="feed-card" key={entry.name + entry._id}>
            <img
              className="feed-image"
              src={entry.image}
              alt={entry.name}
              onClick={() => setDrink(entry)}
            />
            <div className="feed-info-box">
              <p className="feed-title">{entry.name}</p>
              <RatingStars rating={entry.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeverageFeed;
