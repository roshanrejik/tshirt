import React, { useState } from "react";
import Design from "./Design";
const App = () => {
  const [type, setType] = useState("large");

  return (
    <div>
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Design
          borderColor="#FA6800"
          backgroundColor="#ffdb9a"
          fontColor="#000058"
          type={type}
        />
        <Design
          borderColor="#b6b6b6"
          backgroundColor="#ededed"
          fontColor="#000000"
          type={type}
        />
        <Design
          borderColor="#00008b"
          backgroundColor="#000058"
          fontColor="#ffffff"
          type={type}
        />
        <Design
          borderColor="#000000"
          backgroundColor="#262626"
          fontColor="#ffffff"
          type={type}
        />
      </div>
    </div>
  );
};

export default App;
