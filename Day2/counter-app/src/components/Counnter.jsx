import { useState } from "react";



function Counnter(){
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }

    return (
    <div>
        <h1>Counter - {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
    </div>
);
}

export default Counnter;