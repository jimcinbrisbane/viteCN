import { useState } from 'react'
import { Link } from "react-router-dom";
import './sponsor.css';

function Sponsor()
{
    return (
        <div id="global-padding">
          <h1>Our Sponsors:</h1>
          <h2>Platinum Sponsors</h2>
            <a href="https://technologyonecorp.com/" id="action">
                <img src="/sponsors/technologyone.png" alt="Sign up" className="button-image" />
            </a>
          <h2>Gold Sponsors</h2>
        </div>
      );
      
}

export default Sponsor
