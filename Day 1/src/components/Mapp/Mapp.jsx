function Fruitlist(){
    const numbers = [5, 12, 8, 130, 44];

    return (
        <ul>
            {
                numbers
                .filter(number => number > 10)
                .map((number) => {
                    return <li>{number}</li>
                })
            }
        </ul>
    )
}


export default Fruitlist