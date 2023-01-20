import styled from "styled-components";
import { CirclePicker } from "react-color";

function Selector({ setPixels, color, setColor, drawing, setDrawing }) {
  return (
    <Wrapper>
      <h2>pixels</h2>
      <div className="dimentions">
        <h3>Select Dimentions:</h3>
        <button onClick={() => setPixels(8)}>8x8</button>
        <button onClick={() => setPixels(12)}>12x12</button>
        <button onClick={() => setPixels(16)}>16x16</button>
        <button onClick={() => setPixels(32)}>32x32</button>
      </div>
      <CirclePicker
        color={color}
        onChange={(color) => {
          setColor(color.hex);
        }}
      />
      <button onClick={() => setDrawing(!drawing)}>reset</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 2px solid white;
  border-radius: 20px;
  padding: 2rem;
  background: #2c5364;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    margin: 0;
    text-transform: uppercase;
    width: min-content;
    font-size: 2rem;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 20%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dimentions > button {
    border-radius: 5px;
    margin-right: 5px;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }
  .tools > button {
    height: 40px;
    width: 40px;
    background: blue;
    margin-right: 1rem;
  }
`;

export default Selector;
