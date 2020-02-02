import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderStyled = styled.div `
  background-color: #999999;
  padding: 40px 10px 0px 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.30);

`;

const HeaderMenuItem = styled.li `
    float: left;

    color: ${({selected}) => selected ? '#ffffff;' : '#dddddd;'};
    border-bottom: ${({selected}) => selected ? '2px solid #ffffff;' : 'none;'};
    background-color: ${({selected}) => selected ? 'rgba(0,0,0,.1);' : 'inherit;'};

    a {
      display: block;
      text-align: center;
      padding: 14px 16px;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(0,0,0,.1);
      color: #ffffff;
    }
`;

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