import React from "react";
import Pixel from "./Pixel";

function Row({ color, pixels }) {
  let Pixels = [];

  for (let i = 0; i < pixels; i++) {
    Pixels.push(<Pixel key={i} pixels={pixels} color={color} />);
  }
  return <div>{Pixels}</div>;
}

export default Row;
