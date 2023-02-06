import React from "react";

const WithoutJsx = () => {
    // 'div', 'null', 'WITHOUT JSX'
    return React.createElement(
        'div', 'null', React.createElement('h2', 'null', 'WITHOUT JSX')
    )
}

export default WithoutJsx
