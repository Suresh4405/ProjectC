import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export default function Axiosee() {
    let uuid = uuidv4()

    const [data, setdata] = useState([])
    const [input, setinput] = useState("")
    const handlechange = (e) => {
        setinput(e.target.value)
    }

    const fetchdata = async () => {
        let res = await axios.get("http://localhost:3000/posts")
        console.log(res.data);
        setdata(res.data)
    }

    const handleadd = async () => {
        let a = { id: uuid, title: input }
        await axios.post("http://localhost:3000/posts", a)
        fetchdata()
        setinput("")
    }


    const handledel = async (did) => {
        await axios.delete(`http://localhost:3000/posts/${did}`)

        fetchdata()

    }
    const handleup = async (i) => {
        let update = prompt("please enter", data[i].title)
        let u = { id: data[i].id, title: update }
        await axios.put(`http://localhost:3000/posts/${data[i].id}`, u)
        fetchdata()
    }


    useEffect(() => {
        fetchdata()
    }, [])



    return (
        <div>
            <input value={input} onChange={handlechange}></input>
            <button onClick={handleadd} >ADD </button>



            {data.map((dd, index) => (
                <div key={index}>
                    <h1>{dd.title}</h1>
                    <button onClick={() => handledel(dd.id)}>-</button>
                    <button onClick={() => handleup(index)}>update</button>

                </div>
            ))}






        </div>
    )
}
