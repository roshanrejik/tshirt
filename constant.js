import ReactCurvedText from "react-curved-text";
export const Design4_1 = (fontColor, title, fontSize) => {
  return (
    <text
      x="50"
      y="111"
      font-weight="1960"
      font-family="system-ui"
      font-size={fontSize || "108"}
      text-align="center"
      fill={fontColor}
      stroke="red"
      stroke-width="8"
      paint-order="stroke"
    >
      {title}
    </text>
  );
};

export const Design4_2 = (url) => {
  return (
    <image
      x="75%"
      y="50%"
      width="110"
      height="220"
      opacity="1"
      transform="translate(-125, -125)"
      xlinkHref={url}
    />
  );
};

export const Design4_3 = (fontColor, subtitle) => {
  return (
    <ReactCurvedText
      width={370}
      height={3000}
      cx={190}
      cy={280}
      rx={100}
      ry={100}
      startOffset={20}
      text={subtitle}
      textProps={{
        style: { fontSize: 34, fontWeight: 900, fontFamily: "system-ui" },
      }}
      textPathProps={{ fill: fontColor }}
      tspanProps={{ dy: "20" }}
    />
  );
};
