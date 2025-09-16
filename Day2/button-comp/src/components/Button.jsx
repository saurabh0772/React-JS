function Button({text}){
    return(
        <div>
            <button style={{
                backgroundColor:'black',
                color:"white",
                padding:"5px 20px"
            }}>{text}</button>
        </div>
    );
}

export default Button;