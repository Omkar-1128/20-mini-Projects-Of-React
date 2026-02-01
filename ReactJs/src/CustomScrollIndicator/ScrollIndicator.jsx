import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import "./style.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const jsonres = await res.json();
      setData(jsonres.products);

      setLoading(false);
    } catch (e) {
      console.log("Error occured during fetching the data, Error: ", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => await fetchData(url))();
  }, [url]);

  function handleScroll(e) {
    const scrollTop = e.target.scrollTop; //  Total Scroll From the top

    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;
    const maxScroll = scrollHeight - clientHeight; // Total Height of scroll
    setScrollPercent((scrollTop / maxScroll) * 100);
    // console.log(scrollPercent);
  }

  return (
    <div className="scrollContainer" onScroll={handleScroll}>
      {loading ? (
        <BeatLoader />
      ) : (
        <div>
          <div className="scrollHeader">
            <h2>Custom Scroll Indicator</h2>
            <div>
              <div
                style={{
                  width: `${scrollPercent}%`,
                  backgroundColor: "#492828",
                  height: "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="ScrollContent">
            {data.map((product) => {
              return (
                <div key={product.id}>
                  <p>{product.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrollIndicator;
