import React, { useState } from "react";

function TeaFormInputs() {
  const [leafType, setLeafType] = useState();
  const [steepTime, setSteepTime] = useState();

  return (
    <div id="form-drink-specific-info">
      <label>
        Leaf Type:
        <input
          name="leafType"
          value={leafType}
          placeholder="Red..."
          onChange={e => setLeafType(e.target.value)}
        />
      </label>
      <label>
        Steep Time:
        <input
          name="steeptime"
          value={steepTime}
          placeholder="5 Minutes..."
          onChange={e => setSteepTime(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TeaFormInputs;
