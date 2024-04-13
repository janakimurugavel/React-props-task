import React, { useEffect, useState } from "react";

const Janu = () => {
    const [data, setData] = useState(0);
    const [jj, setjj] = useState(false); // State to manage visibility

    useEffect(() => {
        setData(100000);
    }, []);

    const handleIncrement = () => {
        setData(data + 1);
    }

    const handleDecrement = () => {
        setData(data - 1);
    }

    // Function to handle show
    const handleShow = () => {
        setjj(true); // Set isShown to true to show the content
    }

    // Function to handle hide
    const handleHide = () => {
        setjj(false); // Set isShown to false to hide the content
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button> 
            After clicked: {data}
            <button onClick={handleDecrement}>-</button> <br/><br/>
            <button onClick={handleShow}>Show</button> 
            <button onClick={handleHide}>Hide</button> 
            { jj && <p>hii opened</p>} 
            </div>
    )
}
export default Janu;
