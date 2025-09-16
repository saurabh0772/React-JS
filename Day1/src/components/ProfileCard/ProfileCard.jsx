import './ProfileCard.css';

function ProfileCard({name, age, loc}){
    return(
        <div className="divv">
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Location : {loc}</h2>
        </div>
    )
}

export default ProfileCard;