import React, { useState, useEffect } from "react";
import Board from "./components/board";
import Selector from "./components/selector";
import styled from "styled-components";

function App() {
  const [pixels, setPixels] = useState(8);
  const [color, setColor] = useState("#2196f3");
  const [drawing, setDrawing] = useState(true);

  useEffect(() => {
    setDrawing(true);
  }, [drawing]);

  return (
    <Wrapper>
      <Selector
        setPixels={setPixels}
        color
        setColor={setColor}
        drawing
        setDrawing={setDrawing}
      />
      {drawing ? (
        <Board pixels={pixels} setPixels={setPixels} color={color} />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 40px;
  display: flex;
  gap: 20px;
`;

export default App;
