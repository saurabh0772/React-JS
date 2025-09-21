import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function add(){
        if(count < 20) setCount(count + 1);
        else return;
    }
    function remove(){
        if(count > 0) setCount(count - 1);
        else return;
    }

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={add}>Add </button>
            <br />
            <button onClick={remove}>Delete </button>
        </div>
    );
}

export default Counter;