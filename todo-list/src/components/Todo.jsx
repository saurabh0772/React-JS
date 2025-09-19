import { useState } from "react";

function Todo(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [done, setDone] = useState([]);

    function addTask(){
        // alert(task);
        if(task.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text:task,
            completed: false
        }

        setTasks([...tasks, newTask]);
        setTask("");
    }

    function deleteTask(idd){
        const updateList = tasks.filter((work) => work.id !== idd);
        setTasks(updateList);
    }
    return (
        <div>
            <h1>TODO LIST</h1>
            <input type="text" placeholder="input task"
            onChange={(e) => setTask(e.target.value)} value={task}
            onKeyDown={(e) => { if (e.key === 'Enter') addTask()}}
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((t) => {
                    return <li key={t.id}>
                        <span>{t.text}
                           <button onClick={() => deleteTask(t.id)}>Delete</button>
                           <input type="checkbox" 
                            onClick={() => {
                                // t.completed = true;
                                setDone([...done, t]);
                                deleteTask(t.id);
                            }}
                           />
                        </span>
                    </li>
            })}
            </ul>

           {done.length > 0 && <h3>Completed Work</h3>}
            <ul>
                {done.map((t) => {
                    return <li key={t.id}>{t.text}</li>
                })}
            </ul>
        </div>
    );

    
}
export default Todo;