import React from 'react';

function Sponsor() {
  return (
    <div id="sponsor">
      <div id="sponsor-content">
        <div className="contentwrapper">
          <div className="edges">
            <img src="./sponsor-logo.png" alt="Sponsor logo" />
            <h2>Become a Sponsor</h2>
            <a href="https://sponsor-website.com" id="action">
              Learn More <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
            <p> </p>
            <table style={{ margin: '0 auto' }}>
              <tr>
                <th style={{ textAlign: 'right' }}>
                  <a href="https://twitter.com/sponsor-twitter">
                    <img src="/twitter.svg" className="tab" />
                  </a>
                </th>
                <th style={{ textAlign: 'left' }}>
                  <a href="https://linkedin.com/company/sponsor-linkedin">
                    <img src="/linkedin.svg" className="tab" />
                  </a>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
