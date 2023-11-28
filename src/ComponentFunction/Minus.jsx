import React, { useState } from 'react';
import "./function.css"

const Minus = (props) => {
    const [ishow,setIshow]=useState(false)
    const handlechange=()=>{
        setIshow(!ishow)
    }
    return (
        <div>
            
            <h1>{props.title}</h1>
            {ishow &&
            <h1>{props.info}</h1>
}
            <button onClick={handlechange}className="kee" >{! ishow ? "+" : "-" }</button>
        </div>
    );
}

export default Minus
