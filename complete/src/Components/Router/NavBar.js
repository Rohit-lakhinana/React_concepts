import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <ul>
           <Link to="/"> <li>Home</li> </Link>
           <Link to="about"> <li>About</li> </Link>
           <Link to="contact"> <li>Contact</li> </Link>
           <Link to="aboutreact"><li>AboutReact</li></Link>
        </ul>
    </div>
  )
}


export default NavBar

