import { useState } from "react";

function Dark(){
    const [isDark, setDark] = useState(false);
    function handleTheme(){
        setDark(!isDark);
    }

    const page = {
        backgroundColor : isDark ? "black" : "white",
        color : isDark ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s"
    }
    return (
        <div style={page}>
            <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
            <button onClick={handleTheme}>
                {isDark ? "Switch to Light" : "Switch to Dark"}
            </button>
        </div>
    )
}

export default Dark;