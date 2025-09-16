function ProfileCard({name, age, occupation, salary}){
    return(
        <div style={{
            border: "1px solid black",
            padding: "5px 10px",
            margin: "50px 10px"
        }}>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h1>Occupation : {occupation}</h1>
            <h1>Salary : {salary}</h1>
        </div>
    )
}

export default ProfileCard;