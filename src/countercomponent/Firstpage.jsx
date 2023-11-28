import React from 'react';
import { useSuresh } from './Counterprovider';

export default function Firstpage () {
    const {count,increment}=useSuresh()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
           
        </div>
    );
}

;