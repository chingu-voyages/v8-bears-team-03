import React from "react";
import RatingStars from "./RatingStars";
import feedData from "../testData/feedData";

function DisplayCase(props) {

  let drinkTypeInfo;
  switch (props.data.type) {
    case "beer":
      drinkTypeInfo = (
        <div>
          <h4>Style:</h4>
          <p>{props.data.style}</p>
          <h4>Source:</h4>
          <p>{props.data.source}</p>
        </div>
      );
      break;
    case "coffee":
      drinkTypeInfo = (
        <div>
          <h4>Bean Type:</h4>
          <p>{props.data.beanType}</p>
          <h4>Brew Time:</h4>
          <p>{props.data.brewTime}</p>
          <h4>Strength:</h4>
          <p>{props.data.strength}</p>
        </div>
      );
      break;
    case "tea":
      drinkTypeInfo = (
        <div>
          <h4>Leaf Type:</h4>
          <p>{props.data.leafType}</p>
          <h4>Steep Time: </h4>
          <p>{props.data.steepTime}</p>
        </div>
      );
      break;
    case "liquor":
      drinkTypeInfo = (
        <div>
          <h4>Type:</h4>
          <p>{props.data.type}</p>
        </div>
      );
      break;
    default:
      drinkTypeInfo = "";
  }

  return (
    <div className="display-case-box">
      <img src={props.data.image} alt={props.data.name} />
      <div className="display-case-info">
        <h3>{props.data.name}</h3>
        <div>{drinkTypeInfo}</div>
        <p>
          <h4>Tasting Notes:</h4>{props.data.tastingNotes}
        </p>
        <p>
          <h4>Comments:</h4>{props.data.comments}
        </p>
        <RatingStars rating={props.data.rating} />
      </div>
    </div>
  );
}

export default DisplayCase;
