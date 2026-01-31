import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="scrollContainer">
      {loading ? (
        <BeatLoader />
      ) : (
        <div>
          {" "}
          <h2>Custom Scroll Indicator</h2>
          <div>
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
