import React, { useState } from "react";

function SearchDrinks(props) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form id="searchBar">
      <label>
        <input
          type="text"
          name="searchValue"
          value={searchValue}
          placeholder="Get a drink..."
          onChange={e => setSearchValue(e.target.value)}
        />
      </label>
      <button
        type="submit"
        id="searchDrinkSubmit"
        onClick={e => {
          e.preventDefault();
          props.searchDrinks(searchValue);
        }}
      >
        GO!
      </button>
    </form>
  );
}

export default SearchDrinks;
