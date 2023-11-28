import React, { useEffect, useState } from "react";

const Pro=()=>{

  const [count,setCount]=useState(0)  

  useEffect(()=>{
    console.log("mounting stage");
    setCount(2)
    console.log("updating")
    return()=>{
      console.log("unmounting stage");
    }
  },[])

  
  const add=()=>{

    setCount(count+1)
  }

 
    return(
        <>
        {/* <h1>Name :: {props.name}</h1> */}
        <h1>Ticket count: {count}</h1>
        <button onClick={add}>click me</button>
        </>
    )
}

export default Pro

