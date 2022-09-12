import React, {useState} from 'react';

function Student(props)
{
    const [name, setName] = useState("Prince");
    // console.log(props.name);
    return(
        <div>
            <h1>Hello {name}</h1>
            {/* <h2>Email : {props.email}</h2> */}
            <button onClick={() =>{setName("Rahul")}}>Update Data</button>
             
        </div>
    )
}
export default Student;