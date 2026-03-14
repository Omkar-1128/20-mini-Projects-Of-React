import React, { useLayoutEffect, useState } from "react";

function WindowResizeHook() {
  const [WindowDimentions, SetWindowDimentions] = useState({
    height: 0,
    width: 0,
  });

  function handleResize() {
    SetWindowDimentions({width: window.innerWidth , height: window.innerHeight});
  }

  useLayoutEffect(() => {
    (() => handleResize())();

    window.addEventListener('resize' , handleResize);

    return () => {
        window.removeEventListener('resize' , handleResize);
    }
  }, []);

  return WindowDimentions;
}

export default WindowResizeHook;
