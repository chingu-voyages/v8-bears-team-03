import React, { useState, useEffect } from "react";
import RatingStars from "./RatingStars";

function DisplayCase(props) {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drinks/" + props.drinkID)
      .then(resp => resp.json())
      .then(resp => setDrink(resp.drink));
  }, [props.drinkID, setDrink]);

  let drinkTypeInfo;
  switch (drink.type) {
    case "beer":
      drinkTypeInfo = (
        <div>
          <h4>Style:</h4>
          <p>{drink.style}</p>
          <h4>Source:</h4>
          <p>{drink.source}</p>
        </div>
      );
      break;
    case "coffee":
      drinkTypeInfo = (
        <div>
          <h4>Bean Type:</h4>
          <p>{drink.beanType}</p>
          <h4>Brew Time:</h4>
          <p>{drink.brewTime}</p>
          <h4>Strength:</h4>
          <p>{drink.strength}</p>
        </div>
      );
      break;
    case "tea":
      drinkTypeInfo = (
        <div>
          <h4>Leaf Type:</h4>
          <p>{drink.leafType}</p>
          <h4>Steep Time: </h4>
          <p>{drink.steepTime}</p>
        </div>
      );
      break;
    case "liquor":
      drinkTypeInfo = (
        <div>
          <h4>Type:</h4>
          <p>{drink.type}</p>
        </div>
      );
      break;
    default:
      drinkTypeInfo = "";
  }

  return (
    <div className="display-case-box">
      <img src={drink.image} alt={drink.name} />
      <div className="display-case-info">
        <h3>{drink.name}</h3>
        <div>{drinkTypeInfo}</div>

        <h4>Tasting Notes:</h4>
        <p>{drink.tastingNotes}</p>
        <p>{drink._id}</p>

        <h4>Comments:</h4>
        <p>{drink.comments}</p>

        <RatingStars rating={drink.rating} />
      </div>
    </div>
  );
}

export default DisplayCase;
