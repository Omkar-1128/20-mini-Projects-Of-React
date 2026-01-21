import React, { useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState("Hex");
  let [color, setColor] = useState("black");

  // Generate random number of some length
  function generateColorColor(Length) {
    return Math.floor(Math.random() * Length);
  }

  function HandleHexColorChange() {
    const colorValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      hexColor += colorValues[generateColorColor(colorValues.length)];
    }
    setColor(hexColor);
  }

  function HandleRGBColorChange() {
    let r = generateColorColor(256);
    let g = generateColorColor(256);
    let b = generateColorColor(256);

    setColor(r + "," + g + "," + b)
  }

  const style = {
    background: colorType === "Hex"? "#" + color : `RGB(${color})`,
  };
  return (
    <div className="colorBox" style={style}>
      <div
        style={{
          color: "white",
          marginBottom: "100px",
        }}
      >
        {colorType == "Hex" ? <h1>#{color}</h1> : <h1>RGB({color})</h1>}
      </div>

      <div className="colorButtons">
        <button onClick={() => setColorType("Hex")}>Hex color</button>
        <button onClick={() => setColorType("RGB")}>RGB color</button>
      </div>
      <div className="generateColor">
        <button
          onClick={
            colorType == "Hex"
              ? HandleHexColorChange
              : () => HandleRGBColorChange()
          }
        >
          Generate Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
