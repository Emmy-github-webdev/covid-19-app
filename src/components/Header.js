import React from 'react';

const Header = () => {
  const year = new Date().getFullYear();
  return (
    <header>
      <div>{year}</div>
      <nav>
        <div>Africa</div>
        <ul>
          <li>speak</li>
          <li>settings</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
