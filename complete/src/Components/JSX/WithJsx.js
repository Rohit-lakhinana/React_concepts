import React from "react";

const WithJsx = () => {
    // always write CAMELCASES
    // background-color(wrond), backgroundColor(right)
    const styling = {
        color:"white",
        backgroundColor:"blue",
        textAlign : "center"
    }
    return (
        <div>
            <h2 style={styling}>WITH JSX</h2>
            <h4 style={{color:"green",backgroundColor:"yellow"}}>
                 IN LINE CSS
            </h4>
        </div>
    )
}

export default WithJsx   
