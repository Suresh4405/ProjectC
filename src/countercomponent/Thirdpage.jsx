import React from 'react';
import { useSuresh } from './Counterprovider';
export default function Thirdpage() {
    const {count}=useSuresh()
    return (
        <div>
            <br></br>
           <button>total:{count}</button>
        </div>
    );
}


