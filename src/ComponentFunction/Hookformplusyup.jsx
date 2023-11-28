import React from "react";
import "./Hook.css"
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
let r=0

const schema= yup.object().shape({
    firstname:yup.string().required("please enter  your first name"),
    lastname:yup.string().required("please enter  your last name"),
    age:yup.string().required("please enter  your age"),
    email:yup.string().email().required("please enter  valid email"),
    password:yup.string().required("please enter  your password ").min(4).max(16),
    confirmpassword:yup.string().required("fill the password").oneOf([yup.ref("password")],"password is not same")
})



function Hookformplusyup(){
    r++

    const {register,handleSubmit,formState:{errors},watch}=useForm(
        {
            resolver:yupResolver(schema)
        }
    )
    const onpress=(data)=>{
console.log(data);

    }
    let roo=watch("firstname")
    let coo= watch("age")

 
    
    
    console.log(errors);
    return(
        <>
        <form onSubmit={handleSubmit(onpress)}>
            <>
            {r}
            <br></br>
            <br></br>
            <input {...register("firstname") }type="text" placeholder="Firstname" ></input>
            <br></br>
            <p>{errors?.firstname?.message}</p>
            <p> {roo}</p>
            <br></br>
            <input {...register("lastname")} type="text" placeholder="Lastname" ></input>
            <br></br>
            <p>{errors?.lastname?.message}</p>
            <br></br>
            <input {...register("age")} type="number" placeholder="age"></input>
            <br></br>
            {coo}
            <p>{errors?.age?.message}</p>
            <br></br>
            <input {...register("email")}type="text" placeholder="email"></input>
            <br></br>
            <p>{errors?.email?.message}</p>
            <br></br>
            <input {...register("password")} type="text" placeholder="password"></input>
            <br></br>
            <p>{errors?.password?.message}</p>
            <br></br>
            <input {...register("confirmpassword")} type="text" placeholder="confirm password"></input>
            <br></br>
            <p>{errors?.confirmpassword?.message}</p>
            <br></br>
            <button onClick={onpress}>Submit</button>
            </>
        </form>
        </>
    )
}
export default Hookformplusyup