import React from "react";

function RatingStars(props) {
  let stars = [];
  while (stars.length < props.rating) {
    stars.push(<i className="fas fa-star" />);
  }
  while (stars.length < 5) {
    stars.push(<i className="far fa-star" />);
  }

  return <p className="feed-rating">{stars}</p>;
}

export default RatingStars;
