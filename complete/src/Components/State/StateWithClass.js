import React, { Component } from 'react';
import '../../App.css'

export default class StateWithClass extends Component {
   state = {
        name : "madhan mm",
        height : "6'fts"
    }
  render() {
    return (
      <div className='State'>
        <h2>HE IS {this.state.name} OF HEIGHT {this.state.height}</h2>
        <h5>STATE WITH CLASS COMPONENTS</h5>
      </div>
    )
  }
}
