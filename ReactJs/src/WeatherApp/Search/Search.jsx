import React from 'react'
import "./style.css"

function Search({query , setQuery, handleSubmit}) {
  return (
    <div>
      <form className='Search-Form' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Enter City Name' value={query} onChange={(e) => {setQuery(e.target.value)}}/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Search
