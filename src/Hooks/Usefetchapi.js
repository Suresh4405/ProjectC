import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
const Usefetchapi = (url,initialst) => {

   const [data,setData]=useState(initialst)
   const [error,seterror]=useState(false)

useEffect(()=>{
   common()
},[])


   const common =async ()=>{

      try{
          let response=await axios.get(url)
          console.log(response,"sfsds");
          setData(response.data)
          seterror(false)
      }
      catch(err){
         console.log(err,"ERRORRRRRRRRRRRRRRRR");
         seterror(true)
         
      }
         }

   return {data,error}
}

export default Usefetchapi;

