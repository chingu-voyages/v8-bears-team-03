import React from "react";
import RatingStars from "./RatingStars";
import feedData from "../testData/feedData";

function DisplayCase(props) {
  props = feedData[0];
  let drinkTypeInfo;
  switch (props.type) {
    case "beer":
      drinkTypeInfo = (
        <div>
          <h4>Style:</h4>
          <p>{props.style}</p>
          <h4>Source:</h4>
          <p>{props.source}</p>
        </div>
      );
      break;
    case "coffee":
      drinkTypeInfo = (
        <div>
          <h4>Bean Type:</h4>
          <p>{props.beanType}</p>
          <h4>Brew Time:</h4>
          <p>{props.brewTime}</p>
          <h4>Strength:</h4>
          <p>{props.strength}</p>
        </div>
      );
      break;
    case "tea":
      drinkTypeInfo = (
        <div>
          <h4>Leaf Type:</h4>
          <p>{props.leaType}</p>
          <h4>Steep Time: </h4>
          <p>{props.steepTime}</p>
        </div>
      );
      break;
    case "liqour":
      drinkTypeInfo = (
        <div>
          <h4>Type:</h4>
          <p>{props.type}</p>
        </div>
      );
      break;
    default:
      drinkTypeInfo = "";
  }

  return (
    <div className="display-case-box">
      <img src={props.image} alt={props.name} />
      <div className="display-case-info">
        <h3>{props.name}</h3>
        <div>{drinkTypeInfo}</div>
        <p>
          <h4>Tasting Notes:</h4>{props.tastingNotes}
        </p>
        <p>
          <h4>Comments:</h4>{props.comments}
        </p>
        <RatingStars rating={props.rating} />
      </div>
    </div>
  );
}

export default DisplayCase;
