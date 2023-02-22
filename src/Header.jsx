import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "./assets/bg.png";


function Header()
{

    return (
        <div id="header">
            <div id="topnav">
                <div class="contentwrapper">
                    <Link to="/" class="navbtn">home</Link>
                    <div class="right">
                        <Link to="content" class="navbtn">content</Link>
                    </div>
                </div>
            </div>
            <div id="header-content">
                <div class="contentwrapper" style={{ backgroundImage: `url(${bg})`, backgroundSize: "20%", backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className='edges'>
                        <img src="./logo.png" alt="Code Network logo" style={{ width: "30%" }} />
                        <h1>Join the community</h1>
                        <a href="#" id="action">facebook <i class="fa fa-external-link" aria-hidden="true"></i></a>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Header
