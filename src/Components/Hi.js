import React,{ Component } from "react";
import Is from './Is';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route,Link} from 'react-router-dom'

// import { Link , render } from "@testing-library/react";
// import { Link } from 'react-router-dom';

function hello() {
    // render(); {
    //     return(
            // <Link to="/Is">is</Link>
    // // React.render(<Is />,document.getElementById('Is'))

    //     )
    // }
}
function link(){
    // <Route path="Is" element={<Is />}/>
    return(
    <div>
    {/* <Link to='/Is'>is</Link> */}
    esdfghj
    </div>
    )
}



function roots(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Is />
      </React.StrictMode>
    );
    }
    



 const vals = props =>{
    console.log(props);
    return(
    // <h1>hello world {props.name} {props.val}{props.childern}</h1>
    <Is />
    )
}
class Hi extends Component{

    render(){
        return(
        <div>
    {/* <Link to='/IS'>is</Link> */}

            <button onClick={this.vals}>hii</button>
      <button onClick={roots}>roots</button>
          
            <h1>esdrtfgyhujk</h1> 
            {this.props.name}
        </div>
        
        )
    }
}


export default Hi;