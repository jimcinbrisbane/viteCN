import { useState } from "react";
import { Link } from "react-router-dom";
import "./sponsor.css";

function Sponsor() {
  return (
    <div id="global-padding">
      <h1 style={{ marginTop: "0", marginBottom: "12px" }}>Would you like to support us in 2024?</h1>
      <div style={{ color: "white", fontSize: "18px", marginBottom: "8px" }}>
        Send us an email at <a href="mailto:industry@codenetwork.co">industry@codenetwork.co</a>.
      </div>
      <a href="/code_network_2024_prospectus.pdf" id="action" style={{ padding: "8px" }} target="_blank">
        Read Our Prospectus
      </a>
      <h1>Thank you to our 2024 Sponsors!</h1>
      <h2>Platinum Sponsors</h2>
      <div className="sponsor-grid">
        <a href="https://www.technologyonecorp.com/" id="action">
          TechnologyOne
        </a>
      </div>
      <h2>Gold Sponsors</h2>
      <div className="sponsor-grid">
        <a href="https://www.tanda.co/" id="action">
          <img src="/sponsors/tanda.png" alt="tanda" className="button-image" />
        </a>
      </div>
      <h2>Silver Sponsors</h2>
      <div className="sponsor-grid">
        <a href="https://www.atlassian.com/" id="action">
          <img src="/sponsors/atlassian.png" alt="atlassian" className="button-image" />
        </a>
        <a href="https://www.macquarie.com" id="action">
          <img src="/sponsors/mgl.jpg" alt="Macquarie Group Logo" className="button-image" />
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
