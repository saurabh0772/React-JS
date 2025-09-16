function LoginorNot({isLoggedIn}){
    return(
        <div>
            {isLoggedIn ? "Welcome Bakc!" : "please login first"}
        </div>
    );
} 

export default LoginorNot;