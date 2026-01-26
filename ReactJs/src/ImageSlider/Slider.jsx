import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import "./Slider.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CircleIcon from "@mui/icons-material/Circle";

function Slider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currImage, setCurrImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [autoSliding, setAutoSliding] = useState(false);

  // Fetch data from url
  useEffect(() => {
    async function getImages() {
      try {
        setLoading(true);
        const res = await fetch(`${url}?page=${page}&limit=${limit}`);
        const jsonRes = await res.json();
        setImages(jsonRes);

        setLoading(false);
      } catch (e) {
        console.log("Error occured during fetching the images. Error: " + e);
        setLoading(false);
      }
    }

    getImages();
  }, [url, page, limit]);

  // Handle next
  function HandleNext() {
    setCurrImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  // Handle Previous
  function HandlePrev() {
    setCurrImage(currImage === 0 ? images.length - 1 : currImage - 1);
  }

  // Handle Dot Click
  function handleDot(currIdx) {
    setCurrImage(currIdx);
  }

  // autoSliding
  useEffect(() => {
    if (!autoSliding || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [autoSliding, images.length]);

  function handleAutoSliding() {
    setAutoSliding(!autoSliding);
    console.log(autoSliding);
  }

  return (
    <div className="container">
      <button className="autoBtn" onClick={handleAutoSliding}>
        Auto Sliding : {autoSliding ? <span>On</span> : <span>Off</span>}
      </button>
      <div className="imageBox">
        {loading ? (
          <BeatLoader />
        ) : (
          <>
            <div className="imageSlider">
              <div className="sliderWrapper">
                <div
                  className="sliderTrack"
                  style={{ transform: `translateX(-${currImage * 600}px)` }}
                >
                  {images.map((image, idx) => (
                    <img
                      key={idx}
                      className="image"
                      src={image.download_url}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              <div className="circleDots">
                {images.map((_, idx) => {
                  return (
                    <div
                      onClick={() => handleDot(idx)}
                      key={idx}
                      className={idx === currImage ? "darkDot" : "lightDot"}
                    >
                      <CircleIcon />
                    </div>
                  );
                })}
              </div>
              <button onClick={HandlePrev} className="leftArrow">
                <ArrowCircleLeftIcon />
              </button>
              <button onClick={HandleNext} className="rightArrow">
                <ArrowCircleRightIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Slider;
