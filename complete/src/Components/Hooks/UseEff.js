import React, {useState, useEffect} from 'react'

export const UseEff = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log(count),[count])
  return (
    <div>
    <h2>useEffect</h2>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>
        CLICK ME TO INCRAESE THE COUNT
      </button>
    </div>
  )
}

// import React, {useState, useEffect} from 'react'

// export const UseEff = () => {
//   const [name,setName] = useState("MM")
//   useEffect(()=>console.log("clicked"),[])
//   return (
//     <div>
//       <h2>{name}</h2>
//       <button onClick={()=>setName("MADHAN")}>
//         click me
//       </button>
//     </div>
//   )
// }

