import { fontTemplate } from "./constants";

const Design1 = ({ fontColor, title, type }) => {
  return (
    <text
      x="35%"
      y="25%"
      font-weight="1960"
      font-family="system-ui"
      font-size={fontTemplate[type].titleSize || "108"}
      text-align="center"
      fill={fontColor}
      stroke="red"
      stroke-width="8"
      paint-order="stroke"
      paddingBottom="8px"
    >
      {title}
    </text>
  );
};
export default Design1;
