import React, { useState } from 'react';
import OddEventResult from './OddEventResult';

const Counter = () => {

    const [count, setCount] = useState(0);
    const onIcrease = () => {
        setCount(count+1);
    }
    const onDecrease = () =>{
        setCount(count-1);
        console.log(count);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIcrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEventResult count={count}/>
        </div>
    );
};

export default Counter;