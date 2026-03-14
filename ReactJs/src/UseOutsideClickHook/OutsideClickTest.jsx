import React, { useRef, useState } from "react";
import OutsideClickHook from "./OutsideClickHook";

function OutsideClickTest() {
  const [OutsideClick, setOutSideClick] = useState(false);
  let ref = useRef();

  OutsideClickHook(ref , () => setOutSideClick(false));
    
  return (
    <div className="container">
      {OutsideClick ? (
        <div ref={ref}>
          <h1>This Is Lightning Ace</h1>
          <h2>To Close This Please click Anywhere Outside.</h2>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={() => setOutSideClick(true)}>show Content</button>{" "}
        </div>
      )}
    </div>
  );
}

export default OutsideClickTest;
