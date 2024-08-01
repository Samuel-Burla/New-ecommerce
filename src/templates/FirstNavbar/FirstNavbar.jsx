// import React from 'react';
import "./firstNavbar.css";

const FirstNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <div className="input">faites votre recherche...</div>
      <a className="profile" href="/login">Profile</a>
    </div>
  );
};

export default FirstNavbar;
