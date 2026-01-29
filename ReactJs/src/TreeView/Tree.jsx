import React from "react";
import menus from "./data";
import Menulist from "./Menu-list";
import "./style.css";

function Tree() {
  return (
    <div className="container2">
      <div className="sideBar">
        <Menulist menus={menus} />
      </div>
    </div>
  );
}

export default Tree;
