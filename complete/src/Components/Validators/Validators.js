import React,{useState} from 'react';

const Validators = () => {
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        setpassword : "",
        confirmpassword : "",
    })
    const {firstname,lastname,email,setpassword,confirmpassword} = data;
    const changeHandler = e =>{
        // we need to write e.target .value without [brackets]
        setData ({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(lastname.length <= 5){
            alert("Last name must have 5 characters");
        }
       else if(setpassword !== confirmpassword){
            alert("password should match confirm password");
        }
        else{
            console.log(data)
        }
    }
  return (
    <div>
    <form autoComplete='off' onSubmit={submitHandler}> 
    {/* it is used to store the submitted data into backend */}
        <h2>SignUP</h2>
        <input type="text" placeholder="enter firstname" name="firstname" value={firstname} onChange={changeHandler} /> 
        {/* onChange is used to store data into an variable */}
        <br/>
        <input type="text" placeholder="enter lastname" name="lastname" value={lastname} onChange={changeHandler} />
        <br/>
        <input type="email" placeholder="enter email" name="email" value={email} onChange={changeHandler} />
        <br/>
        <input type="password" placeholder="enter password" name="setpassword" value={setpassword} onChange={changeHandler} />
        <br/>
        <input type="password" placeholder="confirm password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} />
        <br/>
        {setpassword !== confirmpassword ? <p style={{color:"red"}}>Passwords did not match</p>:<p style={{color:"green"}}>password match</p>}
        <input type="submit" value="SIGN-UP" />
    </form> 
    </div>
  )
}

export default Validators