import React from "react";
import UseFetch from "./UseFetch";
import "./style.css"

function TestHook() {
  const [data, error, loading] = UseFetch("https://dummyjson.com/products", {});

  return (
    <div className="Hook-contanier">
      <h1>Use Fetch Custom Hook</h1>

      {loading ? <h1>Loading</h1> : null}
      {error ? <h1>{error}</h1> : null}

      {data &&
        data.products &&
        data.products.length &&
        data.products.map((product) => {
          return <h3 key={product.id}>{product.title}</h3>;
        })}
    </div>
  );
}

export default TestHook;
