import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyled, HeaderMenuItem } from './Header.styled';

export const Header = () => {
  let { href } = window.location
  
    return (
      <HeaderStyled className="header">
        <ul className="menu">
          <HeaderMenuItem 
            selected={href.includes('table')} >
            <Link to="/table">TABLE STATUS</Link>
          </HeaderMenuItem>
          <HeaderMenuItem 
            selected={href.includes('weeks')}>
            <Link to="/weeks/1">WEEKS</Link>
          </HeaderMenuItem>
        </ul>
      </HeaderStyled>
    )
  
};