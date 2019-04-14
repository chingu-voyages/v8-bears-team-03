import React, { useState } from "react";

function TeaFormInputs() {
  const [leafType, setLeafType] = useState();
  const [steepTime, setSteepTime] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Leaf Type:
        <input
          type="text"
          name="leafType"
          value={leafType}
          placeholder="Red..."
          onChange={e => setLeafType(e.target.value)}
        />
      </label>
      <label>
        Steep Time: (Number)
        <input
          type="number"
          name="steepTime"
          value={steepTime}
          placeholder="Number of Minutes..."
          onChange={e => setSteepTime(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TeaFormInputs;
