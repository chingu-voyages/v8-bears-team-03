import React from "react";
import ReactDOM from "react-dom";
import RatingStars from "./RatingStars";
import DisplayCase from "./DisplayCase";

function BeverageFeed(props) {
  function toDisplayCase(id) {
    fetch("http://localhost:8000/drinks/" + id)
      .then(results => results.json())
      .then(data => {
        console.log(data.drink.type);
        ReactDOM.render(
          <DisplayCase data={data.drink} />,
          document.getElementById("DisplayCase")
        );
      });
  }

  return (
    <div className="feed-box">
      <div className="feed-scroll">
        {props.data.map(entry => (
          <div className="feed-card" key={entry.name + entry._id}>
            <img
              className="feed-image"
              src={entry.image}
              alt={entry.name}
              onClick={() => toDisplayCase(entry._id)}
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
