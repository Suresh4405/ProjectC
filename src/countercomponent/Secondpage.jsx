import React from 'react';
import { useSuresh } from './Counterprovider';
export default function Secondpage ()  {
    const {decrement}=useSuresh()
    return (
        <div>
            <br></br>
            <button onClick={decrement}>-</button>
    
        </div>
    );
}


