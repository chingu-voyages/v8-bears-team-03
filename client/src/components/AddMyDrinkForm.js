import React, { useState } from "react";
import BeerFormInputs from "./BeerFormInputs";
import CoffeeFormInputs from "./CoffeeFormInputs";
import TeaFormInputs from "./TeaFormInputs";
import LiquorFormInputs from "./LiquorFormInputs";

function AddMyDrinkForm(props) {
  const [type, setType] = useState("beer");
  const [name, setName] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState();
  const [image, setImage] = useState(
    "https://drive.google.com/uc?id=1vGeUvc38RHMWKTjcAtZb6JFXkBmKRP8p"
  );

  function handleFile(e) {
    const file = e.target.files[0];
    const imageType = /image.*/;

    if (file.type.match(imageType)) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please choose an accepted image file.");
    }
  }

  return (
    <form>
      <div id="form-picture">
        <label>
          Upload Image
          <input type="file" id="imageFile" onChange={e => handleFile(e)} />
        </label>
        <img src={image} id="upload-image" alt="Upload File" />
      </div>

      <div id="form-text">
        <div id="form-general-info">
          <label>
            What Type of Drink:
            <select
              name="type"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="beer">Beer</option>
              <option value="coffee">Coffee</option>
              <option value="liquor">Liquor</option>
              <option value="tea">Tea</option>
            </select>
          </label>

          <label>
            Name of Drink:
            <input
              name="name"
              value={name}
              placeholder="Dragon's Milk..."
              onChange={e => setName(e.target.value)}
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
      </div>
    </form>
  );
}

export default AddMyDrinkForm;
