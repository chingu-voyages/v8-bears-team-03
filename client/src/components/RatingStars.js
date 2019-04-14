import React from "react";

function RatingStars(props) {
  let stars = [];
  let starKey = 0;
  while (stars.length < props.rating) {
    stars.push(<i className="fas fa-star" key={starKey} />);
    starKey += 1;
  }
  while (stars.length < 5) {
    stars.push(<i className="far fa-star" key={starKey} />);
    starKey += 1;
  }

  return (
    <p className="feed-rating" key={props.rating + 1}>
      {stars}
    </p>
  );
}

export default RatingStars;
