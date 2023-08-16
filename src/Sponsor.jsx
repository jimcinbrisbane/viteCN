import { useState } from 'react'
import { Link } from "react-router-dom";
import './sponsor.css';

function Sponsor()
{
  return (
    <div id="global-padding">
      <h1>Our Sponsors:</h1>
      <h2>Platinum Sponsors</h2>
      <div className='sponsor-grid'>
        <a href="https://technologyonecorp.com/" id="action">
          <img src="/sponsors/technologyone.png" alt="Sign up" className="button-image" />
        </a>
      </div>
      <h2>Gold Sponsors</h2>
      <div className='sponsor-grid'>
        <a href="https://www.tanda.co/" id="action">
          <img src="/sponsors/tanda.png" alt="tanda" className="button-image" />
        </a>
        <a href="https://www.atlassian.com/" id="action">
          <img src="/sponsors/atlassian.png" alt="atlassian" className="button-image" />
        </a>

        <a href="https://www.riotinto.com/" id="action">
          <img src="/sponsors/riotinto.png" alt="riotinto" className="button-image" />
        </a>
        <a href="https://www2.deloitte.com/us/en/pages/consulting/solutions/cloud-consulting-services.html" id="action">
          <img src="/sponsors/d.png" alt="deloitte_cloud" className="button-image" />
        </a>
        <a href="https://www.tanda.co/" id="action">
          <img src="/sponsors/macquarie.png" alt="macquarie" className="button-image" />
        </a>
      </div>

    </div>
  );

}

export default Sponsor
