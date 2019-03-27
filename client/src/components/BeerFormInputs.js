import React, { useState } from "react";

function BeerFormInputs() {
  const [style, setStyle] = useState();
  const [source, setSource] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Style:
        <input
          name="style"
          value={style}
          placeholder="IPA..."
          onChange={e => setStyle(e.target.value)}
        />
      </label>
      <label>
        Brewery
        <input
          name="source"
          value={source}
          placeholder="New Holland..."
          onChange={e => setSource(e.target.value)}
        />
      </label>
    </div>
  );
}

export default BeerFormInputs
