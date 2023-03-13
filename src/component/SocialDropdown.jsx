import React, { useState } from 'react';
import './Navbar.css';

const SocialDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="social-dropdown">
      <button className="button-style">Socials</button>
        <div className="social-dropdown-menu">
          <a href="https://www.instagram.com/codenetwork_/">Instagram</a>
          <a href="https://www.facebook.com/CodeNetwork">Facebook</a>
          <a href="https://www.linkedin.com/company/codenetwork/">LinkedIn</a>
        </div>
    </div>
  );
};

export default SocialDropdown;
