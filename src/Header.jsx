import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "./assets/bg.png";


function Header()
{
    return (
        <div id="header">
            <div id="header-content">
                <div class="contentwrapper" style={{ backgroundImage: `url(${bg})`, backgroundSize: "20%", backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className='edges'>
                        <img src="./logo.png" alt="Code Network logo" style={{ width: "35%" }} />
                        <h1>Join the community</h1>
                        <a href="https://qutcode.getqpay.com/" id="action">Sign up  <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        <p> </p>
                        <table style={{ margin: "0 auto" }}>

                            <tr>
                                <th>
                                    <a href="https://discordapp.com/invite/f6VRUW9" className="tab"><img src="/discord.svg" /></a>

                                </th>
                                <th>
                                    <a href="https://facebook.com/groups/WeCodeALot" className="tab"><img src="/facebook.svg" /></a>
                                </th>
                            </tr>

                        </table>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Header
