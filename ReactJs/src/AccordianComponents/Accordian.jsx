import React, { useState } from "react";
import "./style.css";
import data from "./data";

function Accordian() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [multiselectionMode, setMultiSelectionMode] = useState(false);
  const [multipleSelectedItems, setMultipleSelectedItems] = useState([]);

  // Single Select
  function handleSingleSelect(currId) {
    setSelectedItem(currId === selectedItem ? null : currId);
  }

  function handleMultiSelect(currId) {
    let copyarr = [...multipleSelectedItems];
    const idx = copyarr.indexOf(currId);

    if (idx === -1) copyarr.push(currId);
    else copyarr.splice(idx, 1);

    setMultipleSelectedItems(copyarr);
  }

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <button
            className="enableBtn"
            onClick={() => setMultiSelectionMode(!multiselectionMode)}
          >
            {multiselectionMode === true ? (
              <span>Disable</span>
            ) : (
              <span>Enable</span>
            )}{" "}
            multiple selection
          </button>
          {data && data.length > 0 ? (
            data.map((dataItem, idx) => (
              <div
                className="Item"
                key={idx}
                onClick={
                  multiselectionMode === true
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleSelect(dataItem.id)
                }
              >
                <div className="title">
                  <h2> {dataItem.question} </h2>
                  <span>+</span>
                </div>
                {multiselectionMode === true ? (
                  multipleSelectedItems.includes(dataItem.id) ? (
                    <div> {dataItem.answer} </div>
                  ) : null
                ) : selectedItem === dataItem.id ? (
                  <div> {dataItem.answer} </div>
                ) : null}
              </div>
            ))
          ) : (
            <div> Data Not Found </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
