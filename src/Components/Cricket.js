import React, { Component,useEffect,useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
// import './custom.scss';

function Dataa(){
    const datavalue="";
    const data=[
        {id:'1',name:'gou',value:'1',score:'1'},
        {id:'2', name:'bha',value:'2',score:"1"},
         {id:'3',name:'jay',value:'3',score:"3"},
         {id:'4',name:'sum',value:'4',score:'4'}
      ];
    fetch("/api/data").then(
        response => response.json()
    ).then(
        datavalue => {
            // setdata(data);
            console.log("datavalue",datavalue);

        }
    )
    return datavalue;
}


class cricket extends Component{
    
    constructor(props){
        super(props)

        this.state={
            name:"" ,
            idsaa:false,
            datas:[]
        }
    }

    update=(e)=>{
        this.state.name=e
    }
   
    updatea=(name)=>{
       
        name ="goutham"

        axios.post("/data",{name})
        .then(res =>{
                this.setState({datas : res.data.users})
        console.log("----",res.data)})
        .catch(err => console.log(err))
    }


render(){

    const {post}=this.state
return (
    <div>
        <div className='container'>
  <i className="fas fa-search" aria-hidden="true"></i>
  <input type="text" className="form-control form-control-sm ml-3 w-75" onChange={this.update()}  name='this.state.name' placeholder="Search" value={this.state.name}
    aria-label="Search"/>
<button onClick={()=>this.updatea(this.state.name)}>Search</button>

        <h1>Goutham Sannidhi</h1>
        <h4>Worked As Software Engineer</h4>
        <h4>Qualification :- Masters In Computer Science</h4>
        <h4>Email :- Sannidhigoutham97@gmail.com</h4>
       </div>
       <div>
       <table className='table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
            
         {this.state.datas.length?
        this.state.datas.map(posts =><tr><td>{posts.id} </td><td>{posts.name}</td><td>{posts.score}</td></tr>): null
      }
        </tbody>
        </table>
    </div>
     </div>
)
}
}
export default cricket;
