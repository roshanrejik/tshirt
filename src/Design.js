import React from "react";
import { bgStyle } from "./constants";
import Design1 from "./Design1";
import Design2 from "./Design2";
import Design3 from "./Design3";

const Design = ({ borderColor, type, fontColor, backgroundColor }) => {
  return (
    <div
      style={{
        width: "400px",
        margin: "10px",
        height: "500px",
        border: `3px solid  ${borderColor}`,
        backgroundColor: backgroundColor,
        ...bgStyle[type],
      }}
    >
      <svg
        style={{
          width: "350px",
          height: "500px",
        }}
      >
        <Design1 fontColor={fontColor} title="FEAR" type={type} />
        <Design2
          url="https://www.mascotdb.com/sites/default/files/styles/large/public/logos/petoskey.png?itok=mm-F6GUu"
          type={type}
        />
        <Design3 fontColor={fontColor} subtitle="THE NORTHMEN" type={type} />
      </svg>
    </div>
  );
};

export default Design;
