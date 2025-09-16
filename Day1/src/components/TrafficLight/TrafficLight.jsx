function TrafficLight({signal}){
    if(signal == "red"){
        return <h1 style={{color:"red"}}>STOP</h1> 
    }else if(signal == "yellow"){
        return <h1 style={{color:"yellow"}}>Wait</h1>
    }else if(signal == "green"){
        return <h1 style={{color:"green"}}>Go</h1>
    }

    return <h1>Invalid Signal</h1>
}

export default TrafficLight;