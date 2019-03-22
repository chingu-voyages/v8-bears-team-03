import React, { useEffect, useState } from "react";
import feedData from "../testData/feedData";
import RatingStars from "./RatingStars";

function BeverageFeed() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/drinks')
      .then(results => results.json())
      .then(data => {
        setData(data.drink);
      });
  }, []);

  return (
    <div className="feed-box">
      <div className="feed-scroll">
        {data.map(entry => (
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
