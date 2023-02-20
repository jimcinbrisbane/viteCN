import { useState } from 'react'


function Header()
{

    return (
        <div id="header">
            <div id="topnav">
                <div class="contentwrapper">
                    <a href="#" class="navbtn">Membership</a>
                    <a href="#" class="navbtn">Events</a>
                    <a href="#" class="navbtn">Shirts</a>
                    <a href="#" class="navbtn">Blog</a>
                    <div class="right">
                        <a href="#" class="navbtn">API</a>
                        <a href="#" class="navbtn">Contact Us</a>
                    </div>
                </div>
            </div>
            <div id="header-content">
                <div class="contentwrapper">
                    <img src="./logo.png" alt="Code Network logo" style={{ width: "20%" }} />
                    <h1>Join the community</h1>
                    <a href="#" id="action">facebook <i class="fa fa-external-link" aria-hidden="true"></i></a>



                </div>
            </div>
        </div >
    )
}

export default Header
