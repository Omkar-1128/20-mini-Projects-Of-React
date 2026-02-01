import React, { useState } from "react";
import "./style.css";

function Tabs({ tabs = [] }) {
  const [currTabIdx, setCurrTabIdx] = useState(0);

  function handleTabContent(index) {
    setCurrTabIdx(index);
  }

  return (
    <div className="container">
        <div className="tabContainer">
          {tabs.map((tab, index) => (
            <div
              className={`TabLabel ${index === currTabIdx? "activeTab": ""}`}
              key={index}
              onClick={() => handleTabContent(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      <div className="tabContent">
        {tabs[currTabIdx] && tabs[currTabIdx].content}
      </div>
    </div>
  );
}

export default Tabs;
