import React from 'react'
import '../../App.css' 

export const PropsWithFunc = (props) => {
  return (
    <div className='Props'>
        <h2>HE IS  {props.name} AND HE IS {props.age} </h2>
        <h5>PROPS WITH FUNCTIONAL COMPONENTS</h5>
        <h4> {props.children} </h4>
    </div>
  )
}

// export default PropsWithFunc
