import React, { useState } from "react";
import BeerFormInputs from "./BeerFormInputs";
import CoffeeFormInputs from "./CoffeeFormInputs";
import TeaFormInputs from "./TeaFormInputs";
import LiquorFormInputs from "./LiquorFormInputs";

function AddMyDrinkForm(props) {
  const placeholder = require("../images/upload_placeholder_300x300.png");
  const [type, setType] = useState("beer");
  const [name, setName] = useState();
  const [tastingNotes, setTastingNotes] = useState();
  const [comments, setComments] = useState();
  const [rating, setRating] = useState();
  const [imageRef, setImageRef] = useState();
  const [primaryImage, setPrimaryImage] = useState(placeholder);
  const [fallbackImage, setFallbackImage] = useState(placeholder);

  function resetForm() {
    setType("beer");
    setName("");
    setTastingNotes("");
    setComments("");
    setRating(1);
    setImageRef("");
    setPrimaryImage(placeholder);
    setFallbackImage(placeholder);
    props.refreshAllDrinks();
    props.addDrinkForm();
  }

  function showUploadWidget() {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "devbev",
        uploadPreset: "addBeveragePreset",
        sources: ["local", "url", "camera"],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        croppingCoordinatesMode: "custom",
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#464040",
            sourceBg: "#292222",
            windowBorder: "#c7a49f",
            tabIcon: "#cc6600",
            inactiveTabIcon: "#E8D5BB",
            menuIcons: "#ebe5db",
            link: "#ffb107",
            action: "#ffcc00",
            inProgress: "#99cccc",
            complete: "#78b3b4",
            error: "#ff6666",
            textDark: "#4C2F1A",
            textLight: "#D8CFCF"
          },
          fonts: {
            default: null,
            "'Merriweather', serif": {
              url: "https://fonts.googleapis.com/css?family=Merriweather",
              active: true
            }
          }
        }
      },
      (err, info) => {
        if (err) {
          console.log(err);
        }
        if (info.event === "success") {
          // console.log(info);
          setPrimaryImage(info.info.eager[0].url);
          setFallbackImage(info.info.eager[1].url);
          setImageRef("v" + info.info.version + "/" + info.info.public_id);
          // console.log(imageRef);
        }
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let drinkData = {};
    for (var [key, value] of data.entries()) {
      drinkData[key] = value;
    }

    fetch(`${process.env.REACT_APP_DEV_API_URL}/drinks/`, {
      method: "POST",
      body: JSON.stringify(drinkData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));

    resetForm();
  }

  return (
    <form id="drinkInputForm" onSubmit={handleSubmit}>
      <div id="form-picture">
        <picture onClick={showUploadWidget}>
          <source srcSet={primaryImage} type="image/webp" />
          <source srcSet={fallbackImage} type="image/png" />
          <img src={fallbackImage} alt="your upload" />
        </picture>
      </div>

      <div id="form-text">
        <div id="form-general-info">
          <label htmlFor="type">
            Type:
            <select
              name="type"
              value={type}
              onChange={e => setType(e.target.value)}
              // required
            >
              <option value="beer">Beer</option>
              <option value="coffee">Coffee</option>
              <option value="liquor">Liquor</option>
              <option value="tea">Tea</option>
            </select>
          </label>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Dragon's Milk..."
              onChange={e => setName(e.target.value)}
              // required
            />
          </label>

          <label>
            Tasting Notes:
            <textarea
              name="tastingNotes"
              value={tastingNotes}
              placeholder="Fruity with a hint of wet cement..."
              onChange={e => setTastingNotes(e.target.value)}
            />
          </label>

          <label>
            Comments:
            <textarea
              name="comments"
              value={comments}
              placeholder="Additional comments..."
              onChange={e => setComments(e.target.value)}
            />
          </label>
          <label>
            Rating:
            <select
              name="rating"
              value={rating}
              onChange={e => setRating(e.target.value)}
              // required
            >
              <option value={1}>1/5</option>
              <option value={2}>2/5</option>
              <option value={3}>3/5</option>
              <option value={4}>4/5</option>
              <option value={5}>5/5</option>
            </select>
          </label>
        </div>

        {type === "beer" ? <BeerFormInputs /> : null}
        {type === "coffee" ? <CoffeeFormInputs /> : null}
        {type === "tea" ? <TeaFormInputs /> : null}
        {type === "liquor" ? <LiquorFormInputs /> : null}

        <label>
          <input
            type="hidden"
            name="image"
            value={imageRef}
            onChange={e => setImageRef(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" id="addDrinkSubmit">Submit</button>
      <span id="close-modal" onClick={() => props.addDrinkForm()}>
        X
      </span>
    </form>
  );
}

export default AddMyDrinkForm;
