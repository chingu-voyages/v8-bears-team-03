import React, { useState } from "react";

function SearchDrinks(props) {
  const [searchValue, setSearchValue] = useState();

  return (
    <form id="searchBar">
      <label>
        <input
          type="text"
          name="searchValue"
          value={searchValue}
          placeholder="search drinks"
          onChange={e => setSearchValue(e.target.value)}
        />
      </label>
      <button type="submit" id="searchDrinkSubmit">GO!</button>
    </form>
  );
}

export default SearchDrinks;
