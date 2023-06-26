import React from 'react';
import './sponsor.css';

function Sponsor() {
  return (
    <div id="sponsor">
      <div id="sponsor-content">
        <div className="global-padding">
          <h1>Proudly Sponsored By:</h1>
          <div className="sponsor-grid">
            <div className="platinum">
              <h2>Platinum Sponsors</h2>
              <ul>
                <li>
                  <div className="tier">
                    <div className="card">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
