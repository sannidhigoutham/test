import React from "react";
import { Component ,useState,useEffect} from "react";
import axios from "axios";
import img1 from "./1.png"
import img2 from "./1.png"

var i=0;
var a=[];
var b=[];
var c=[{}];

function Data(name){
//    alert("qwertgh");
    for(i=0;i<=5;i++){
       a.push(i);
    }

    const [dataq,setdataq]=useState({})

    axios.get("/api/data",{name})
    .then(res=>{

        b=res.data.users
        // console.log(b)
        // b.forEach((element,id) => {
        //     list.push(<li>{element.id}</li>)
        // });
        console.log("=",b);
        
    } )
    .catch(err=>console.log(err))
}


function Template(name){
    var list =[]

const [dataq,setdataq]=useState([{}])

    useEffect(()=>{
        axios.get("/api/images")
    .then(res=>{

        c=res.data.images;
        setdataq(res.data.images)
        // c.push(res.data.users)
        console.log(dataq)
        // b.forEach((element,id) => {
        //     list.push(<li>{element.id}</li>)
        // });
        console.log("=",c);
        
    } )},[])
    // .catch(err=>console.log(err))
    
return(
    <div>
        {/* {b.value} */}
        {/* <Data /> */}
        {dataq.length}
        {/* {dataq.length ? (dataq.map(lists => (<p>{lists.a  ? list.a :  "null"}</p>))) : "null"} */}
        {/* {list.id} */}

        <table border="1px" className="table3">
            <tr>
                {c.map(image=>(<td><p>{<img src={image.images} className="containers1"></img>}</p></td>))}
            </tr>
        </table>

<div className='table'><div>
      <table className='table1' border="1px">
        <tr>
          <td><img src="https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180" className='containers1'></img></td>
          <td><img src={img1} className='containers1'></img></td>
          <td><img src={img2} className='containers1'></img></td>
          <td><img src={img2} className='containers1'></img></td>
          </tr><tr>
          <td><img src={img1} className='containers1'></img></td>
          <td><img src={img1} className='containers1'></img></td>
          <td><img src={img2} className='containers1'></img></td>
          <td><img src={img2} className='containers1'></img></td>
        </tr>
        </table>
      </div>
      </div>

    </div>
)
}

class Template1 extends Component {

    constructor(props){
        super(props)

        this.state={

            id:0
        }
    }

    datas =(e)=>{
        
        this.setState({id:9})

      
      
    }

    update =(name) =>{
        const [dataq,setdataq]=useState({})

    axios.get("/api/data",{name})
    .then(res=>{

        b=res.data.users
        console.log(b)
        // b.forEach((element,id) => {
        //     list.push(<li>{element.id}</li>)
        // });
        console.log("=",b);
        
    } )
    .catch(err=>console.log(err))
    }
    

    render(){
        // console.log(b);
    return(
      <div>
        {/* <Data /> */}
        {/* {a} */}
        {/* {this.state.id} */}
        <Template1 name={this.props.name} />
        {this.props.name}


      </div>  
    )}
}

export default Template;
 