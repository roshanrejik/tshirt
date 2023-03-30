import ReactCurvedText from "react-curved-text";
import { fontTemplate } from "./constants";

const Design3 = ({ fontColor, subtitle, type }) => {
  return (
    <ReactCurvedText
      width={470}
      height={3000}
      cx={179}
      cy={180}
      rx={100}
      ry={100}
      startOffset={8}
      text={subtitle}
      textProps={{
        style: {
          fontSize: fontTemplate[type].subTitle || 34,
          fontFamily: "system-ui",
          fontWeight: 900,
        },
      }}
      textPathProps={{ fill: fontColor }}
      tspanProps={{ dy: "20" }}
    />
  );
};
export default Design3;
