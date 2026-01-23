import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./rating.css"

function Rating() {
  const [hover , setHover] = useState(0);
  const [currRate , setCurrRate] = useState(0);

    function handleRating(currIdx) {
        setCurrRate(currIdx + 1)
    }

    function handleMouseEnter(currIdx) {
        setHover(currIdx + 1)
    }

    function handleMouseLeave() {
        setHover(0);
    }

  return (
    <div>
      <div className="container">
        <h1>{currRate}</h1>
        <div className="stars">
          {[...Array(10)].map((star, idx) => {
            return (
                <div className={`star ${idx + 1 <= (hover || currRate)? 'rate': null }`} key={idx} onClick={() => handleRating(idx)} onMouseEnter={() => handleMouseEnter(idx)} onMouseLeave={() => handleMouseLeave()}>
                  <StarRateIcon />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rating;
