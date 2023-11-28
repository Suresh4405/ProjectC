import React from 'react';
import ToastApi from '../ComponentFunction/ToastApi'
import Usefetchapi from '../Hooks/Usefetchapi';
const Api2 = () => {
    const { data, error } = Usefetchapi("https://fakestoreapi.com/products", [])
    return (
        <div>
            {error ?

            <div>
                <ToastApi/>
                 </div>
             : <>
            <div>
            {data.map((dd, index) => (

                <div key={index} >
                    <p> {dd.id}-----{dd.title} </p>
                    <p></p>
                </div>
            ))}
            </div>
            </>
            }
        </div>
    );

}

export default Api2;
