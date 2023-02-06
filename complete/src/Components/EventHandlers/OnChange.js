import React,{useState} from 'react'

export const OnChange = () => {
    const [user,setUser] = useState("");
    const handler = e => {
        setUser(e.target.value)
    }
  return (
    <div>
        <h2>OnChange</h2>
        <input type="text" placeholder="enter name" value={user} name="user" onChange={handler} /> <br /><br/>
        {user}
    </div>
  )
}