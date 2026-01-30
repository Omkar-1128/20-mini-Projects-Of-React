import React, { useState } from "react";
import Menulist from "./Menu-list";
import "./style.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Menuitem({ item = {} }) {
  const [currDisplayChildren, setCurrDisplayChildren] = useState({});

  function HandleTreeChildren(currLabel) {
    setCurrDisplayChildren((prev) => ({
      ...prev,
      [currLabel]: !currDisplayChildren[currLabel],
    }));
  }

  return (
    <div>
      {item && (
        <>
          <li className="TreeItem">
            <span className="TreeLabel">{item.label}</span>
            <span>
              {item.children && (
                <span className="TreePlusIcon" onClick={() => HandleTreeChildren(item.label)}>
                  {currDisplayChildren[item.label]? <RemoveIcon />: <AddIcon />}
                  </span>
              )}
            </span>
          </li>
          {item.children && currDisplayChildren[item.label] && <Menulist menus={item.children} />}
        </>
      )}
    </div>
  );
}

export default Menuitem;
