import React from 'react';
import '../../App.css'

export const StateWithFunc = () => {
    const state = {
        name : 'mm',
        height : "6'fts"
    }
  return (
    <div className='State'>
        <h2>HE IS {state.name} and HE IS {state.height}</h2>
        <h5>STATE WITH FUNCTIONAL COMPONENTS</h5>
    </div>
  )
}