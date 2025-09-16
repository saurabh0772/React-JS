function Maps(){
    const people = [
            { id: 1, name: "Saurabh", profession: "Developer" },
            { id: 2, name: "Rohan", profession: "Designer" },
            { id: 3, name: "Ananya", profession: "Manager" },
            { id: 4, name: "Amit", profession: "Developer" }
    ];

    const filtered = people.filter(user => user.profession === "Developer");

    return(
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <ul>
                {people.map((user)=>(
                    <li key={user.id}>Name: {user.name}, Profession : {user.profession}</li>
                ))}
            </ul>

            <h2>Filtered Persons :- </h2>
            <ul>
                {filtered.map((user)=>(
                    <li key={user.id}>Name: {user.name}, Profession : {user.profession}</li>
                ))}
            </ul>
        </div>
    )
}

export default Maps;