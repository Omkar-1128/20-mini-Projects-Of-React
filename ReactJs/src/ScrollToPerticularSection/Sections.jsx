import React, { useRef, useState } from "react";
import "./style.css";

function Sections() {
  const ref = useRef(null);
  const [sectionNumber, setSectionNumber] = useState(0);

  const data = [
    {
      label: "First Section",
      style: {
        textAlign: "center",
        background: "#2563EB",
        height: "700px",
        width: "100%",
      },
    },
    {
      label: "Second Section",
      style: {
        textAlign: "center",
        background: "#10B981",
        height: "700px",
        width: "100%",
      },
    },
    {
      label: "Third Section",
      style: {
        textAlign: "center",
        background: "#F59E0B",
        height: "700px",
        width: "100%",
      },
    },
    {
      label: "Fourth Section",
      style: {
        textAlign: "center",
        background: "#8B5CF6",
        height: "700px",
        width: "100%",
      },
    },
    {
      label: "Fifth Section",
      style: {
        textAlign: "center",
        background: "#F43F5E",
        height: "700px",
        width: "100%",
      },
    },
  ];

  function handleTopSection(e) {
    e.preventDefault();

    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div style={{ height: "100vh", overflow: "auto", marginTop: "25px" }}>
      <div className="input-container">
        <form onSubmit={handleTopSection}>
          <input
            type="number"
            placeholder="Enter Section Number"
            value={sectionNumber}
            onChange={(e) => {
              setSectionNumber(e.target.value);
            }}
          />
          <button type="submit">Scroll To Section</button>
        </form>
      </div>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                style={item.style}
                ref={index === sectionNumber - 1 ? ref : null}
              >
                <h2>{item.label}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Sections;
