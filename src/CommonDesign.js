import { bgStyle, fontTemplate } from "./constants";

export const CommonDesign = (props) => {
  return (
    <div
      style={{
        ...bgStyle,
        // width: "150px",
        // height: "200px",
      }}
    >
      <div
        style={{
          fontSize: fontTemplate.medium.titleSize,
          paddingBottom: "8px",
        }}
      >
        TEXAS
      </div>
      <img
        width={fontTemplate.medium.imageWidth}
        height={fontTemplate.medium.imageHeight}
        alt="img"
        src={
          "https://www.mascotdb.com/sites/default/files/styles/large/public/logos/petoskey.png?itok=mm-F6GUu"
        }
      />
      <div
        style={{
          fontSize: fontTemplate.medium.titleSize,
          color: "#FF9800",
          padding: "8px 0px",
        }}
      >
        NM
      </div>
    </div>
  );
};
