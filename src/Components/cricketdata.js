import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';

function datae(hello){
    console.log(hello)
    return hello
}

function cricketdata(){
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
        <form className="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2">
  <i className="fas fa-search" aria-hidden="true"></i>
  <input type="text" className="form-control form-control-sm ml-3 w-75" onChange={e=>setdata({name:e.target.value})} placeholder="Search" 
    aria-label="Search"/>
    <button onClick={()=>datae(datas)}>Search</button>
</form>
<button onClick={datae(datas)}>Search</button>

        <h1>hello Home</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                {(datas.users == null)? (<p>error</p>):
       ( datas.users.map((user)=>(
            <p>{user.id}</p>
        )))}</td>
        <td>
                {(datas.users == null)? (<p>error</p>):
       ( datas.users.map((user)=>(
            <p>{user.name}</p>
        )))}</td>
         <td>
                {(datas.users == null)? (<p>error</p>):
       ( datas.users.map((user)=>(
            <p>{user.score}</p>
        )))}</td>
        </tr>
        </tbody>
        </table>
    </div>
)
}
export default cricketdata;
