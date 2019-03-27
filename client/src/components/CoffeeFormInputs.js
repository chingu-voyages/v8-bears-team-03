import React, { useState } from "react";

function CoffeeFormInputs() {
  const [beanType, setBeanType] = useState();
  const [brewType, setBrewType] = useState();
  const [strength, setStrength] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Bean Type:
        <input
          name="beanType"
          value={beanType}
          placeholder="Arabica..."
          onChange={e => setBeanType(e.target.value)}
        />
      </label>
      <label>
        Brew Syle:
        <input
          name="brewType"
          value={brewType}
          placeholder="French Press..."
          onChange={e => setBrewType(e.target.value)}
        />
      </label>
      <label>
        Strength
        <input
          name="strength"
          value={strength}
          placeholder="Strong..."
          onChange={e => setStrength(e.target.value)}
        />
      </label>
    </div>
  );
}

export default CoffeeFormInputs;
