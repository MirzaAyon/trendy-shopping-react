import React, { useState } from 'react';

const Test = (props) => {
    // console.log(props); //check inspact test er country showing 
    // console.log(props.country);
    // console.log(count)

    const [count, setCount] = useState(0);
    const minus = () => {
        // console.log('minus')
        if (count == 0) {
            setCount(0)
        }


    }
    // const plus = () => {
    //     // console.log('plus');
    //     setCount(count + 1)

    // }
    console.log(count);
    return (
        <div>
            {/* <h1>This is test {props.country}</h1> */}
            <h1>{count}</h1>
            <div className='count mt-5'></div>
            <button onClick={() => setCount(count + 1)} >+</button>
            <button onClick={() => setCount(count - 1)} >-</button>
        </div>

    );
};

export default Test;