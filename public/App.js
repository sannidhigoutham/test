import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Hi from './Components/Hi';
import img from './1.png';
import video from './Invitation~3.mp4'


const data=[
  {name:'gou',value:'1'},
   { name:'bha',value:'2'},
    {name:'jay',value:'3'},
    {name:'sum',value:'4'}
];
const datas=[
  'one','two','three','four'
]
class App extends Component{

  
  constructor(props) {
    super(props)
  
    this.state = {
       name : '',
       result:''

    }
    this.states = {
      result:''

   }
  }
 
  
  
//   start=(name)=>{
   
//     // navigator('/hi')
//     if(name!=="hi"){
//       name=" ";
//     }else{
//       name="1";
//     }
//     <h1>Hi</h1>
// alert(name+'hello');
//   }

  modify =(e)=>{

    this.setState({name: e.target.value})
  
  }

  modifyr =(e)=>{

    this.setState({result: e.target.value})
  
  }

  starts=()=>{
alert(this.state.name + this.state.result);
// return(
//   <Hi />
// )
  }
  
 render(){
  const {name}=this.state
  return (
    <div className="container">
      {/* <Hi /> */}
      <div className='header-ab'>
       <header className='header'>
        <div className='header-side'>

          {/* <select option={data.name}></select> */}
        </div>
       </header>
      </div>
      <div className='app'>
      <img src={img} className='img'></img>
      <hr></hr>
      <h1>Videos :</h1>
      <hr></hr>

      <video src={video}  className='img'></video>
      </div>
      

      <div className='containers'>
      
      <form onSubmit={this.starts}>
        hi :<input type='text' name='name' value={name} onChange={this.modify}></input><br></br>
        value :<select name='this.state.result' value={this.state.result} onChange={this.modifyr}>
          <option value=""> </option>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
         </select><br></br>
        <button type='submit'>submit</button>
      </form>
     </div><hr></hr>

     <footer className='footer'>
      <div className='footer-body'>
       Email :<br></br>
       Phone No :<br></br>
      </div>
     </footer>
     </div>
  );
    }
}

export default App;
