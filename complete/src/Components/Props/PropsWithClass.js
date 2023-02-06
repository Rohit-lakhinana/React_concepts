import React, {Component} from "react";
import '../../App.css'

class PropsWithClass extends Component{
    render(){
        return(
        <div className="Props">   
        <h2>CLASS COMPONENT</h2>
        <h5>PROPS WITH CLASS COMPONENTS</h5>
        <h4>Hello {this.props.name} </h4>
        <h4>I LIKE WATCHING {this.props.movie} </h4>
        </div>
        )
    }
}

export default PropsWithClass
