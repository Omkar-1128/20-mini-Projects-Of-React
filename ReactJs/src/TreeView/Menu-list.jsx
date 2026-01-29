import React from "react";
import Menuitem from "./Menu-item";

function Menulist({ menus = [] }) {

  return (
    <div>
      {menus &&
        menus.length &&
        menus.map((Item, idx) => {
          return <ul key={idx}>< Menuitem item={Item}/></ul>;
        })}
    </div>
  );
}

export default Menulist;
