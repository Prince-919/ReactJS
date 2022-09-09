import React from "react";
function Test(){
    let data = "Prince Sharma";
    function apple(){
        data = "Rahul Sharma";
        alert(data);
    }
    return(
        // <button onClick={() =>alert("Hello")}>Click Me</button>
       <> 
       <h1>{data}</h1>
        <button onClick={apple}>Click Me</button>
        </>
    )
}

export default Test;