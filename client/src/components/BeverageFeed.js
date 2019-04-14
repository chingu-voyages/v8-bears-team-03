import React from "react";
import RatingStars from "./RatingStars";

function BeverageFeed(props) {
  const imagePrefix =
    "https://res.cloudinary.com/devbev/image/upload/c_scale,w_300/";

  return (
    <section id="beverage-feed">
      <div className="feed-box">
        <div className="feed-scroll">
          {props.drinks.map(entry => (
            <div className="feed-card" key={entry.name + entry._id}>
              <picture>
                <source
                  srcSet={imagePrefix + entry.image + ".webp"}
                  type="image/webp"
                />
                <source
                  srcSet={imagePrefix + entry.image + ".png"}
                  type="image/png"
                />
                <img
                  src={imagePrefix + entry.image + ".png"}
                  alt={entry.name}
                  className="feed-image"
                  onClick={() => {
                    props.changeDisplayCase(entry._id);
                  }}
                />
              </picture>
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
