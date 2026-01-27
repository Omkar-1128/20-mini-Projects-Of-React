import React, { useEffect, useState } from "react";
import "./style.css";
import { BeatLoader } from "react-spinners";
import { Toaster, toast } from "sonner";

function LoadData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const disableLoadMore = (count + 1) * 20 >= 100;

  if (disableLoadMore) {
    toast("You Reach The Limit");
  }

  // Fetch Data From API
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const jsonRes = await res.json();
      setData([...jsonRes.products]);
      setLoading(false);
    } catch (e) {
      console.log("Error occur during fetchinf the data, Error: " + e);
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [count]);

  function handleLoadMore() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <Toaster position="bottom-center"/>
      {loading && <BeatLoader />}
      <div className="data-container">
        {data &&
          data.length != 0 &&
          data.map((product) => {
            return (
              <div key={product.id}>
                <div className="product">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-details">
                  <p>{product.title}</p>
                </div>
              </div>
            );
          })}
        <div className="LoadMoreData" onClick={handleLoadMore}>
          <button disabled={disableLoadMore}>load more</button>
        </div>
      </div>
    </div>
  );
}

export default LoadData;
