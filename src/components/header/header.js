import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="a">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="a">People</a>
        </li>
        <li>
          <a href="a">Planets</a>
        </li>
        <li>
          <a href="a">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
