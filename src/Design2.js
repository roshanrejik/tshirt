import { fontTemplate } from "./constants";

const Design2 = ({ url, type }) => {
  return (
    <image
      x="75%"
      y="70%"
      width={fontTemplate[type].imageWidth}
      height={fontTemplate[type].imageHeight}
      opacity="1"
      transform="translate(-125, -125)"
      xlinkHref={url}
    />
  );
};

export default Design2;
