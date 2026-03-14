import React from 'react'
import WindowResizeHook from './WindowResizeHook'

function ResizeHookTest() {

    const WindowResize = WindowResizeHook();

    const {width , height} = WindowResize;

  return (
    <div>
      <h1>This is Lightning Ace</h1>
      <h2>Working on Window Resize Hook</h2>
      <h2>The Width Of Window is {width}</h2>
      <h2>The Height Of Window is {height}</h2>
    </div>
  )
}

export default ResizeHookTest
