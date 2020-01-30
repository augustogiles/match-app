import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className="header">
    <ul className="unstyled">
      <li>
        <Link to="/table">table</Link>
      </li>
      <li>
        <Link to="/weeks/1">weeks</Link>
      </li>
    </ul>
  </div>
);