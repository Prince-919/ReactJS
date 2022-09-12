import {useState} from 'react';

function StateUse(){
    const [data, setData] = useState(0);
    function updataData()
    {
        setData(data + 1);
    }
    // console.warn("_______");
    return(
        <div className='app'>
        <h1>{data}</h1>
             <button onClick={updataData}>Update Data</button>
        </div>
    )
}
export default StateUse;
