import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';

import img1 from './1.png';
import samanvi from "./samanvi.jpeg"
function datae(hello){
    console.log(hello)
    return hello
}

function Asvi(){
    const data="1234567890";

    const[datas,setdata]=useState({name :''})

    // update=()=>{

    // }

    useEffect(() => {

        fetch("/api/data").then(
            response => response.json()
        ).then(
            data => {
                setdata(data);
                console.log(data);

            }
        )
    },[])

   
    
return (
    <div>
        <div>
   <img src={samanvi} style={{paddingLeft:"10%"}}></img>
       
    </div>
    <div>
        Name : Samanvi
    </div>
    </div>
)
}
export default Asvi;
