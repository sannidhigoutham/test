import React from "react";
import Linked from "./linkedin.png";
function Footer(){
    return(
    <div className="footer">
        <div className="footer-body">
            <h2>ContactUs :</h2>
        <h4>Email :- Sannidhigoutham97@gmail.com</h4>
            <a href="https://www.linkedin.com/in/goutham-sannidhi-93b854143/"><img className="img2" src={Linked}></img></a>

        </div>
    </div>
    )

}

export default Footer;