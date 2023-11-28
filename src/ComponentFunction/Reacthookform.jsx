import React from "react";
import {useForm} from "react-hook-form"
let r=0;
function Reacthookform(){
    r++

    const {register,handleSubmit,formState:{errors}}=useForm()

const onsubmit=(data)=>{
    console.log(data);
}
    console.log(errors);
   
    return(
        <>
        <form onSubmit={handleSubmit(onsubmit)}>
           <p>..............................reload::{r}................</p> 
            <input  {...register("firstname",{required:"Fill your first name"})} type="text"  placeholder="firstname"></input>
            <br></br>
        
            <p>{errors?.firstname?.message}</p>

            <br></br>
            <input {...register("lastname",{required:"fill your last name"})}  type="text" placeholder="lastname"></input>
            <br></br>
            <p>{errors?.lastname?.message}</p>
            <br></br>
            <input {...register("age",{required:"enter your age"})} type="text"  placeholder="age"></input>
            <br></br>
            <p>{errors?.age?.message}</p>
            <br></br>
            <input {...register("password")} type="text" placeholder="password"></input>
            <br></br>
            <br></br>
            <br></br>
        
            <button onClick={onsubmit}>Submit</button>
        </form>
        </>
    )
}
export default Reacthookform