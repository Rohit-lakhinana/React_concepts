import React,{useState} from 'react';
import axios from "axios";

const FireBsaeSignUP = () => {
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        setpassword : "",
        confirmpassword : "",
    })
    const {firstname,lastname,email,setpassword,confirmpassword} = data;
    const changeHandler = e =>{
        setData ({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post("https://first-firebase-fa65d-default-rtdb.firebaseio.com/register.json",data)
        .then(()=> alert("SUBMITTED SUCCESSFULLY"))
    }
  return (
    <div>
    <form onSubmit={submitHandler}> 
    {/* it is used to store the submitted data into backend */}
        <h2>FireBsaeSignUP</h2>
        <input type="text" placeholder="enter firstname" name="firstname" value={firstname} 
        onChange={changeHandler} /> 
        {/* onChange is used to store data into an variable */}
        <br/>
        <input type="lastname" placeholder="enter lastname" name="lastname" value={lastname}
        onChange={changeHandler} />
        <br/>
        <input type="email" placeholder="enter email" name="email" value={email}
        onChange={changeHandler} />
        <br/>
        <input type="password" placeholder="enter password" name="setpassword" value={setpassword} 
        onChange={changeHandler} />
        <br/>
        <input type="password" placeholdeer="confirm password" name="confirmpassword" value={confirmpassword}
        onChange={changeHandler} />
        <br/>
        <input type="submit" value="SIGN-UP" />
    </form> 
    </div>
  )
}
export default FireBsaeSignUP