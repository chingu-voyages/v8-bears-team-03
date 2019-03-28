import React, { useState, useEffect } from "react";
import RatingStars from "./RatingStars";

function BeverageFeed(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drinks" + props.filterType)
      .then(resp => resp.json())
      .then(resp => setDrinks(resp.drinks));
  }, [props.filterType, setDrinks]);

  return (
    <section id="beverage-feed">
      <div className="feed-box">
        <div className="feed-scroll">
          {drinks.map(entry => (
            <div className="feed-card" key={entry.name + entry._id}>
              <img
                className="feed-image"
                src={entry.image}
                alt={entry.name}
                onClick={() => {
                  props.changeDisplayCase(entry._id);
                }}
              />
              <div className="feed-info-box">
                <p className="feed-title">{entry.name}</p>
                <RatingStars rating={entry.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeverageFeed;
