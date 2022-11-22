import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const[counter, setCounter]=useState();

const increment = ()=>{
    setCounter(counter+1);
}

const decrement = ()=>{
    setCounter(counter-1);
}
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>
            increment
            </button>

                <button onClick={decrement}>
                    decrement
                </button>
            
        </div>
    );
};

export default Counter;