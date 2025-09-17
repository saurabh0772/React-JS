import { useState } from "react";

function Todo(){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [done, setDone] = useState([]);

    function addtask(){
        if(task.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTask("");
    }

    function deletetask(id){

        const updated = tasks.filter((work) => work.id !== id);
        setTasks(updated);
        

    }

    // function donee(id){
    //     setDone([...done, tasks.find((work) => work.id === id)]);
    //     deletetask(id);
    // }

    // function dothis(id){
        
    //     setDone([...done, {...work, completed: true}.text]); 
    //     deletetask(work.id)
    // }

    return(
        <div>
            <h1>Todo App : </h1>
            <input type="text" placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)} value={task}
                onKeyDown={(e) => { if (e.key === 'Enter') addtask() }}
            />
            <button onClick={addtask}>Add</button>

            <ul>
                {tasks.map((work) => {
                    return <li key={work.id}>
                        <span>
                            {work.text}
                            <button onClick={() => deletetask(work.id)}>Delete</button>
                            <input type="checkbox" onClick={() => {
                                work.completed = true;
                                setDone([...done, {...work, completed: true}]);
                                deletetask(work.id);
                            } }/>
                        </span>
                    </li>
                })}
            </ul>

            <h2>Completed Tasks :</h2>
            <ul>
                {done.map((item) => (
                    <li key={item.id}>{item.text} </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;