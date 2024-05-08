import React, { Component } from 'react';
import Is from "./Is";
import Experience from "./Experience";
import Footer from "./Footer";
import Project from "./Project";



import {BrowserRouter, Routes,Router,Route,Link ,NavLink  , Navigate} from 'react-router-dom'
import img from "./1.png"


function Contactus(){

return (
    <div>
    <div className='App'>
    <div className=''>
    <div className='containers2'>
        <h1>Goutham Sannidhi</h1>
        <h4>Worked As Software Engineer</h4>
        <h4>Qualification :- Masters In Computer Science</h4>
        <h4>Email :- Sannidhigoutham97@gmail.com</h4>
        <div className='navbar'>
            <ul>
                <li>
                <Link className='button1' to="Experience">Experience</Link>
                </li>
                <li>
                <Link className='button1' to="Project">Project</Link>
                </li>
            </ul>
        {/* <Link className='container1' to="Is">hi</Link> */}
        {/* <Link className='container1' to="Is">hi</Link> */}
        </div>
    </div>
    </div>
    </div>
    {/* <div>
    <Footer />
    </div> */}
    <hr></hr>
    {/* <div className='container1'>
        <h1>Experience</h1>
    <table className='table2' border="1px">
        <tr>
            <td><Link to="/Is"><div><h1>Techwave Consulting Private Limited</h1></div></Link>
            <h2>Role : Software Engineer</h2>
            <ul>
                <li>I worked for the project developing employee management system software for Techwave consulting private limited</li>
                <li>I played a role for developing the attendance module. This module allowed employees to submit their daily attendance records through 
                    the web interface. It helped in tracking the presence and availability of employees.</li>
                <li>I contributed to the development of the timesheet module. Employees could submit their timesheets, specifying the projects they 
                    worked.</li>
                <li>I played a role in implementing the resignation module. When an associate wanted to resign, they would submit their resignation 
                    through the application.</li>
                <li>I was involved in creating the project module. This module allowed project managers to assign or unassign projects to associates.
                    </li>
                <li>contributed to an appraisal module used for performance evaluations which is related to hikes for employes.</li>
                <li>Contributed in developing a leave module where associates could apply for leave, which required manager approval.</li>
                <li>hosted scrum meetings on the weekly basis.</li>
                <li>Angular is used as a platform to develop front-end </li>
                <li>Laravel is used a platform to develop back-end.</li>
                <li>Mongo DB and LDAP is used as server to store the data and used GIT hub.</li>
                <li>Jira is used to assign tasks and some other tools like postman.</li>
                <li> wrote the unit test cases for the each and every task I developed.</li>
                    
            </ul>
            </td>

        </tr>
        <tr>
            <td>
            <Link to="/Is"><div><h1>Techwave Consulting Private Limited</h1></div></Link>
            <h2>Role: Android Developer</h2>
            <ul>
                <li>developed an application for controlling an IOT devices using Bluetooth.</li>
                <li>Ensure in integration and efficient communication between the mobile app and IoT hardware.</li>
                <li>Used Android Studio for writing clean and maintainable code in Java.</li>
                <li>Troubleshooting and debugging Android applications, identifying and resolving issues related to connectivity, sensor data, or device 
                    compatibility in an IoT environment.</li>
                <li>Assisting in the documentation of software requirements, architecture, and technical specifications.</li>
            </ul>
            </td>
        </tr>
    </table>
    </div> */}
    </div>
)
}
export default Contactus;
