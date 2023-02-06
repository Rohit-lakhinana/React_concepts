import React from 'react'

const onClick = () => {
  return (
    <div>
    <h2>onClick</h2>
    <button onClick={()=> console.log("CLICKED")}>CLICK HERE</button>
    </div>
  )
}

export default onClick

