import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Hi from './Components/Hi';
import Is from './Components/Is';
import Header from './Components/Header';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Template from './Components/Template';

import Demo from './Components/Demo';
import Experience from './Components/Experience';




import Nav from './Components/Nav';
import Switch from 'react-switch';

import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Router,Route,Link ,NavLink  , Navigate} from 'react-router-dom'


import img1 from './Components/1.png';
import img2 from './Components/2.png';
import img3 from './Components/3.jpg';
import img4 from './Components/4.png';
import video from './Components/Invitation~3.mp4'
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Cricket from './Components/Cricket';
import Cricketdata from './Components/cricketdata';
import Asvi from './Components/asvi';





// function roots(){
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Hi />
//   </React.StrictMode>
// );
// }

const data=[
  {id:'1',name:'gou',value:'1'},
   {id:'2', name:'bha',value:'2'},
    {id:'3',name:'jay',value:'3'},
    {id:'4',name:'sum',value:'4'}
];
const datas=[
  'one','two','three','four'
]


function App() {
  return(
    <div>
    <BrowserRouter>
    <Header />

  <Routes>
    <Route  path='/' element={<Experience />}></Route>
    <Route  path='Hi' element={<Hi />}></Route>
    <Route  path='Experience' element={<Experience />}></Route>
    <Route  path='Project' element={<Project />}></Route>
    <Route  path='cricket' element={<Cricket />}></Route>
    <Route  path='cricketdata' element={<Cricketdata />}></Route>
    <Route  path='Asvi' element={<Asvi />}></Route>




    <Route  path='Is'  element={<Is />}></Route>
    <Route  path='Contactus'  element={<Contactus />}></Route>
    <Route  path='Home'  element={<Home />}></Route>
    {/* <Route  path='Home1'  element={<Home1 />}></Route> */}
    <Route  path='Template'  element={<Template />}></Route>


    <Route  path='Demo'  element={<Demo />}></Route>



  </Routes>
  </BrowserRouter>
  <Footer />

  </div>
  )
}

// class App extends Component{

  
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name : '',
//        result:'',
//        post:[]=data

//     }
//     this.states = [{
//       id:'1',
//       result:'1'

//    },
//    {
//     id:'2',
//       result:'2'

//    },
//    {
//     id:'3',
//       result:'3'

//    },
//    {
//     id:'4',
//       result:'4'

//    }]
//   //  this.setState({post : data});
//   }

 
  
  
// //   start=(name)=>{
   
// //     // navigator('/hi')
// //     if(name!=="hi"){
// //       name=" ";
// //     }else{
// //       name="1";
// //     }
// //     <h1>Hi</h1>
// // alert(name+'hello');
// //   }

//   modify =(e)=>{

//     this.setState({name: e.target.value})
  
//   }

//   modifyr =(e)=>{

//     this.setState({result: e.target.value})
  
//   }

//   starts=()=>{
// // alert(this.state.name + this.state.result);
// // return(
//   <Hi />
// // )
//   }

//  render(){
//   const {name}=this.state
//   const list =[];
//   const {post} =this.state

//   datas.forEach((product)=>{
//     list.push(<li>{product}</li>)
//   })
//   console.log("1234567890",this.state.post);

//   return (
//     // <div>
//     //   <button onClick={roots}>roots</button>

//     // </div>
//     <div className="container">
//       <table border='1px'>
//         <tr>
//         <th>id</th>
//         <th>name</th>
//         </tr>

//       {post.length?
//         post.map(posts =><tr><td>{posts.value} </td><td>{posts.name}</td></tr>): null
//       }
//       </table>

//       {/* <a href="hi.html">fghj</a> */}
//       <Hi />
//       <Is />
//       <Is></Is>
//       {/* <Router>
//     <Route path='Is' element={<Is />} >1234567890</Route>
//   </Router> */}
//       <button onClick={roots}>roots</button>
//       <div className='header-ab'>
//        <header className='header'>
//         <div className='header-side'>
//           <select className='button1'>
//             <option>hi</option>
//             <option>hi</option>
//             <option>hi</option>
//             <option>hi</option>
            
//             <a href=''>1</a>



//           </select>

//           <select option={data.name}></select>
//         </div>
//        </header>
//       </div>
    
//       <div className='app'>
//       <img src={img1} className='img1'></img>
//       <hr></hr>
//       <h1>Videos :</h1>
//       <hr></hr>
//       <video  className='img1' controls>
//         <source src={video} type='video/mp4'></source>
//       </video>
//       <hr></hr>
//       <h1>Images :</h1>
//       <hr></hr>
//       {/* <div className='containers1'>
//       <img src={img2} className='containers1'></img>
//       </div> */}

//       <div className='table'><div>
//       <table className='table1' border="1px">
//         <tr>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//         </tr>
//         </table>
//       </div>
//       </div>

//       <table className='table' border="1px">
//         <tr>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//         </tr>
//         <tr>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img1} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//           <td><img src={img2} className='containers1'></img></td>
//         </tr>
//       </table>
//       </div>
//       <hr></hr>
      

//       <div className='containers'>
      
//       <form onSubmit={this.starts}>
//         hi :<input type='text' name='name' value={name} onChange={this.modify}></input><br></br>
//         value :<select name='this.state.result' value={this.state.result} onChange={this.modifyr}>
//           <option value=""> </option>
//           <option value="10000">10000</option>
//           <option value="20000">20000</option>
//          </select><br></br>
//          <input type='file'></input>
//         <button type='submit'>submit</button>
//       </form>
//      </div><hr></hr>
//      <div>
//       {/* <Hi name="goutham" val="hll" /> */}
//      <button onClick={<this.starts />} name='goutham'>hiiii</button>
//      </div>
//      <div>
//       <select option={list}/>
//       <select>
//         <option>{datas}</option>

//       </select>
//       {list}
//      </div>

//      <footer className='footer'>
//       <div className='footer-body'>
//        Email :<br></br>
//        Phone No :<br></br>
//       </div>
//      </footer>
//      </div>
//   );
//     }
// }

export default App;
