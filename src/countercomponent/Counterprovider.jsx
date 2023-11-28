import React, { useState } from 'react';
import CounterContext from '../Context/CounterContext';
import { useContext } from 'react';

export default function Counterprovider({children})  {
    const[count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    return (
        <div>
            <CounterContext.Provider value={{count,increment,decrement}}>
                 {children}
            </CounterContext.Provider>
        </div>
    );
}


export const useSuresh=()=>{
    return useContext(CounterContext)
}
    
