// import React, { useEffect, useRef } from 'react';
// export default function Reference (){

// let inputref =useRef()

// useEffect(()=>{
//     inputref.current.focus()
// },[])

//     return (
//         <div style={{marginLeft:60}}>
            
//             <label>first name</label>
//             <input type='text' ref={inputref}></input>


            
//         </div>
//     );
// }


import React, { useRef } from 'react';
import { useState } from 'react';

export default function Reference (){

    const [count,setcount]=useState(0)
    const counted =useRef(0)

    const handleadd =()=>{
        setcount(count+1)
        counted.current+=1
    }
    return (
        <div style={{marginLeft: 500}}>
           <h1>{count} {counted.current}</h1> 
           <button onClick={handleadd}>Add</button>
   

        </div>
    );
}


