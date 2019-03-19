import React from "react";

function RatingStars(props){
    let stars = [];
    while(stars.length < props.rating){
        stars.push(<i className="fas fa-star"></i>)
    }
    while(stars.length < 5){
        stars.push(<i class="far fa-star"></i>)
    }

    return(
        <p className="feed-rating">{stars}</p>
    )
}

export default RatingStars 