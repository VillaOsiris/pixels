import React, { useState } from "react";
import styled from "styled-components";

function Pixel({ color }) {
  const [pixelColor, setPixelColor] = useState("#f6edc6");
  const [oldColor, setOldColor] = useState(color);
  const [changing, setChanging] = useState(true);

  function pickColor() {
    setPixelColor(color);
    setChanging(false);
  }
  function colorHover() {
    setOldColor(pixelColor);
    setPixelColor(color);
  }
  function reset() {
    if (changing) {
      setPixelColor(oldColor);
    }
    setChanging(true);
  }

  return (
    <Wrapper
      style={{ background: pixelColor }}
      onClick={pickColor}
      onMouseEnter={colorHover}
      onMouseLeave={reset}
    ></Wrapper>
  );
}

const Wrapper = styled.section`
  width: 15px;
  height: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export default Pixel;
