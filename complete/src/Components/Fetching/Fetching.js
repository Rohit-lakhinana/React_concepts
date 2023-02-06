import React,{useEffect,useState} from 'react'
//fetching always works with useEffect hook
const Fetching = () => {
    const [data,setData] = useState ([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json)) //to print data in browser
        // .then(json => console.log(json))
        //to print data in console
    },[])
  return (
    <div>
        <h2>Fetching</h2>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default Fetching;