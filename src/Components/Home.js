import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';

function datae(){
    
}

function Home(){
    const data="1234567890";

    const[datas,setdata]=useState([{}])

    useEffect(()=> {
        axios.put("/api/puts",{data})
        .then(res =>console.log("----",res.data.data))
        .catch(err => console.log(err))
            
    })

    useEffect(() => {

        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setdata(data);
                console.log(data);

            }
        )
    },[])

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
        <div className='navbar'>
            <ul>
            <li>
                data
            <ul>
                <li><a href="">hi</a></li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            </li>
            </ul>
        </div>
        <h1>hello Home</h1>
        {(datas.users == null)? (<p>error</p>):
       ( datas.users.map((user)=>(
            <p>{user.name}</p>
        )))}
    </div>
)
}
export default Home;
