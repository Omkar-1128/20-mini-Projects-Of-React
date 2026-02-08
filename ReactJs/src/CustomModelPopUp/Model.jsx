import React, { useState } from "react";
import "./style.css";

function Model({ header, body, footer }) {
  const [modelOpened, setModelOpened] = useState(false);

  function handleModel() {
    setModelOpened(!modelOpened);
  }

  function handleCloseModel() {
    setModelOpened(false);
  }

  return (
    <div className="container">
      {!modelOpened && <button onClick={handleModel}>Open Model</button>}
      {modelOpened && (
        <div className="modelPageContainer">
          <div className="modelcontainer">
            <div className="modelHeader">{header}</div>
            <div className="modelBody">{body}</div>
            <div className="modelFooter">{footer}</div>

            <div className="ModelCrossButton">
              <button onClick={handleCloseModel}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
