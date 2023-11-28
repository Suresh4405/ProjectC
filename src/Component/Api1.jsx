
import React from "react";

import Usefetchapi from "../Hooks/Usefetchapi";


export default function Api1() {


    const { data,error } = Usefetchapi("https://jsonplaceholder.typicode.com/todos", [])


    return (
        <>
            {data.map((dd, index) => (
                <div key={index} className="ml-4">
                    <p>{dd.id}.{dd.title}</p>
                    <p></p>
                </div>
            ))}
        </>
    )
}