import React from 'react'

function Suggestions({ data }) {
  return (
    <div>
      <ul>
        {data && data.map((user , idx) => {
            return <li key={idx}>{user}</li>
        })}
      </ul>
    </div>
  )
}

export default Suggestions
