import React from 'react'
import Tabs from './tabs'

function Projects() {
  return <span>Built a chat app, scroll indicator, tabs component, and real-world MERN projects.</span>
}

function TabTest() {
  const tabs = [
    {
      label: "About Me",
      content: "I am a MERN stack developer focused on building clean, scalable web applications."
    },
    {
      label: "Skills",
      content: "React, JavaScript, Node.js, Express, MongoDB, Git, Docker."
    },
    {
      label: "Projects",
      content: < Projects />
    }
  ]

  return <Tabs tabs={tabs} />
}

export default TabTest
