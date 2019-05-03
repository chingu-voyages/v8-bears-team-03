import React, { useState } from "react";

function CoffeeFormInputs() {
  const [beanType, setBeanType] = useState();
  const [brewTime, setBrewTime] = useState();
  const [strength, setStrength] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Bean Type:
        <input
          type="text"
          name="beanType"
          value={beanType}
          placeholder="Arabica..."
          onChange={e => setBeanType(e.target.value)}
        />
      </label>
      <label>
        Brew Time:
        <input
          type="number"
          name="brewTime"
          value={brewTime}
          placeholder="Number of Minutes..."
          onChange={e => setBrewTime(e.target.value)}
        />
      </label>
      <label>
        Strength:
        <input
          type="number"
          name="strength"
          value={strength}
          placeholder="1 (weak) to 10 (strong)..."
          onChange={e => setStrength(e.target.value)}
        />
      </label>
    </div>
  );
}

export default CoffeeFormInputs;
