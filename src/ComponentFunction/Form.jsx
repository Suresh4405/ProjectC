import React, { useState } from 'react';
let render=0;

function Form() {

    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    render++
    const handlefname=(event)=>{
        console.log("react class",event);
        setFname(event.target.value)
    
    }
    const handlelname=(event)=>{
        console.log("react class",event);
        setLname(event.target.value)
    }
    const [ishide,setIshide]=useState(false)

    const submitbutton=(event)=>{
        event.preventDefault()
       setIshide(true)
    }

    return (
      
        <div>
            <form>
                <>
              <p> reload times: {render} </p>
                <br></br>
                {! ishide&&
                <>
                
<label>First Name</label>
<input type="text" value={fname} onChange={handlefname} ></input>
<br></br>
<br></br>
<label>Last Name</label>
<input type="text" value={lname} onChange={handlelname}></input>
<br></br>
<br></br>
</>}
{ishide &&
    <>
<p>your First name is : {fname}</p>
<p>your last name is : {lname}</p>

</>
}
<button onClick={submitbutton}>Submit</button>


                </>
            </form>
        </div>
    );
}

export default Form;
