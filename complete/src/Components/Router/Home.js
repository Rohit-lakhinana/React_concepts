import React,{useState} from 'react';
import '../../App.css';
// for redirecting
import { Navigate } from 'react-router-dom';


const Home = () => {
  const [auth,setAuth] = useState(false);
  if(auth){
    return <Navigate to='./Contact' />
  }
  return (
    <div className='routercss'>
      <h2>this is Home Page</h2>
      <button onClick={()=>setAuth(true)}>REDIRECT ME TO CONTACT PAGE</button>
    </div>
  )
}

export default Home

