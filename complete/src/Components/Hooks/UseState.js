// UseState(HOOK) can only be used in FUNCTIONAL COMPONENT
import React,{useState} from 'react'

const UseState = () => {
    const [name,setName] = useState("MADHAN")
  return (
    <div> <h2>UseState</h2>
        <h2>{name}</h2>
    <button onClick={()=>setName("HI MM")}>CLICK TO CHANGE TEXT</button>
    </div>
  )
}

export default UseState
 