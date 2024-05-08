import React,{useState,useEffect,Component} from "react";
import Template from "./Template";
import axios from "axios";
import Hi from "./Hi";



var id=0;
var ids=false;

function Data(e){

    console.log(e);

    axios.put("/api/put",{id})
    .then(res=>
        console.log("res")
        )
        .catch(err=>
            console.log("error")
            )
}

class Home1 extends Component{

 
    constructor(props){
        super(props)

        this.state={
            name : '',
            idsaa:false
        }
    // const [idsa,setidsa]=useState([{}])

        
    }
    // const [idsa,setidsa]=useState([{}])

    named=(e)=>{
       this.setState({name:e.target.value
       })
    //    if(this.state.name == " "){
        this.state.idsaa=false;
        // }
    //    var ids=e.target.value;
    }

    update=(e)=>{
        console.log("1234");
        // id=this.state.name;
        //     axios.put("/api/put",{id})
        //     .then(res=>
        //         console.log(res)
        //         )
        //         .catch(err=>
        //             console.log("error")
        //             )/
    //    this.setState({name:ids})
       if(this.state.name == " "){
       this.state.idsaa=false;
       }
       else{
       this.state.idsaa=true;

       }

        // {<Hi name={this.state.name} />}
                   
    }
    render(){
        // const {name}=this.state;
    return(<div>
    <div className="left">
        <div className="containers2">
            <div>hello</div>
        <div className="App">
            {/* <form onSubmit={<Data />}> */}
            <input type="text" className="input-text" name="this.state.name" onChange={this.named}  value={this.state.name}></input>
            <button onClick={()=> this.setState({idsaa:true})} className="button1">submit</button>
            {/* </form> */}
        </div>

        <div>
        {/* {<Hi name={this.state.name} />} */}
        {(this.state.name && this.state.idsaa) ? <Template name={this.state.name} /> : "0"}

            
        </div>
        
        </div>
        </div>
        <footer className='footer'>
      <div className='footer-body'>
       Email :<br></br>
       Phone No :<br></br>
      </div>
     </footer>
        </div>
    )
    }
}


export default Home1;