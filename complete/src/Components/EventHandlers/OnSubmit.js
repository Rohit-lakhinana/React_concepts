import React,{useState} from 'react'

export const OnSubmit = () => {
    const [data,setData] = useState ({
        username:"",
        password:""
    })
    const {username,password} = data;
    const onChange = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <h2>OnSubmit</h2>
        <input type="text" placeholder="enter name" name="username" value={username}
        onChange={onChange} /><br/>
        <input type="password" placeholder="enter password" name="password" value={password}
        onChange={onChange} /><br />
        <input type="submit" name="submit" />
        </form>
    </div>
  )
}
