import React from "react";
import RatingStars from "./RatingStars";

function BeverageFeed(props) {
  return (
    <div className="feed-box">
      <div className="feed-scroll">
        {props.data.map(entry => (
          <div className="feed-card" key={entry.name + entry._id}>
            <img
              className="feed-image"
              src={entry.image}
              alt={entry.name}
              onClick={() => props.setter(entry)}
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
