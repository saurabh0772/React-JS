import { useState } from "react";

function Counter(){
    const [count, setcount] = useState(0);


    function increase(){
        setcount(count+1);
    }
    function decrease(){
        setcount(0);
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increase}>INCREASE</button>
            <button onClick={decrease}>DECREASE</button>
        </div>
    )
}

export default Counter;