import {useState, useEffect } from "react";

function Apifetch(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const savedUsers = JSON.parse(localStorage.getItem("user"));
        if(savedUsers && savedUsers.length > 0){
            setUsers(savedUsers);
            setLoading (false);
        } else{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
                localStorage.setItem("user", JSON.stringify(data))
                setLoading(false);
            });
        }
        
    }, []);

    if(loading){
        return <h2>Loading data....</h2>
    }

    return (
        <div>
            <ul>
                {users.map((data) => {
                    return <li key={data.id}>
                        {data.name} - {data.email}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Apifetch;