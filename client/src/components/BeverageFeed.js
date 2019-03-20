import React from "react";
import feedData from "../testData/feedData";
import RatingStars from "./RatingStars";

function BeverageFeed() {
  return (
    <div className="feed-box">
      <div className="feed-scroll">
        {feedData.map(entry => (
          <div className="feed-card">
            <img className="feed-image" src={entry.image} alt={entry.name} />
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
