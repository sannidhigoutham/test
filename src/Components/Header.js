import React, { Component } from 'react';
import {BrowserRouter, Routes,Router,Route,Link ,NavLink  , Navigate} from 'react-router-dom'


const Header=()=>{

    return(
        <div>
            <br/>
        <div className='header'>
            
            <div>
                <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>

                </select>
           

            <Link to='/Home' className='button'>Home</Link>
            {/* <Link to='/Home1' className='button'>Home1</Link> */}

            <Link to='/Template' className='button'>Template</Link>

            <Link to='/hi' className='button'>Hi</Link>
            <Link to='/cricket' className='button'>Cricket</Link>
            <Link to='/cricketdata' className='button'>Cricketdata</Link>

            <Link to='/Contactus' className='button'>Contactus</Link>
            <Link to='/' className='button'>App</Link>

            <Link to='/Demo' className='button'>Demo</Link>
           
        </div>
        </div>
        <div className='header'>
        <div className='navbar'>
            <ul>
                <li><Link to='/Contactus' className='button'>Contact Us</Link></li>
                <li>hi</li>
                <li>hi
                <ul>
                <li><Link to='/Demo' className='button'>Demo</Link></li>
                <li><Link to='/Demo' className='button'>Demo</Link></li>
                <li><Link to='/Demo' className='button'>Demo</Link></li>
                <li><Link to='/Demo' className='button'>Demo</Link></li>
                <li><Link to='/Demo' className='button'>Demo</Link></li>
                <li><Link to='/Contactus' className='button'>ContactUS</Link></li>
                </ul>
                </li>

            </ul>
            
        </div>
        </div>
        </div>
    )

}

export default Header;