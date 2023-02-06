import React,{useState} from 'react'

const Calculator = () => {
    const [input,setInput] = useState("");
    const [result,setResult] = useState("");
    const changeHandler = e =>{
        setInput(e.target.value)
    }
    function clearInput(){
        setInput("")
    }
    function clearResult(){
        setResult("")
    }
  return (
    <div>
        <h2>Calculator</h2>
        <input type="text" value={input} name="input" onChange={changeHandler} />
        <br/>
        <button onClick={() => setResult(eval(input))}>CALCULATE</button>
        <br/>
        <h4 className='result'>{result}</h4>
        <br/>
        <button onClick={()=>setInput(input+"1")}>1</button>
        <button onClick={()=>setInput(input+"2")}>2</button>
        <button onClick={()=>setInput(input+"3")}>3</button>
        <button onClick={()=>setInput(input+"4")}>4</button>
        <button onClick={()=>setInput(input+"5")}>5</button>
        <button onClick={()=>setInput(input+"6")}>6</button>
        <button onClick={()=>setInput(input+"7")}>7</button>
        <button onClick={()=>setInput(input+"8")}>8</button>
        <button onClick={()=>setInput(input+"9")}>9</button>
        <button onClick={()=>setInput(input+"0")}>0</button>
        <button onClick={()=>setInput(input+"+")}>+</button>
        <button onClick={()=>setInput(input+"-")}>-</button>
        <button onClick={()=>setInput(input+"*")}>*</button>
        <button onClick={()=>setInput(input+"%")}>%</button>
        <button onClick={()=>setInput(input+"/")}>/</button>
        <button onClick={()=>setInput(input+"(")}>(</button>
        <button onClick={()=>setInput(input+")")}>)</button>
        <button onClick={()=>{clearInput();clearResult()}}>Clear</button>
    </div>
  )
}

export default Calculator


