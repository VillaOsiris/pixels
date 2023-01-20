import { useRef } from "react";
import styled from "styled-components";
import Row from "./row";
import { exportComponentAsPNG } from "react-component-export-image";

function Board({ pixels, color }) {
  const ref = useRef();

  let Rows = [];

  for (let i = 0; i < pixels; i++) {
    Rows.push(<Row key={i} pixels={pixels} color={color} />);
  }

  return (
    <Wrapper>
      <div
        className="grid"
        style={{ "grid-template-columns": `repeat(${pixels}, 15px)` }}
        ref={ref}
      >
        {Rows}
      </div>
      <button onClick={() => exportComponentAsPNG(ref)}>Download as PNG</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 2px solid white;
  border-radius: 20px;
  padding: 2%;
  height: 500px;
  width: 500px;

  .grid {
    display: grid;
  }
`;

export default Board;
