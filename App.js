import React from "react";
import "typeface-open-sans";
import Design4 from "./Designs/Design4";
const logo =
  "https://www.mascotdb.com/sites/default/files/styles/large/public/logos/petoskey.png?itok=mm-F6GUu";
const App = () => {
  const fontTemplate = {
    large: {
      titleSize: "54px",
      imageWidth: "40px",
      imageHeight: "60px",
      subTitle: "38px",
    },
    medium: {
      titleSize: "34px",
      imageWidth: "20px",
      imageHeight: "40px",
      subTitle: "18px",
    },
    small: {
      titleSize: "24px",
      imageWidth: "10px",
      imageHeight: "20px",
      subTitle: "14px",
    },
  };
  const bgStyle = {
    backgroundColor: "black",
    border: "1px solid #ddd",
    width: "300px",
    height: "350px",
    fontFamily: "'Luckiest Guy', cursive",
    fontSize: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FF9800",
    justifyContent: "center",
    padding: "5px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Design4
        borderColor="#FA6800"
        backgroundColor="#ffdb9a"
        fontColor="#000058"
        fontSize="54px"
      />
      <Design4
        borderColor="#b6b6b6"
        backgroundColor="#ededed"
        fontColor="#000000"
      />
      <Design4
        borderColor="#00008b"
        backgroundColor="#000058"
        fontColor="#ffffff"
      />
      <Design4
        borderColor="#000000"
        backgroundColor="#262626"
        fontColor="#ffffff"
      />
      <div
        style={{
          ...bgStyle,
          // width: "150px",
          // height: "200px",
        }}
      >
        <div
          style={{
            fontSize: fontTemplate.large.titleSize,
            paddingBottom: "8px",
          }}
        >
          TEXAS
        </div>
        <img
          width={fontTemplate.large.imageWidth}
          height={fontTemplate.large.imageHeight}
          alt="img"
          src={logo}
        />
        <div
          style={{
            fontSize: fontTemplate.large.titleSize,
            color: "#FF9800",
            padding: "8px 0px",
          }}
        >
          NM
        </div>
      </div>
    </div>
  );
};

export default App;
