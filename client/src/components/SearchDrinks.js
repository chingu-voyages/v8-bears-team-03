import React, { useState } from "react";

function SearchDrinks(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form id="searchBar" onSubmit={handleSubmit}>
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
