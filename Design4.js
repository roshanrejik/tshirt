import React from "react";
import { Design4_1, Design4_2, Design4_3 } from "./constant";

const Design4 = ({ borderColor, fontSize, fontColor, backgroundColor }) => {
  return (
    <div
      style={{
        width: "400px",
        margin: "10px",
        height: "500px",
        border: `3px solid  ${borderColor}`,
        backgroundColor: backgroundColor,
      }}
    >
      <svg
        style={{
          width: "350px",
          height: "500px",
        }}
      >
        {Design4_1(fontColor, "FEAR", fontSize)}
        {Design4_2(
          "https://www.mascotdb.com/sites/default/files/styles/large/public/logos/petoskey.png?itok=mm-F6GUu"
        )}
        {Design4_3(fontColor, "THE NORTHMEN")}
      </svg>
    </div>
  );
};

export default Design4;
