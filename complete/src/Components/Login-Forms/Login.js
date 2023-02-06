import React,{useState} from 'react'

const Login = () => {
    const [data,setData] = useState ({
        email : "",
        password : ""
    })
    const {email,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <input type="email" placeholder="Enter Mail-id" name="email" value={email}
        onChange={changeHandler} />
        <input type="password" placeholder="Enter Password" name="password" value={password}
        onChange={changeHandler} />
        <input type="submit" value="LOG-IN" />
        </form>
    </div>
  )
}

export default Login

