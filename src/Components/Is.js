import React,{ useState } from "react";

function Is() {
    

    const [dataa,setdata]=useState({first:''})

        return(
            
        <div>
            <div>
                <input type="text" value={dataa.first} onChange={e=>setdata({first : e.target.value})}></input>
                {dataa.first}
            </div>
            <h1>1234567890</h1>
        </div>
        )
}


export default Is;