import React, { useState,useId } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todolist(){

    let uuid= uuidv4()
    const[input,setInput]=useState("")
    const [todo,setTodo]=useState([
        {
            id:1,
            title:"wake up"
        },
        {
            id:2,
            title:"brush"
        },
        {
            id:3,
            title:"bath"
        },
        {
            id:4,
            title:"pray "
        },
        {
            id:5,
            title:"eat"
        },
    ])


    const handlechange=(event)=>{
setInput(event.target.value)
    }

    const handleadd=()=>{
        console.log(uuid);
        setTodo([...todo,{id:uuid,title:input}])
        setInput("")
            }

    const handledelete=(did)=>{
        const edit=todo.filter(data=> data.id !==did)
        setTodo(edit)
    }     
    
    
    const handleupdate=(i)=>{
        console.log(i);
let update=prompt("edit here",todo[i].title)
const copyarr=[...todo]
copyarr[i].title=update
setTodo(copyarr)
console.log(update);
    }

    return(
        <>
        <input placeholder="Enter A Todo" value={input} onChange={handlechange}></input>
        <button onClick={handleadd}>Add</button>
        {todo.map((data,index)=>(
           <div key={index}>
           <p> {data.title}</p>
           <button onClick={()=>handledelete(data.id)}>X</button>
           <button onClick={()=>handleupdate(index)}>Update</button>
           </div>
        ))}
        </>
    )
}
export default Todolist