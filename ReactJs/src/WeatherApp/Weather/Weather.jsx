import React, { useState } from "react";
import Search from "../Search/Search";
import "./style.css";

function Weather() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(query);

    try {
      setLoading(true);
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_API_KEY}`,
      );
      let jsonRes = await res.json();
      setData(jsonRes);
      console.log(jsonRes);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error Occured:- " + e);
    }
  }

  //   (temp - 273.15).toFixed(2)

  return (
    <div className="container">
      <div className="Weather-Container">
        {loading ? (
          <h1>Loading Please Wait</h1>
        ) : (
          <div>
            <Search
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSubmit}
            />
            {data && (
              <div className="Weather-Content">
                <p className="cityName">{data && data.name}</p>
                <p className="date">{formattedDate}</p>
                <h1 className="temp">
                  {data && data.main && (data.main.temp - 273.15).toFixed(2)}{" "}
                  &deg;C
                </h1>
                <p className="cloud">
                  {data && data.weather[0] && data.weather[0].description}
                </p>
                <div className="row">
                  <div className="col">
                    <div className="values">
                      {data && data.wind && data.wind.speed}
                    </div>
                    <div className="property">Wind Speed</div>
                  </div>
                  <div className="col">
                    <div className="values">
                      {data && data.main && data.main.humidity}
                    </div>
                    <div className="property">Humidity</div>
                  </div>
                  <div className="col">
                    <div className="values">
                      {data && data.main && data.main.pressure}
                    </div>
                    <div className="property">Pressure</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
